'use client'

import { motion } from 'framer-motion'
import { Brain, GitBranch, Layers, Activity, Shield, Sparkles } from 'lucide-react'

export default function AIEMSModel() {
  const architectures = [
    {
      name: 'LSTM + Transformer',
      role: 'Short- and mid-term load/price forecasting',
      detail:
        'Learns time-series patterns of power demand, prices, and curtailment to forecast Pod-level load profiles on 5-minute to 24-hour horizons.',
    },
    {
      name: 'XGBoost + Weather API',
      role: 'Renewable generation forecasting',
      detail:
        'Uses national weather, NOAA, and satellite data to forecast wind/solar output and optimize DR and curtailment strategies.',
    },
    {
      name: 'RL-PPO (Reinforcement Learning)',
      role: 'Real-time dispatch optimization',
      detail:
        'Dynamically controls ASIC/GPU load, charge/discharge, and grid interaction based on power price, DR signals, and hardware state.',
    },
    {
      name: 'Isolation Forest',
      role: 'Anomaly detection',
      detail:
        'Detects abnormal patterns in server, power, and cooling sensor data to preempt downtime and failure risk.',
    },
  ]

  const phases = [
    { name: 'Phase 1 — Data Pipeline', status: 'Completed', progress: 100 },
    { name: 'Phase 2 — Forecasting Models', status: 'Completed', progress: 100 },
    { name: 'Phase 3 — RL Control (PPO)', status: 'In progress (~70%)', progress: 70 },
    { name: 'Phase 4 — Anomaly & Health', status: 'Planned', progress: 15 },
    { name: 'Phase 5 — SaaS / API Layer', status: 'Planned', progress: 10 },
  ]

  return (
    <section
      id="ai-ems-model"
      className="relative min-h-fit block py-32 px-4 sm:px-6 lg:px-8 bg-[#020617] z-10 overflow-visible"
    >
      <div className="max-w-7xl mx-auto relative overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 pt-10 overflow-visible"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5 overflow-visible">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight py-2 overflow-visible">
              AI-EMS Control Stack
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-emerald-400/70 bg-emerald-500/10 text-xs md:text-sm font-semibold text-emerald-300 uppercase tracking-[0.18em] overflow-visible">
              <span className="text-lg">★</span>
              NEW — Proprietary IP
            </div>
          </div>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl overflow-visible">
            We are designing a dedicated AI-EMS ML architecture that
            <span className="text-cyan-400 font-semibold"> jointly optimizes</span> power price, renewable generation, and hardware health.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start overflow-visible">
          {/* Left: Architectures */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 overflow-visible"
          >
            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-blue-900/60 p-6 md:p-7 overflow-visible">
              <div className="flex items-center gap-2 mb-4 overflow-visible">
                <Brain className="w-6 h-6 text-cyan-400" />
                <span className="text-sm font-semibold text-slate-100 overflow-visible">
                  ML Architecture Stack (4-Layer)
                </span>
              </div>

              <div className="space-y-4 overflow-visible">
                {architectures.map((a, idx) => (
                  <motion.div
                    key={a.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="relative pl-3 border-l border-slate-700 overflow-visible"
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-cyan-400" />
                    <div className="text-xs md:text-sm font-semibold text-cyan-300 overflow-visible">{a.name}</div>
                    <div className="text-[11px] md:text-xs text-emerald-300 mt-0.5 overflow-visible">{a.role}</div>
                    <p className="text-xs md:text-sm text-slate-300 mt-1.5 leading-relaxed overflow-visible">
                      {a.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-emerald-500/20 border border-cyan-500/60 rounded-2xl p-5 md:p-6 flex items-start gap-3 overflow-visible">
              <Shield className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
              <p className="text-xs md:text-sm text-slate-100 leading-relaxed overflow-visible">
                By integrating grid data, hardware telemetry, market prices, and weather signals, this
                <span className="text-cyan-300 font-semibold"> domain-specialized AI-EMS model</span> aims for a differentiated
                <span className="text-emerald-300 font-semibold"> proprietary IP position</span> beyond conventional BMS/SCADA.
              </p>
            </div>
          </motion.div>

          {/* Right: Phase Progress & IP/SaaS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5 overflow-visible"
          >
            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-blue-900/60 p-6 md:p-7 overflow-visible">
              <div className="flex items-center gap-2 mb-4 overflow-visible">
                <GitBranch className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-semibold text-slate-100 overflow-visible">
                  Phase 1–5 Development Roadmap
                </span>
              </div>

              <div className="space-y-3 text-xs md:text-sm overflow-visible">
                {phases.map((p, idx) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="overflow-visible"
                  >
                    <div className="flex items-center justify-between mb-1 overflow-visible">
                      <span className="text-slate-200">{p.name}</span>
                      <span
                        className={`text-[11px] ${
                          p.status.includes('Completed')
                            ? 'text-emerald-300'
                            : p.status.includes('In progress')
                            ? 'text-cyan-300'
                            : 'text-slate-400'
                        } overflow-visible`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${p.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 + idx * 0.06 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-500/20 border border-emerald-400/70 rounded-2xl p-5 md:p-6 flex items-start gap-3 overflow-visible">
              <Sparkles className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-1" />
              <div className="space-y-1.5 text-xs md:text-sm text-slate-100 leading-relaxed overflow-visible">
                <p>
                  The
                  <span className="text-emerald-300 font-semibold"> field data, models, and control strategies</span> accumulated through S-SMDC operations can, over time, be extended into
                  <span className="text-cyan-300 font-semibold"> SaaS licensing</span> and
                  <span className="text-cyan-300 font-semibold"> API products for energy and data center operators</span>.
                </p>
                <p>
                  This positions the project not only as a hardware asset but as a long-term platform for
                  <span className="text-emerald-300 font-semibold"> proprietary software and algorithmic IP</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
