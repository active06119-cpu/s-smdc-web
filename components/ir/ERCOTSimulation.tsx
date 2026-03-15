'use client'

import { motion } from 'framer-motion'
import { Activity, TrendingUp, Zap, BarChart3, ArrowDownRight, ArrowUpRight } from 'lucide-react'

export default function ERCOTSimulation() {
  const findings = [
    {
      label: 'Negative Price Windows',
      value: '~2,200hrs/yr',
      desc: 'Roughly 25% of annual hours see zero or deeply negative power prices.',
    },
    {
      label: 'Nighttime Wind Band',
      value: '$0.01–0.03/kWh',
      desc: 'West Texas wind oversupply zones yield power costs close to negligible variable cost.',
    },
    {
      label: 'Midday Solar Peak',
      value: 'Midday Solar Spike',
      desc: 'Midday solar peaks drive sharp price drops and frequent curtailment events.',
    },
    {
      label: 'Price Volatility',
      value: '$-50 ~ $9,000',
      desc: 'ERCOT market data shows extreme volatility across this full range.',
    },
  ]

  const breakdownBars = [
    { label: 'ASIC Mining', value: 42, color: 'bg-emerald-400' },
    { label: 'AI/GPU', value: 28, color: 'bg-cyan-400' },
    { label: 'DR/VPP', value: 18, color: 'bg-blue-400' },
    { label: 'Colocation', value: 12, color: 'bg-slate-300' },
  ]

  const beforeAfter = [
    {
      label: 'Power Cost',
      before: 100,
      after: 74.7,
      delta: '-25.3%',
      good: true,
    },
    {
      label: 'ASIC Utilization',
      before: 100,
      after: 143.5,
      delta: '+43.5%',
      good: true,
    },
    {
      label: 'DR Revenue',
      before: 100,
      after: 270,
      delta: '+170%',
      good: true,
    },
    {
      label: 'HW Failures',
      before: 100,
      after: 17.4,
      delta: '-82.6%',
      good: true,
    },
    {
      label: 'Net Profit',
      before: 100,
      after: 367,
      delta: '+267%',
      good: true,
    },
  ]

  return (
    <section
      id="ercot-simulation"
      className="relative min-h-fit block py-32 px-4 sm:px-6 lg:px-8 bg-[#020617] z-10 overflow-visible"
    >
      <div className="max-w-7xl mx-auto relative overflow-visible">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 pt-10 overflow-visible"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 overflow-visible">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight py-2 overflow-visible">
              ERCOT Real-Data Simulation
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-emerald-400/60 bg-emerald-500/10 text-xs md:text-sm font-semibold text-emerald-300 uppercase tracking-[0.18em] overflow-visible">
              <span className="text-lg">★</span>
              NEW — ERCOT Real-Data Validated
            </div>
          </div>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl overflow-visible">
            Based on real ERCOT (Texas grid) market data, we simulate
            <span className="text-cyan-400 font-semibold"> negative price windows, curtailment, and DR incentives</span> within
            <span className="text-cyan-400 font-semibold"> S-SMDC operating scenarios</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start overflow-visible">
          {/* Left: 4 Findings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 overflow-visible"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 overflow-visible">4 Key ERCOT Insights</h3>
            <div className="grid sm:grid-cols-2 gap-5 overflow-visible">
              {findings.map((f, idx) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-blue-900/60 p-4 md:p-5 overflow-visible"
                >
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.16em] mb-2 overflow-visible">
                    {f.label}
                  </div>
                  <div className="text-lg md:text-xl font-extrabold text-cyan-400 mb-1 overflow-visible">
                    {f.value}
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed overflow-visible">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Animated Bar Breakdown */}
            <div className="mt-4 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-cyan-500/50 p-5 md:p-6 overflow-visible">
              <div className="flex items-center justify-between mb-4 overflow-visible">
                <div className="flex items-center gap-2 overflow-visible">
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-semibold text-slate-200 overflow-visible">
                    Revenue Breakdown (Simulated)
                  </span>
                </div>
                <span className="text-xs text-slate-400 overflow-visible">Unit: % of Monthly Profit</span>
              </div>

              <div className="space-y-3 overflow-visible">
                {breakdownBars.map((bar, idx) => (
                  <motion.div
                    key={bar.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="space-y-1 overflow-visible"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-300 overflow-visible">
                      <span>{bar.label}</span>
                      <span className="text-slate-400">{bar.value}%</span>
                    </div>
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${bar.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.1 + idx * 0.08, ease: 'easeOut' }}
                      className={`h-2 rounded-full ${bar.color} shadow-[0_0_15px_rgba(34,211,238,0.35)]`}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Before/After AI-EMS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-blue-900/60 p-6 md:p-7 overflow-visible"
          >
            <div className="flex items-center justify-between mb-5 overflow-visible">
              <div className="flex items-center gap-2 overflow-visible">
                <Activity className="w-5 h-5 text-cyan-400" />
                <div className="overflow-visible">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-[0.18em] overflow-visible">
                    Before vs After AI-EMS
                  </div>
                  <div className="text-base md:text-lg font-bold text-white overflow-visible">
                    ERCOT-Based Operational KPI Shift
                  </div>
                </div>
              </div>
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>

            <div className="grid grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)_minmax(0,1.4fr)] gap-3 text-xs md:text-sm text-slate-300 mb-2 overflow-visible">
              <div className="font-semibold text-slate-400 overflow-visible">Metric</div>
              <div className="font-semibold text-slate-400 text-center overflow-visible">Before</div>
              <div className="font-semibold text-slate-400 text-center overflow-visible">After (AI-EMS)</div>
            </div>

            <div className="space-y-2.5 overflow-visible">
              {beforeAfter.map((row, idx) => {
                const isCost = row.label.includes('Cost') || row.label.includes('Failure')
                const Icon = row.good === isCost ? ArrowDownRight : ArrowUpRight
                const color =
                  row.good && !isCost
                    ? 'text-emerald-300'
                    : row.good && isCost
                    ? 'text-emerald-300'
                    : 'text-red-300'

                return (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="grid grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)_minmax(0,1.4fr)] gap-3 items-center text-xs md:text-sm overflow-visible"
                  >
                    <div className="flex items-center gap-2 overflow-visible">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="text-slate-200">{row.label}</span>
                    </div>
                    <div className="text-center text-slate-400 overflow-visible">{row.before}</div>
                    <div className="flex items-center justify-center gap-1.5 overflow-visible">
                      <span className="text-slate-100">{row.after}</span>
                      <span className={`flex items-center gap-0.5 text-[10px] font-semibold ${color} overflow-visible`}>
                        <Icon className="w-3 h-3" />
                        {row.delta}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] md:text-xs text-slate-400 leading-relaxed overflow-visible">
              The simulated results are based on ERCOT public market data and our internal models, and
              <span className="text-cyan-400"> incorporate assumptions for price volatility, curtailment frequency, and DR/ancillary incentives</span>
              .
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
