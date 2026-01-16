'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, Shield } from 'lucide-react'

export default function SSMDCvsESS() {
  const comparisons = [
    {
      icon: TrendingUp,
      title: 'Profit Model',
      smdc: 'Active Computing Revenue',
      ess: 'Passive Cost Saving',
      smdcColor: 'emerald-green',
      essColor: 'red-400',
    },
    {
      icon: Clock,
      title: 'ROI Period',
      smdc: '14-24 Months',
      ess: '7-10 Years',
      smdcColor: 'emerald-green',
      essColor: 'red-400',
    },
    {
      icon: Shield,
      title: 'Safety',
      smdc: 'Immersion Cooling (Fire-free)',
      ess: 'Battery Fire Risk',
      smdcColor: 'electric-blue',
      essColor: 'red-400',
    },
  ]

  return (
    <section id="comparison" className="relative min-h-fit block py-32 px-4 sm:px-6 lg:px-8 bg-dark-slate/50 z-10 overflow-visible">
      <div className="max-w-7xl mx-auto relative overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-40 overflow-visible"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent overflow-visible leading-tight py-2">
            S-SMDC vs. Traditional ESS
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto overflow-visible">
            Why S-SMDC is the superior economic alternative
          </p>
        </motion.div>

        <div className="space-y-12 overflow-visible">
          {comparisons.map((comparison, index) => {
            const Icon = comparison.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/60 backdrop-blur-md rounded-xl border border-blue-900/50 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden overflow-visible"
              >
                <div className="p-6 border-b border-slate-700 bg-dark-slate/50 overflow-visible">
                  <div className="flex items-center gap-3 overflow-visible">
                    <Icon className="w-6 h-6 text-electric-blue" />
                    <h3 className="text-xl font-bold text-white overflow-visible">{comparison.title}</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 p-6 overflow-visible">
                  <div className={`p-6 rounded-lg border-2 overflow-visible ${
                    comparison.smdcColor === 'emerald-green'
                      ? 'border-cyan-400/50 bg-cyan-400/5'
                      : 'border-blue-500/50 bg-blue-500/5'
                  }`}>
                    <div className="flex items-center gap-2 mb-3 overflow-visible">
                      <div className={`w-3 h-3 rounded-full ${
                        comparison.smdcColor === 'emerald-green'
                          ? 'bg-cyan-400'
                          : 'bg-blue-500'
                      }`} />
                      <span className="font-semibold text-white overflow-visible">S-SMDC</span>
                    </div>
                    <p className={`text-lg font-semibold overflow-visible ${
                      comparison.smdcColor === 'emerald-green'
                        ? 'text-cyan-400'
                        : 'text-blue-500'
                    }`}>
                      {comparison.smdc}
                    </p>
                  </div>
                  <div className="p-6 rounded-lg border-2 border-red-400/50 bg-red-400/5 overflow-visible">
                    <div className="flex items-center gap-2 mb-3 overflow-visible">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="font-semibold text-white overflow-visible">Traditional ESS</span>
                    </div>
                    <p className="text-lg font-semibold text-red-400 overflow-visible">
                      {comparison.ess}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
