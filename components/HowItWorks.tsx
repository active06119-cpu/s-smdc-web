'use client'

import { motion } from 'framer-motion'
import { Zap, Grid3x3, ArrowLeftRight, Clock } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative min-h-fit block py-24 px-4 sm:px-6 lg:px-8 bg-[#020617] z-10 overflow-visible">
      <div className="max-w-7xl mx-auto relative overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 overflow-visible"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent overflow-visible leading-tight py-2">
            How It Works: Dual-Mode Operation
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 overflow-visible">
            24/7 Uninterrupted Operation with Dynamic Profit Optimization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 overflow-visible">
          {/* Mode A: Stable Operations (via PPA) / Standard Grid Efficiency / Stable Revenue */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border-2 border-blue-500/50 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 overflow-visible"
          >
            <div className="flex items-center gap-4 mb-6 overflow-visible">
              <div className="inline-flex p-4 rounded-xl bg-blue-500/20">
                <Grid3x3 className="w-8 h-8 text-blue-400" />
              </div>
              <div className="overflow-visible">
                <span className="text-sm font-bold text-blue-400 uppercase tracking-wider overflow-visible">Mode A</span>
                <h3 className="text-xl md:text-2xl font-bold text-white overflow-visible">
                  Stable Operations (via PPA)
                </h3>
                <p className="text-sm text-blue-400 font-semibold overflow-visible">Standard Grid Efficiency · Stable Revenue</p>
              </div>
            </div>
            <div className="space-y-4 overflow-visible">
              <div className="overflow-visible">
                <p className="text-base md:text-lg text-slate-300 leading-relaxed overflow-visible">
                  Providing stable, high-availability AI services via grid-connected operations. Market-leading immersion cooling technology (DataBean) delivers optimized OPEX efficiency for continuous computing operations.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-700 overflow-visible">
                <div className="flex items-start gap-2 overflow-visible">
                  <Grid3x3 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-400 overflow-visible">
                    OPEX reduction: <span className="text-blue-400 font-bold">30%+ optimized savings</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mode B: Surplus Optimization (via Curtailment) / Max Profit */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border-2 border-cyan-500/50 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 overflow-visible"
          >
            <div className="flex items-center gap-4 mb-6 overflow-visible">
              <div className="inline-flex p-4 rounded-xl bg-cyan-400/20">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="overflow-visible">
                <span className="text-sm font-bold text-cyan-400 uppercase tracking-wider overflow-visible">Mode B</span>
                <h3 className="text-xl md:text-2xl font-bold text-white overflow-visible">
                  Surplus Optimization (via Curtailment)
                </h3>
                <p className="text-sm text-cyan-400 font-semibold overflow-visible">Max Profit</p>
              </div>
            </div>
            <div className="space-y-4 overflow-visible">
              <div className="overflow-visible">
                <p className="text-base md:text-lg text-slate-300 leading-relaxed overflow-visible">
                  Capturing stranded energy for maximum-margin computing. Optimized operations that convert surplus renewable power into high-value digital assets with market-leading efficiency.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-700 overflow-visible">
                <div className="flex items-start gap-2 overflow-visible">
                  <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-400 overflow-visible">
                    Energy cost: <span className="text-cyan-400 font-bold">Near-zero marginal cost</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Flexible Switching Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 border-2 border-cyan-500/50 rounded-xl p-8 text-center overflow-visible"
        >
          <div className="flex items-center justify-center gap-4 mb-4 overflow-visible">
            <ArrowLeftRight className="w-8 h-8 text-cyan-400" />
            <h4 className="text-xl md:text-2xl font-bold text-white overflow-visible">
              Flexible Switching
            </h4>
          </div>
          <p className="text-base md:text-lg text-slate-200 leading-relaxed max-w-4xl mx-auto overflow-visible">
            S-SMDC seamlessly switches between both modes based on grid conditions, ensuring continuous operation while optimizing profitability in real-time. No downtime, maximum efficiency.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
