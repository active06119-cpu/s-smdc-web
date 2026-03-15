'use client'

import { motion } from 'framer-motion'
import { PieChart, BarChart3, DollarSign, TrendingUp } from 'lucide-react'

export default function FinancialPlan() {
  const capex = [
    { label: 'ASIC / GPU', value: 2500000, display: '$2.5M', color: 'bg-emerald-400' },
    { label: 'Construction / Infrastructure', value: 410000, display: '$410K', color: 'bg-cyan-400' },
    { label: 'Cooling System', value: 300000, display: '$300K', color: 'bg-blue-400' },
    { label: 'Grid Interconnection', value: 150000, display: '$150K', color: 'bg-sky-400' },
    { label: 'Others (Network/Design, etc.)', value: 140000, display: '$140K', color: 'bg-slate-300' },
  ]

  const totalCapex = 3500000

  const opex = [
    { item: 'Power Cost', range: '$105K – 160K / mo', note: 'Variable cost driven by power price and utilization rate.' },
    { item: 'Cooling & Maintenance', range: '$8K / mo', note: 'Immersion fluid maintenance and system inspection.' },
    { item: 'Personnel', range: '$4K / mo', note: 'Lean team for operations and remote monitoring.' },
    { item: 'Network & Security', range: '$3K / mo', note: 'Backhaul connectivity and security services.' },
    { item: 'Land / Lease', range: '$2K / mo', note: 'Land/lease payments and local taxes & fees.' },
  ]

  const scenarios = [
    {
      name: 'Scenario A — Optimistic Case',
      color: 'border-emerald-400/70',
      monthly: '+$218K / mo',
      bep: 'BEP 14–24 months',
      desc: 'High-return case assuming frequent negative prices and DR incentives similar to ERCOT/Jeju conditions.',
    },
    {
      name: 'Scenario B — Base Case',
      color: 'border-cyan-400/70',
      monthly: '+$92K / mo',
      bep: 'BEP 20–32 months',
      desc: 'Base case with conservative assumptions for power price, curtailment frequency, and hash rate.',
    },
    {
      name: 'Scenario C — Long-Term Expansion',
      color: 'border-blue-400/70',
      monthly: '+$380K / mo',
      bep: 'BEP 5–20 months (5 Pods)',
      desc: 'Long-term case with 5 Pods (~10–15MW) and optimized power contracts.',
    },
  ]

  return (
    <section
      id="financial-plan"
      className="relative min-h-fit block py-32 px-4 sm:px-6 lg:px-8 bg-[#020617] z-10 overflow-visible"
    >
      <div className="max-w-7xl mx-auto relative overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-10 overflow-visible"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight py-2 overflow-visible">
            Financial Plan & BEP
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto overflow-visible">
            Break-even (BEP) is calculated for a single Pod based on CAPEX/OPEX structure and cash flow under each scenario.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 items-start overflow-visible">
          {/* CAPEX Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-blue-900/60 p-6 md:p-7 space-y-5 overflow-visible"
          >
            <div className="flex items-center justify-between mb-2 overflow-visible">
              <div className="flex items-center gap-2 overflow-visible">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-semibold text-slate-200 overflow-visible">CAPEX Breakdown (Total $3.5M)</span>
              </div>
              <PieChart className="w-5 h-5 text-slate-400" />
            </div>

            <div className="space-y-3 mt-4 overflow-visible">
              {capex.map((c, idx) => {
                const pct = Math.round((c.value / totalCapex) * 100)
                return (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.07 }}
                    className="space-y-1.5 overflow-visible"
                  >
                    <div className="flex items-center justify-between text-xs md:text-sm text-slate-200 overflow-visible">
                      <span>{c.label}</span>
                      <span className="text-slate-400">
                        {c.display} · {pct}%
                      </span>
                    </div>
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.1 + idx * 0.07, ease: 'easeOut' }}
                      className={`h-2 rounded-full ${c.color} shadow-[0_0_14px_rgba(56,189,248,0.4)]`}
                    />
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] md:text-xs text-slate-400 leading-relaxed overflow-visible">
              Of the total CAPEX of <span className="text-cyan-400 font-semibold">$3.5M</span>,
              <span className="text-emerald-400 font-semibold"> roughly 71% is recoverable ASIC/GPU hardware</span>, with the remainder invested in infrastructure, cooling, and grid interconnection.
            </div>
          </motion.div>

          {/* OPEX Table + BEP Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5 overflow-visible"
          >
            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-blue-900/60 p-6 md:p-7 overflow-visible">
              <div className="flex items-center gap-2 mb-4 overflow-visible">
                <DollarSign className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-semibold text-slate-200 overflow-visible">
                  OPEX Structure (Monthly Operating Cost)
                </span>
              </div>
              <div className="space-y-3 text-xs md:text-sm overflow-visible">
                {opex.map((o) => (
                  <div
                    key={o.item}
                    className="flex items-start justify-between gap-3 border-b border-slate-800/80 pb-2 last:border-none last:pb-0 overflow-visible"
                  >
                    <div className="text-slate-200 overflow-visible">{o.item}</div>
                    <div className="text-right overflow-visible">
                      <div className="text-slate-100">{o.range}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 overflow-visible">{o.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-emerald-500/20 border border-cyan-500/60 rounded-2xl p-5 md:p-6 overflow-visible">
              <div className="flex items-center gap-2 mb-3 overflow-visible">
                <TrendingUp className="w-5 h-5 text-cyan-300" />
                <span className="text-sm font-semibold text-slate-100 overflow-visible">
                  BEP Summary — Payback by Pod Scale
                </span>
              </div>
              <div className="space-y-1.5 text-xs md:text-sm text-slate-100 overflow-visible">
                <div>
                  • <span className="font-semibold text-cyan-300">1 Pod</span>:{' '}
                  <span className="font-semibold">BEP ~34 months</span>
                </div>
                <div>
                  • <span className="font-semibold text-emerald-300">5 Pods</span>:{' '}
                  <span className="font-semibold">BEP ~24 months</span> (reflecting economies of scale and improved power contracts)
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scenario Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 grid md:grid-cols-3 gap-6 overflow-visible"
        >
          {scenarios.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-slate-900/60 backdrop-blur-md rounded-2xl border ${s.color} p-5 md:p-6 flex flex-col gap-3 overflow-visible`}
            >
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.16em] overflow-visible">
                {idx === 0 ? 'Upside Case' : idx === 1 ? 'Base Case' : 'Expansion Case'}
              </div>
              <div className="text-sm md:text-base font-bold text-white overflow-visible">{s.name}</div>
              <div className="text-lg md:text-xl font-extrabold text-emerald-300 overflow-visible">{s.monthly}</div>
              <div className="text-xs md:text-sm text-cyan-300 font-semibold overflow-visible">{s.bep}</div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed mt-1 overflow-visible">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
