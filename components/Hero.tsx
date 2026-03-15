'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 bg-[#020617] overflow-visible">
      <div className="max-w-6xl mx-auto w-full overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-y-6 overflow-visible"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight py-2 overflow-visible"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="overflow-visible">SURPLUS ENERGY-BASED</div>
            <div className="overflow-visible">
              SMALL MODULAR DATA CENTER{' '}
              <span className="bg-gradient-to-r from-electric-blue to-emerald-green bg-clip-text text-transparent">
                (S-SMDC)
              </span>
            </div>
          </motion.h1>
          
          {/* Catchphrase */}
          <motion.p
            className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-8 mb-4 leading-relaxed overflow-visible max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building the Future of Energy-to-Compute Infrastructure: Turning Surplus Renewables into Intelligent Compute Assets.
          </motion.p>

          {/* Sub-text */}
          <motion.p
            className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed opacity-90 overflow-visible"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Diagram: Proposed Architecture for a Carbon-Neutral Computing Center Powered by <span className="text-cyan-400 font-semibold">Renewable</span> and <span className="text-blue-500 font-semibold">Surplus Energy</span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center items-center relative z-10 w-full mt-16 overflow-visible"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-blue-500/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              Become a Founding Partner
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
