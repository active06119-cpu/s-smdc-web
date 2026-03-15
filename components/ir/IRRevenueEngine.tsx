'use client'

import { motion } from 'framer-motion'
import { Cpu, Coins, Award, Network, Check, DollarSign } from 'lucide-react'

export default function IRRevenueEngine() {
  const engines = [
    {
      icon: Cpu,
      engine: 'Engine 1',
      title: 'AI/GPU Hypercomputing',
      subheadline: 'High-Margin Infrastructure',
      monthly: '$48,000/mo',
      benefits: [
        'High-density GPU farm dedicated to LLM/AI inference and training.',
        'Immersion cooling delivers top-tier power efficiency (PUE) in the industry.',
      ],
      color: 'electric-blue',
    },
    {
      icon: Coins,
      engine: 'Engine 2',
      title: 'ASIC Digital Asset Mining',
      subheadline: 'Curtailment Arbitrage',
      monthly: '$62,400/mo',
      benefits: [
        'Maximizes mining profit by using low/negative power prices during wind/solar curtailment.',
        'Largest revenue contributor in ERCOT/Jeju-style negative price windows.',
      ],
      color: 'emerald-green',
      highlight: true,
    },
    {
      icon: Award,
      engine: 'Engine 3',
      title: 'DR & VPP Services',
      subheadline: 'Paid-to-Consume Model',
      monthly: '$8,640/mo',
      benefits: [
        'Secures incentives on power consumption itself via ADR/FFR and VPP participation.',
        'Generates recurring ancillary service revenue while stabilizing the grid.',
      ],
      color: 'cyan',
    },
    {
      icon: Network,
      engine: 'Engine 4',
      title: 'Colocation & Edge AI',
      subheadline: 'Ultra-Low Latency',
      monthly: '$18,000/mo',
      benefits: [
        'Colocation revenue from local AI/edge workloads.',
        'On-site AI infrastructure leasing for municipalities and enterprises.',
      ],
      color: 'emerald-green',
    },
  ]

  const totalMonthly = '$137,040/mo'

  return (
    <section
      id="ir-revenue"
      className="relative min-h-fit block py-32 px-4 sm:px-6 lg:px-8 bg-[#020617] z-10 overflow-visible"
    >
      <div className="max-w-7xl mx-auto relative overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-10 overflow-visible"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent overflow-visible leading-tight py-2">
            IR Revenue Engine
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto overflow-visible">
            Designed as a
            <span className="text-cyan-400 font-semibold"> {totalMonthly} monthly revenue</span> stack powered by four engines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-visible">
          {engines.map((engine, index) => {
            const Icon = engine.icon
            const isGreen = engine.color === 'emerald-green'
            const isCyan = engine.color === 'cyan'
            const isBlue = engine.color === 'electric-blue'
            const isMain = engine.highlight

            return (
              <motion.div
                key={engine.engine}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-visible"
              >
                <div
                  className={`relative bg-slate-900/60 backdrop-blur-md p-7 rounded-2xl border-2 ${
                    isMain
                      ? 'border-cyan-500 shadow-xl shadow-cyan-500/30'
                      : 'border-blue-900/50 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20'
                  } hover:-translate-y-2 transition-all duration-300 h-full overflow-visible`}
                >
                  {isMain && (
                    <div className="absolute -top-3 left-4 px-3 py-1 rounded-full bg-cyan-500 text-xs font-semibold text-slate-900 uppercase tracking-wide shadow-md overflow-visible">
                      Highest Revenue
                    </div>
                  )}

                  {/* Engine Label */}
                  <div className="mb-3 overflow-visible">
                    <span
                      className={`text-xs md:text-sm font-bold uppercase tracking-[0.16em] overflow-visible ${
                        isCyan ? 'text-cyan-400' : isGreen ? 'text-emerald-400' : 'text-blue-400'
                      }`}
                    >
                      {engine.engine}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-xl mb-5 ${
                      isCyan ? 'bg-cyan-400/20' : isGreen ? 'bg-emerald-500/20' : 'bg-electric-blue/20'
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 md:w-9 md:h-9 ${
                        isCyan ? 'text-cyan-400' : isGreen ? 'text-emerald-400' : 'text-electric-blue'
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 overflow-visible leading-snug">
                    {engine.title}
                  </h3>
                  <div className="text-sm md:text-base font-semibold text-cyan-400 mb-4 overflow-visible">
                    {engine.subheadline}
                  </div>

                  {/* Monthly Revenue */}
                  <div className="flex items-center gap-2 mb-5 overflow-visible">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <span className="text-base md:text-lg font-bold text-emerald-300">{engine.monthly}</span>
                    {isMain && (
                      <span className="ml-2 text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">
                        Main Driver
                      </span>
                    )}
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-3 overflow-visible">
                    {engine.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 overflow-visible">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm md:text-[15px] text-slate-200 leading-relaxed overflow-visible">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Total Revenue Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 border-2 border-cyan-500/60 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 overflow-visible"
        >
          <div className="flex items-center gap-3 overflow-visible">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/80 border border-cyan-400/60">
              <DollarSign className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="overflow-visible">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em] overflow-visible">
                TOTAL MONTHLY REVENUE
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-white overflow-visible">{totalMonthly}</div>
            </div>
          </div>
          <p className="text-sm md:text-base text-slate-200 leading-relaxed max-w-2xl overflow-visible">
            While ASIC Mining (Engine 2) drives the largest share of revenue, the combination of AI/GPU, DR/VPP, and Colocation engines provides
            <span className="text-cyan-400 font-semibold"> portfolio diversification</span> and
            <span className="text-cyan-400 font-semibold"> cushioning across macro and power-price cycles</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
