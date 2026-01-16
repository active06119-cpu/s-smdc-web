'use client'

import { motion } from 'framer-motion'
import { MapPin, CheckCircle } from 'lucide-react'

export default function ExpansionStrategy() {
  const phases = [
    {
      phase: 'Phase 1',
      title: '2026: Foundation & Seed Funding',
      location: 'Jeju & Jeonnam',
      description: 'Prototype Design, Site Securing (Jeju), Seed Round Fundraising. Building the foundation for the first S-SMDC deployment.',
      color: 'emerald-green',
      status: 'We Are Here',
      isCurrent: true,
    },
    {
      phase: 'Phase 2',
      title: 'Global Growth',
      location: 'Texas ERCOT & Germany',
      description: 'Entering the world\'s largest arbitrage markets. US ERCOT and European power grids expansion.',
      color: 'electric-blue',
      status: 'Planning',
    },
    {
      phase: 'Phase 3',
      title: 'Global Backbone',
      location: 'SE Asia & Middle East',
      description: 'Connecting desert solar farms to the grid. Edge computing supply in infrastructure-deficient regions.',
      color: 'orange-400',
      status: 'Future',
    },
  ]

  return (
    <section id="expansion" className="relative min-h-fit block py-32 px-4 sm:px-6 lg:px-8 bg-dark-slate/50 overflow-hidden z-10 overflow-visible">
      <div className="relative z-10 max-w-7xl mx-auto overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-40 overflow-visible"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent overflow-visible leading-tight py-2">
            Global Roadmap
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto overflow-visible">
            Building the future of energy-to-compute infrastructure, one phase at a time
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative overflow-visible">
          {phases.map((phase, index) => {
            const isActive = phase.status === 'Active' || phase.status === 'We Are Here'
            const isPlanning = phase.status === 'Planning'
            const isCurrent = phase.isCurrent
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-slate-900/60 backdrop-blur-md rounded-2xl border-2 p-8 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transition-all my-6 overflow-visible ${
                  isCurrent ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-blue-900/50'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 overflow-visible">
                  <div className="flex-shrink-0 overflow-visible">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${
                      phase.color === 'emerald-green'
                        ? 'bg-emerald-green/20'
                        : phase.color === 'electric-blue'
                        ? 'bg-electric-blue/20'
                        : 'bg-orange-400/20'
                    }`}>
                      <span className={`text-2xl font-bold overflow-visible ${
                        phase.color === 'emerald-green'
                          ? 'text-emerald-400'
                          : phase.color === 'electric-blue'
                          ? 'text-white'
                          : 'text-white'
                      }`}>
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 overflow-visible">
                    <div className="flex items-center gap-3 mb-2 flex-wrap overflow-visible">
                      <span className={`text-sm font-semibold uppercase tracking-wider overflow-visible ${
                        phase.color === 'emerald-green'
                          ? 'text-cyan-400'
                          : phase.color === 'electric-blue'
                          ? 'text-cyan-100'
                          : 'text-cyan-100'
                      }`}>
                        {phase.phase}
                      </span>
                      <span className="text-2xl font-bold text-white overflow-visible">{phase.title}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4 flex-wrap overflow-visible">
                      <MapPin
                        className={`w-5 h-5 overflow-visible ${
                          phase.color === 'emerald-green'
                            ? 'text-cyan-400'
                            : phase.color === 'electric-blue'
                            ? 'text-cyan-100'
                            : 'text-cyan-100'
                        }`}
                      />
                      <span className={`text-lg overflow-visible ${
                        phase.location === 'Texas ERCOT & Germany'
                          ? 'text-cyan-400 font-bold'
                          : phase.color === 'emerald-green'
                          ? 'text-cyan-400 font-bold'
                          : phase.color === 'electric-blue'
                          ? 'text-cyan-100 font-bold'
                          : 'text-cyan-100 font-bold'
                      }`}>
                        {phase.location}
                      </span>
                    </div>
                    <p className="text-white mb-4 leading-relaxed overflow-visible">
                      {phase.description}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap overflow-visible">
                      <CheckCircle
                        className={`w-5 h-5 overflow-visible ${
                          isActive
                            ? 'text-cyan-400'
                            : isPlanning
                            ? 'text-cyan-100'
                            : 'text-slate-500'
                        }`}
                      />
                      <span className={`text-sm font-semibold overflow-visible ${
                        isActive
                          ? 'text-cyan-400'
                          : isPlanning
                          ? 'text-cyan-100'
                          : 'text-slate-400'
                      }`}>
                        {phase.status}
                      </span>
                      {isCurrent && (
                        <span className="text-xs font-bold text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded uppercase tracking-wider overflow-visible">
                          Current Status
                        </span>
                      )}
                    </div>
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
