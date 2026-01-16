'use client'

import { motion } from 'framer-motion'
import { Cpu, Coins, Award, Network, Check } from 'lucide-react'

export default function RevenueEngine() {
  const revenueEngines = [
    {
      icon: Cpu,
      engine: 'Engine 1',
      title: 'AI/GPU Hypercomputing',
      subheadline: 'High-Margin Infrastructure',
      benefits: [
        '24/7 high-performance computing for LLM training and AI inference.',
        'Powered by DataBean\'s immersion cooling for industry-leading OPEX efficiency.',
      ],
      color: 'electric-blue',
    },
    {
      icon: Coins,
      engine: 'Engine 2',
      title: 'ASIC Digital Asset Mining',
      subheadline: 'Surplus-Driven Arbitrage',
      benefits: [
        'Generating high-margin revenue by utilizing surplus renewable energy during curtailment events.',
        'A flexible energy buffer that maximizes profitability with near-zero marginal power costs.',
      ],
      color: 'emerald-green',
    },
    {
      icon: Award,
      engine: 'Engine 3',
      title: 'Global DR & Ancillary Services',
      subheadline: 'Paid-to-Consume Model',
      benefits: [
        'Earn Rewards for Grid Stabilization (FFR/DR).',
        'Monetizing Grid Instability.',
      ],
      color: 'cyan',
    },
    {
      icon: Network,
      engine: 'Engine 4',
      title: 'Hyper-Local Edge AI',
      subheadline: 'Ultra-Low Latency',
      benefits: [
        'Real-time Data Processing at Source.',
        'Smart City & Autonomous Grid Control.',
      ],
      color: 'emerald-green',
    },
  ]

  return (
    <section id="revenue" className="relative min-h-fit block py-32 px-4 sm:px-6 lg:px-8 bg-[#020617] z-10 overflow-visible">
      <div className="max-w-7xl mx-auto relative overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-40 overflow-visible"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent overflow-visible leading-tight py-2">
            Revenue Engine
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto overflow-visible">
            Four Core Engines: S-SMDC Generates Revenue as a Grid Partner, Not Just a Consumer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-visible">
          {revenueEngines.map((engine, index) => {
            const Icon = engine.icon
            const isGreen = engine.color === 'emerald-green'
            const isCyan = engine.color === 'cyan'
            const isBlue = engine.color === 'electric-blue'
            const isDR = engine.title.includes('DR & Ancillary')
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-visible"
              >
                <div className={`relative bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border-2 border-blue-900/50 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 h-auto min-w-0 overflow-visible`}>
                  {/* Engine Label */}
                  <div className="mb-4 overflow-visible">
                    <span className={`text-sm md:text-base font-bold uppercase tracking-wider overflow-visible whitespace-normal break-words ${
                      isCyan 
                        ? 'text-cyan-400' 
                        : isGreen 
                        ? 'text-cyan-400'
                        : 'text-blue-500'
                    }`}>
                      {engine.engine}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl mb-6 ${
                    isCyan 
                      ? 'bg-cyan-400/20' 
                      : isGreen 
                      ? 'bg-emerald-green/20' 
                      : 'bg-electric-blue/20'
                  }`}>
                    <Icon className={`w-8 h-8 md:w-10 md:h-10 ${
                      isCyan 
                        ? 'text-cyan-400' 
                        : isGreen 
                        ? 'text-emerald-400' 
                        : 'text-electric-blue'
                    }`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 overflow-visible leading-normal whitespace-normal break-words">
                    {engine.title}
                  </h3>

                  {/* Sub-headline */}
                  <div className="text-base md:text-lg font-semibold mb-6 overflow-visible whitespace-normal text-cyan-400 leading-loose">
                    {engine.subheadline}
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-4 overflow-visible">
                    {engine.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3 overflow-visible">
                        <Check className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <p className="text-base md:text-lg text-slate-300 leading-loose overflow-visible whitespace-normal">
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

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 border-2 border-cyan-500/50 rounded-xl p-8 text-center overflow-visible"
        >
          <h4 className="text-2xl font-bold text-white mb-3 overflow-visible">
            Grid Partner, Not Just a Consumer
          </h4>
          <p className="text-lg text-slate-200 leading-relaxed max-w-4xl mx-auto overflow-visible">
            S-SMDC generates revenue as an active partner in grid stabilization. Through Demand Response and Ancillary Services, we receive compensation for consuming power when the grid needs it, creating value for both the energy system and our operations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
