'use client'

import { motion } from 'framer-motion'

export default function IRHero() {
  const kpis = [
    {
      label: 'Monthly Revenue',
      value: '$137,040',
      desc: 'Sum of 4 Revenue Engines',
    },
    {
      label: 'Annual Net Profit (Pre-Tax)',
      value: '$874,480',
      desc: 'Based on conservative Base Case',
    },
    {
      label: 'Break-Even Point (BEP)',
      value: '34 months',
      desc: '1 Pod basis / 5 Pods 24 months',
    },
  ]

  return (
    <section
      id="ir-hero"
      className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-32 bg-[#020617] overflow-visible"
    >
      <div className="max-w-6xl mx-auto w-full overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-y-8 overflow-visible"
        >
          {/* IR Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-cyan-500/40 bg-slate-900/60 backdrop-blur-md text-xs md:text-sm font-semibold text-cyan-300 uppercase tracking-[0.18em] overflow-visible"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Investor Relations
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight py-2 overflow-visible"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            S-SMDC IR Dashboard
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl font-medium text-slate-300 max-w-3xl mx-auto leading-relaxed overflow-visible"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            An IR-focused dashboard that shows, at a glance, the
            <span className="text-cyan-400 font-semibold"> cash generation capability</span> and
            <span className="text-blue-400 font-semibold"> risk-adjusted return profile</span> of our renewable-powered modular data center.
          </motion.p>

          {/* KPI Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full overflow-visible"
          >
            {kpis.map((kpi, idx) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-900/60 backdrop-blur-md border border-cyan-500/40 rounded-2xl px-6 py-5 text-left md:text-center flex flex-col gap-2 overflow-visible"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 overflow-visible">
                  {kpi.label}
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-cyan-400 overflow-visible">
                  {kpi.value}
                </div>
                <div className="text-xs md:text-sm text-slate-400 overflow-visible">{kpi.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
