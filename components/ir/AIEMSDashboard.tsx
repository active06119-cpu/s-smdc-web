'use client'

import { useCallback, useEffect, useId, useMemo, useRef, useState, useLayoutEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Activity, Cpu, Zap, Globe2 } from 'lucide-react'

type RegionId = 'jeju' | 'ercot'

const REGIONS: { id: RegionId; label: string; lat: number; lon: number }[] = [
  { id: 'jeju', label: 'Jeju, Korea', lat: 33.5, lon: 126.5 },
  { id: 'ercot', label: 'ERCOT, Texas', lat: 31.85, lon: -102.36 },
]

type ChartRow = {
  t: string
  price: number
  renewable: number
  demand: number
  asic: number
  gpu: number
}

type DecisionItem = { id: string; time: string; text: string }

function formatTime(d: Date) {
  return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
}

/** Normalize solar (W/m²) and wind (m/s) into 0–1 renewable availability */
function renewableNorm(solar: number, wind: number): number {
  const s = Math.min(1, Math.max(0, solar / 900))
  const w = Math.min(1, Math.max(0, wind / 18))
  return Math.min(1, s * 0.55 + w * 0.45)
}

/** Simulated $/kWh from renewable share + region */
function simPrice(ren: number, region: RegionId, tick: number): number {
  const base = region === 'jeju' ? 0.042 : 0.038
  const spread = region === 'jeju' ? 0.09 : 0.12
  const noise = Math.sin(tick * 0.7) * 0.004 + (Math.random() - 0.5) * 0.006
  return Math.max(0.005, Math.min(0.22, base + spread * (1 - ren) + noise))
}

/** GPU stable base 60–90% */
function simGpu(seed: number): number {
  const v = 72 + Math.sin(seed * 0.4) * 12 + (Math.random() - 0.5) * 4
  return Math.round(Math.min(90, Math.max(60, v)))
}

/** ASIC: high when cheap/surplus (green), low when expensive */
function simAsic(price: number, ren: number, region: RegionId): number {
  const cheap = price < (region === 'ercot' ? 0.045 : 0.05)
  const surplus = ren > 0.55
  if (cheap && surplus) return Math.round(92 + Math.random() * 8)
  if (cheap) return Math.round(78 + Math.random() * 15)
  if (price > 0.11) return Math.round(Math.random() * 18)
  if (price > 0.08) return Math.round(20 + Math.random() * 35)
  return Math.round(45 + Math.random() * 40)
}

function gridStatus(price: number, ren: number): { label: string; surplus: boolean } {
  if (ren > 0.5 && price < 0.055) return { label: 'SURPLUS', surplus: true }
  if (price > 0.1) return { label: 'TIGHT', surplus: false }
  return { label: 'BALANCED', surplus: ren > 0.45 }
}

export default function AIEMSDashboard() {
  const gradId = useId().replace(/:/g, '')
  const [region, setRegion] = useState<RegionId>('jeju')
  const [tick, setTick] = useState(0)
  const [weatherError, setWeatherError] = useState<string | null>(null)
  const [hourlySolar, setHourlySolar] = useState<number[]>([])
  const [hourlyWind, setHourlyWind] = useState<number[]>([])
  const [labels, setLabels] = useState<string[]>([])
  const decisionIdRef = useRef(0)
  const [decisions, setDecisions] = useState<DecisionItem[]>([])

  const coords = useMemo(() => REGIONS.find((r) => r.id === region)!, [region])

  const fetchWeather = useCallback(async () => {
    setWeatherError(null)
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&hourly=shortwave_radiation,wind_speed_10m&past_days=1&forecast_days=1`
      const res = await fetch(url)
      if (!res.ok) throw new Error('Weather fetch failed')
      const data = await res.json()
      const solar: number[] = data.hourly?.shortwave_radiation ?? []
      const wind: number[] = data.hourly?.wind_speed_10m ?? []
      const times: string[] = data.hourly?.time ?? []
      if (!solar.length || !times.length) throw new Error('No hourly data')

      const n = Math.min(24, solar.length)
      const start = Math.max(0, solar.length - n)
      const sliceSolar = solar.slice(start)
      const sliceWind = wind.slice(start)
      const sliceLabels = times.slice(start).map((t: string) => {
        const d = new Date(t)
        return `${d.getHours().toString().padStart(2, '0')}:00`
      })

      setHourlySolar(sliceSolar)
      setHourlyWind(sliceWind.length ? sliceWind : sliceSolar.map(() => 8))
      setLabels(sliceLabels)
    } catch {
      setWeatherError('Using cached simulation — weather API unavailable')
      setHourlySolar((prev) => {
        if (prev.length) return prev
        return Array.from({ length: 24 }, (_, i) => 200 + Math.sin(i / 3) * 150)
      })
      setHourlyWind((prev) => {
        if (prev.length) return prev
        return Array.from({ length: 24 }, (_, i) => 6 + Math.sin(i / 2) * 4)
      })
      setLabels((prev) => {
        if (prev.length) return prev
        return Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`)
      })
    }
  }, [coords.lat, coords.lon])

  useEffect(() => {
    fetchWeather()
  }, [region])

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 5000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      fetchWeather()
    }, 60000)
    return () => clearInterval(id)
  }, [fetchWeather])

  const chartRowsRef = useRef<ChartRow[]>([])

  const chartRows: ChartRow[] = useMemo(() => {
    const rows: ChartRow[] = []
    const len = Math.max(hourlySolar.length, 1)
    for (let i = 0; i < len; i++) {
      const solar = hourlySolar[i] ?? 300
      const wind = hourlyWind[i] ?? 8
      const ren = renewableNorm(solar, wind)
      const phase = tick * 0.15 + i * 0.2
      const price = simPrice(ren, region, phase)
      const demand = 42 + 28 * (1 - ren) + Math.sin(i / 4 + tick * 0.1) * 8
      const renewableGen = ren * 100
      const asic = simAsic(price, ren, region)
      const gpu = simGpu(phase + i)
      rows.push({
        t: labels[i] ?? `${i}h`,
        price,
        renewable: renewableGen,
        demand: Math.max(20, demand),
        asic,
        gpu,
      })
    }
    return rows
  }, [hourlySolar, hourlyWind, labels, region, tick])

  useLayoutEffect(() => {
    chartRowsRef.current = chartRows
  }, [chartRows])

  const latest = chartRows[chartRows.length - 1] ?? {
    t: '--',
    price: 0.06,
    renewable: 50,
    demand: 50,
    asic: 50,
    gpu: 75,
  }

  const grid = gridStatus(latest.price, latest.renewable / 100)

  useEffect(() => {
    const rows = chartRowsRef.current
    if (rows.length === 0) return
    const row = rows[rows.length - 1]
    const g = gridStatus(row.price, row.renewable / 100)
    let text = ''
    if (g.surplus && row.price < 0.045) {
      text = '⚡ Surplus detected → ASIC load ▲ toward max'
    } else if (row.price > 0.11) {
      text = '💰 Price spike → ASIC load ▼ reduced, GPU maintained'
    } else if (g.surplus && row.asic > 85) {
      text = '🔋 Cheap power window → ASIC priority, GPU stable base'
    } else if (row.price > 0.09 && row.asic < 40) {
      text = '⚠️ Expensive grid → ASIC throttled, GPU 60–90% band held'
    } else {
      text = '📊 Load balanced → EMS tracking grid & weather signals'
    }

    decisionIdRef.current += 1
    const item: DecisionItem = {
      id: `d-${decisionIdRef.current}-${tick}`,
      time: formatTime(new Date()),
      text,
    }
    setDecisions((d) => [item, ...d].slice(0, 5))
  }, [tick])

  const priceColor = latest.price < 0.05 ? 'text-emerald-400' : latest.price > 0.1 ? 'text-orange-400' : 'text-cyan-400'
  const priceGlow =
    latest.price < 0.05
      ? 'shadow-[0_0_24px_rgba(52,211,153,0.35)]'
      : latest.price > 0.1
        ? 'shadow-[0_0_24px_rgba(251,146,60,0.3)]'
        : 'shadow-[0_0_20px_rgba(34,211,238,0.2)]'

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* LIVE badge */}
      <div className="absolute -top-2 right-0 z-10 flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/15 px-3 py-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">LIVE</span>
      </div>

      {/* Region + error */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pr-24">
        <div className="flex items-center gap-2 text-slate-300">
          <Globe2 className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-medium">Region</span>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value as RegionId)}
            className="ml-2 rounded-lg border border-cyan-500/40 bg-slate-900/80 px-3 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
          >
            {REGIONS.map((r) => (
              <option key={r.id} value={r.id}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
        {weatherError && <p className="text-xs text-amber-400/90">{weatherError}</p>}
      </div>

      {/* Key metrics */}
      <div
        className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-4 md:p-6 backdrop-blur-md transition-shadow duration-500 ${priceGlow}`}
      >
        <div className="rounded-xl border border-white/5 bg-[#020617]/40 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Current Power Price</p>
          <p className={`mt-1 text-2xl font-bold ${priceColor}`}>${latest.price.toFixed(3)}</p>
          <p className="text-xs text-slate-500">/kWh</p>
        </div>
        <div className="rounded-xl border border-white/5 bg-[#020617]/40 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">ASIC Load</p>
          <p className="mt-1 text-2xl font-bold text-orange-400">{latest.asic}%</p>
          <p className="text-xs text-slate-500">{latest.price < 0.05 ? '▲ priority' : '▼ throttled'}</p>
        </div>
        <div className="rounded-xl border border-white/5 bg-[#020617]/40 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">GPU Load</p>
          <p className="mt-1 text-2xl font-bold text-blue-400">{latest.gpu}%</p>
          <p className="text-xs text-slate-500">Stable base 60–90%</p>
        </div>
        <div className="rounded-xl border border-white/5 bg-[#020617]/40 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Grid Status</p>
          <p
            className={`mt-1 text-2xl font-bold ${grid.surplus ? 'text-emerald-400' : latest.price > 0.1 ? 'text-orange-400' : 'text-cyan-400'}`}
          >
            {grid.label}
          </p>
          <p className="text-xs text-slate-500">{grid.surplus ? '✓ favorable' : 'Monitor pricing'}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-cyan-500/25 bg-slate-900/60 p-4 backdrop-blur-md"
        >
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-cyan-400">
            <Zap className="h-4 w-4" />
            Power Price ($/kWh)
          </h3>
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartRows} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="t" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <YAxis tick={{ fill: '#94a3b8', fontSize: 10 }} domain={['auto', 'auto']} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #22d3ee55', borderRadius: '8px' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Line type="monotone" dataKey="price" stroke="#22d3ee" strokeWidth={2} dot={false} isAnimationActive animationDuration={600} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="rounded-2xl border border-cyan-500/25 bg-slate-900/60 p-4 backdrop-blur-md"
        >
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-emerald-400">
            <Activity className="h-4 w-4" />
            Renewable vs Demand (index)
          </h3>
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartRows} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="t" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <YAxis tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #22d3ee55', borderRadius: '8px' }}
                />
                <Area
                  type="monotone"
                  dataKey="renewable"
                  stroke="#34d399"
                  fill={`url(#${gradId}-g)`}
                  isAnimationActive
                  animationDuration={600}
                />
                <Area
                  type="monotone"
                  dataKey="demand"
                  stroke="#3b82f6"
                  fill={`url(#${gradId}-b)`}
                  isAnimationActive
                  animationDuration={600}
                />
                <defs>
                  <linearGradient id={`${gradId}-g`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#34d399" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="#34d399" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id={`${gradId}-b`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-2xl border border-cyan-500/25 bg-slate-900/60 p-4 backdrop-blur-md"
        >
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-orange-400">
            <Cpu className="h-4 w-4" />
            Data Center Load (ASIC % + GPU %)
          </h3>
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartRows} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="t" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <YAxis domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #22d3ee55', borderRadius: '8px' }}
                />
                <Bar dataKey="asic" fill="#fb923c" radius={[4, 4, 0, 0]} isAnimationActive animationDuration={600} />
                <Bar dataKey="gpu" fill="#38bdf8" radius={[4, 4, 0, 0]} isAnimationActive animationDuration={600} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Decision log */}
      <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/60 p-6 backdrop-blur-md">
        <h3 className="mb-4 text-lg font-bold text-white">AI-EMS Decision Log</h3>
        <ul className="space-y-3">
          <AnimatePresence initial={false}>
            {(decisions.length ? decisions : [{ id: 'init', time: '—', text: '📡 Initializing EMS — awaiting first optimization cycle…' }]).map(
              (d) => (
                <motion.li
                  key={d.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex gap-3 rounded-lg border border-white/5 bg-[#020617]/50 px-4 py-3 text-sm text-slate-300"
                >
                  <span className="shrink-0 font-mono text-xs text-slate-500">{d.time}</span>
                  <span>{d.text}</span>
                </motion.li>
              )
            )}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  )
}
