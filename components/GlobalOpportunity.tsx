'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export default function GlobalOpportunity() {
  const countries = [
    {
      name: 'South Korea',
      label: 'The Pilot Market',
      energyWasted: 'Expanding to Mainland',
      curtailmentCases: 'Jeju (18%) → Jeonnam Spread',
                      characteristics: 'Curtailment is no longer limited to Jeju Island. Mandatory output limitations have begun in the Jeonnam region, threatening <span class="font-bold text-cyan-400">IPP profitability</span>.',
      highlight: true,
      color: 'emerald-green',
    },
    {
      name: 'USA (Texas/ERCOT)',
      label: 'Highest Profitability',
      energyWasted: 'High Frequency of Negative Prices',
      curtailmentCases: 'Bottled-up Wind Energy',
      characteristics: 'West Texas wind farms frequently face <span class="font-bold text-cyan-400">negative wholesale prices</span> due to transmission congestion. Ideal environment for <span class="font-bold text-cyan-400">Paid-to-Consume</span> business models.',
      highlight: true,
      color: 'cyan',
    },
    {
      name: 'Europe (Germany)',
      label: 'Regulatory Pressure',
      energyWasted: '€3 Billion+ Redispatch Cost',
      curtailmentCases: 'Ghost Electricity (Geisterstrom)',
      characteristics: 'Grid operators spend billions annually compensating generators to turn OFF turbines. S-SMDC solves this <span class="font-bold text-cyan-400">Redispatch cost burden</span>.',
      highlight: false,
      color: 'electric-blue',
    },
    {
      name: 'China',
      label: 'Unlimited Scale',
      energyWasted: '100 TWh+ Stranded Power',
      curtailmentCases: 'West-East Grid Bottleneck',
                      characteristics: 'Massive renewable capacity in Gansu and Xinjiang exceeds <span class="font-bold text-cyan-400">UHV transmission limits</span>. Perfect for large-scale, off-grid AI computing clusters.',
      highlight: false,
      color: 'orange-400',
    },
  ]

  return (
    <section id="global-opportunity" className="relative min-h-fit block py-32 px-4 sm:px-6 lg:px-8 bg-[#020617] z-10 overflow-visible">
      <div className="max-w-7xl mx-auto relative overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-40 overflow-visible"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent overflow-visible leading-tight py-2">
            A Global Energy Bottleneck
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto overflow-visible">
            Latest curtailment data from major markets highlighting market urgency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-visible">
          {countries.map((country, index) => {
            const isHighlight = country.highlight
            const isKorea = country.name === 'South Korea'
            const isUSA = country.name === 'USA (Texas/ERCOT)'
            
            return (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/60 backdrop-blur-md p-8 rounded-xl border border-blue-900/50 hover:border-cyan-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 shadow-lg relative flex flex-col h-auto min-h-[400px] overflow-visible"
              >
                <div className="flex flex-col space-y-6 flex-1 overflow-visible">
                  {/* Country Name & Label */}
                  <div className="overflow-visible">
                    <div className="flex items-center gap-3 mb-2 overflow-visible">
                      <MapPin
                        className={`w-6 h-6 ${
                          isKorea
                            ? 'text-emerald-500'
                            : country.color === 'cyan'
                            ? 'text-cyan-400'
                            : country.color === 'electric-blue'
                            ? 'text-white'
                            : 'text-white'
                        }`}
                      />
                      <h3 className="font-bold text-white text-xl md:text-2xl overflow-visible whitespace-normal">{country.name}</h3>
                    </div>
                    <div className={`text-sm md:text-base font-bold uppercase tracking-wider overflow-visible whitespace-normal ${
                      isKorea
                        ? 'text-emerald-400'
                        : country.color === 'cyan'
                        ? 'text-cyan-400'
                        : 'text-slate-400'
                    }`}>
                      {country.label}
                    </div>
                  </div>

                  {/* Energy Wasted */}
                  <div className="overflow-visible">
                    <div className="text-sm md:text-base text-slate-500 mb-3 font-medium uppercase tracking-wider overflow-visible whitespace-normal">
                      Wasted Energy:
                    </div>
                    <div className="text-2xl md:text-3xl font-extrabold overflow-visible leading-tight py-1 text-cyan-400 whitespace-normal">
                      {country.energyWasted}
                    </div>
                  </div>

                  {/* Curtailment Cases */}
                  <div className="overflow-visible">
                    <div className="text-sm md:text-base text-slate-500 mb-3 font-medium uppercase tracking-wider overflow-visible whitespace-normal">
                      Curtailment:
                    </div>
                    <div className="text-lg md:text-xl font-extrabold overflow-visible leading-relaxed py-1 text-yellow-400 whitespace-normal">
                      {country.curtailmentCases}
                    </div>
                  </div>

                  {/* Market Characteristics */}
                  <div className="pt-4 border-t border-slate-800 mt-auto overflow-visible">
                    <div className="text-sm md:text-base text-slate-500 mb-3 font-medium uppercase tracking-wider overflow-visible whitespace-normal">
                      Details:
                    </div>
                    <p className="text-sm md:text-base text-slate-300 leading-relaxed overflow-visible whitespace-normal" dangerouslySetInnerHTML={{ __html: country.characteristics }} />
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
