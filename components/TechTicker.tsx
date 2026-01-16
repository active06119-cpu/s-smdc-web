'use client'

import { motion } from 'framer-motion'

export default function TechTicker() {
  return (
    <section className="relative py-6 px-4 bg-[#020617] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm md:text-base font-medium">
            <span className="text-slate-500">INFRASTRUCTURE OPTIMIZED FOR:</span>{' '}
            <span className="font-bold text-slate-300">NVIDIA H100</span>
            <span className="text-slate-500"> (AI Training)</span>
            {' • '}
            <span className="font-bold text-slate-300">BITMAIN Antminer S19</span>
            <span className="text-slate-500"> (ASIC)</span>
            {' • '}
            <span className="text-cyan-400 font-semibold">DataBean</span>
            <span className="text-cyan-400"> (Immersion Cooling)</span>
            {' • '}
            <span className="text-slate-500">Schneider Electric</span>
            <span className="text-slate-500"> (Power)</span>
            {' • '}
            <span className="text-slate-500">Ubuntu Linux</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
