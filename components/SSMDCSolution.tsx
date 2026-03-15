'use client'

import { motion } from 'framer-motion'
import { Droplets, Box, Plug, Zap, Cpu, TrendingUp, ArrowRight, ArrowDown, Activity, Power, Coins, Brain, GitBranch } from 'lucide-react'

export default function SSMDCSolution() {
  const components = [
    {
      icon: Droplets,
      title: 'Immersion Cooling System',
      description: 'Fire-free immersion cooling technology achieving PUE 1.05. Eliminates battery fire risk completely.',
      color: 'emerald-green',
    },
    {
      icon: Box,
      title: 'Modular Scalability',
      description: '20ft/40ft container design enabling instant add/remove based on grid conditions. Rapid deployment capability.',
      color: 'cyan',
    },
    {
      icon: Plug,
      title: 'Plug-and-Play Interface',
      description: 'Direct connection to 22.9kV high-voltage lines without substations. Immediate grid integration.',
      color: 'electric-blue',
    },
  ]

  const flowSteps = [
    {
      icon: Zap,
      title: 'Surplus Energy Ingest',
      description: 'Instantly absorbs excess electricity when renewable energy curtailment occurs.',
      color: 'cyan',
    },
    {
      icon: Cpu,
      title: 'Adaptive AI-EMS Control',
      description: 'EMS increases computing load in real-time to consume power (Load Following).',
      color: 'emerald-green',
    },
    {
      icon: TrendingUp,
      title: 'Value Generation',
      description: 'Converts absorbed energy into ASIC mining, AI computing, and edge computing instantly.',
      color: 'electric-blue',
    },
    {
      icon: ArrowDown,
      title: 'Grid Stabilization',
      description: 'Reduces grid load to prevent blackouts and optimizes transmission efficiency.',
      color: 'emerald-green',
    },
  ]

  return (
    <section id="solution" className="relative min-h-fit block py-32 px-4 sm:px-6 lg:px-8 bg-dark-slate/50 z-10 overflow-visible">
      <div className="max-w-7xl mx-auto relative overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-40 overflow-visible"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent overflow-visible leading-tight py-2">
            The S-SMDC Solution
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto overflow-visible">
            Flexible Load Management: Putting Power In and Taking It Out to Stabilize the Grid
          </p>
        </motion.div>

        {/* Visual 1: The Modular Pod Concept */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 overflow-visible"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center overflow-visible">
            2–3MW Modular Pod Architecture
          </h3>
          <div className="grid md:grid-cols-3 gap-8 overflow-visible">
            {components.map((component, index) => {
              const Icon = component.icon
              const isGreen = component.color === 'emerald-green'
              const isCyan = component.color === 'cyan'
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative overflow-visible"
                >
                  <div className="relative bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border-2 border-blue-900/50 hover:border-cyan-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 h-full overflow-visible">
                    <div className={`inline-flex p-4 rounded-xl mb-6 ${
                      isGreen ? 'bg-emerald-green/20' : isCyan ? 'bg-cyan-400/20' : 'bg-electric-blue/20'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        isGreen ? 'text-emerald-400' : isCyan ? 'text-cyan-400' : 'text-electric-blue'
                      }`} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 overflow-visible">
                      Component {String.fromCharCode(65 + index)}: {component.title}
                    </h4>
                    <p className="text-slate-300 leading-relaxed overflow-visible">
                      {component.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Visual 2: Energy-to-Value Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-visible"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center overflow-visible">
            Energy-to-Value Flow Process
          </h3>
          
          <div className="relative overflow-visible">
            {/* Flow Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 overflow-visible">
              {flowSteps.map((step, index) => {
                const Icon = step.icon
                const isGreen = step.color === 'emerald-green'
                const isCyan = step.color === 'cyan'
                return (
                  <div key={index} className="relative overflow-visible">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border-2 border-blue-900/50 hover:border-cyan-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 h-full overflow-visible"
                    >
                      <div className="flex items-center gap-3 mb-4 overflow-visible">
                        <div className={`inline-flex p-3 rounded-lg ${
                          isGreen ? 'bg-emerald-green/20' : isCyan ? 'bg-cyan-400/20' : 'bg-electric-blue/20'
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            isGreen ? 'text-emerald-400' : isCyan ? 'text-cyan-400' : 'text-electric-blue'
                          }`} />
                        </div>
                        <span className="text-sm font-bold text-cyan-400 overflow-visible">Step {index + 1}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 overflow-visible">
                        {step.title}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed overflow-visible">
                        {step.description}
                      </p>
                    </motion.div>
                    
                    {/* Flow Arrow */}
                    {index < flowSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 overflow-visible">
                        <ArrowRight className="w-6 h-6 text-cyan-400/60" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Vertical Flow Arrows for Mobile */}
            <div className="lg:hidden flex flex-col items-center gap-4 my-8 overflow-visible">
              {flowSteps.slice(0, -1).map((_, index) => (
                <ArrowDown key={index} className="w-6 h-6 text-cyan-400/60" />
              ))}
            </div>
          </div>

          {/* Core Message Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 border-2 border-cyan-500/50 rounded-xl p-8 text-center overflow-visible"
          >
            <h4 className="text-2xl font-bold text-white mb-3 overflow-visible">
              Flexible Load Management: The Core Innovation
            </h4>
            <p className="text-lg text-slate-200 leading-relaxed max-w-4xl mx-auto overflow-visible">
              Our solution dynamically <span className="text-cyan-400 font-bold">puts power in</span> when surplus energy is available and <span className="text-blue-400 font-bold">takes it out</span> when grid demand rises. This flexible computing load management stabilizes the grid while maximizing value generation.
            </p>
          </motion.div>
        </motion.div>

        {/* Visual 3: Dual-Mode Operation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 overflow-visible"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center overflow-visible">
            Dual-Mode Operation: Beyond Passive Waiting
          </h3>

          {/* Dual Mode Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 overflow-visible">
            {/* Mode A: Stable Operations */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border-2 border-blue-900/50 hover:border-cyan-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 overflow-visible"
            >
              <div className="flex items-center gap-3 mb-6 overflow-visible">
                <div className="inline-flex p-4 rounded-xl bg-blue-500/20">
                  <Activity className="w-8 h-8 text-blue-400" />
                </div>
                <div className="overflow-visible">
                  <span className="text-sm font-bold text-blue-400 uppercase tracking-wider overflow-visible">Mode A</span>
                  <h4 className="text-xl font-bold text-white overflow-visible">Stable Operations (via PPA)</h4>
                </div>
              </div>
              <div className="space-y-4 overflow-visible">
                <div className="overflow-visible">
                  <div className="text-sm font-semibold text-blue-300 mb-2 overflow-visible">24/7 Carbon-Free Compute</div>
                  <p className="text-slate-300 leading-relaxed overflow-visible">
                    Securing 100% carbon-free power supply through renewable energy PPA contracts. Continuous operation guarantee.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-700 overflow-visible">
                  <div className="text-sm font-semibold text-blue-300 mb-2 overflow-visible">Core Workload</div>
                  <p className="text-slate-300 leading-relaxed overflow-visible">
                    High-value AI model training, LLM inference, and edge computing services. Premium margin operations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mode B: Surplus Optimization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border-2 border-blue-900/50 hover:border-cyan-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 overflow-visible"
            >
              <div className="flex items-center gap-3 mb-6 overflow-visible">
                <div className="inline-flex p-4 rounded-xl bg-cyan-500/20">
                  <Power className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="overflow-visible">
                  <span className="text-sm font-bold text-cyan-400 uppercase tracking-wider overflow-visible">Mode B</span>
                  <h4 className="text-xl font-bold text-white overflow-visible">Surplus Optimization (via Curtailment)</h4>
                </div>
              </div>
              <div className="space-y-4 overflow-visible">
                <div className="overflow-visible">
                  <div className="text-sm font-semibold text-yellow-400 mb-2 overflow-visible">Instant Energy Absorption</div>
                  <p className="text-slate-300 leading-relaxed overflow-visible">
                    Immediately absorbing wasted electricity during curtailment events at low-cost or zero-cost rates.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-700 overflow-visible">
                  <div className="text-sm font-semibold text-yellow-400 mb-2 overflow-visible">Flexible Workload</div>
                  <p className="text-slate-300 leading-relaxed overflow-visible">
                    ASIC-based digital asset mining operations to maximize additional revenue. Profit alpha generation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Smart Switch Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border-2 border-blue-900/50 mb-12 relative overflow-visible"
          >
            <h4 className="text-xl font-bold text-white mb-8 text-center overflow-visible">
              Smart Switch Flow: AI-EMS Decision Making
            </h4>
            
            <div className="grid md:grid-cols-3 gap-6 items-center relative overflow-visible">
              {/* Input Sources */}
              <div className="space-y-6 overflow-visible">
                <div className="bg-blue-500/20 border-2 border-blue-500/50 rounded-xl p-6 overflow-visible">
                  <div className="flex items-center gap-3 mb-3 overflow-visible">
                    <Zap className="w-6 h-6 text-blue-400" />
                    <span className="text-sm font-bold text-blue-400 overflow-visible">PPA Renewable Energy</span>
                  </div>
                  <p className="text-xs text-slate-300 overflow-visible">24/7 Stable Supply</p>
                </div>
                <div className="bg-cyan-500/20 border-2 border-cyan-500/50 rounded-xl p-6 overflow-visible">
                  <div className="flex items-center gap-3 mb-3 overflow-visible">
                    <Zap className="w-6 h-6 text-cyan-400" />
                    <span className="text-sm font-bold text-cyan-400 overflow-visible">Surplus/Wasted Energy</span>
                  </div>
                  <p className="text-xs text-slate-300 overflow-visible">During Curtailment</p>
                </div>
              </div>

              {/* AI-EMS Center */}
              <div className="flex flex-col items-center relative overflow-visible">
                {/* Arrows to Center */}
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 overflow-visible">
                  <ArrowRight className="w-6 h-6 text-blue-400/60" />
                </div>
                <div className="hidden md:block absolute left-0 bottom-1/2 translate-y-1/2 -translate-x-6 overflow-visible">
                  <ArrowRight className="w-6 h-6 text-cyan-400/60" />
                </div>
                
                <div className="bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 border-2 border-emerald-500/50 rounded-xl p-6 mb-4 overflow-visible">
                  <Brain className="w-10 h-10 text-white mx-auto mb-2" />
                  <span className="text-sm font-bold text-white overflow-visible">AI-EMS</span>
                  <p className="text-xs text-slate-300 mt-1 overflow-visible">Smart Switch</p>
                </div>
                <GitBranch className="w-8 h-8 text-emerald-400" />
                
                {/* Arrows from Center */}
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 overflow-visible">
                  <ArrowRight className="w-6 h-6 text-blue-400/60" />
                </div>
                <div className="hidden md:block absolute right-0 bottom-1/2 translate-y-1/2 translate-x-6 overflow-visible">
                  <ArrowRight className="w-6 h-6 text-yellow-400/60" />
                </div>
              </div>

              {/* Output Workloads */}
              <div className="space-y-6 overflow-visible">
                <div className="bg-blue-500/20 border-2 border-blue-500/50 rounded-xl p-6 overflow-visible">
                  <div className="flex items-center gap-3 mb-3 overflow-visible">
                    <Cpu className="w-6 h-6 text-blue-400" />
                    <span className="text-sm font-bold text-blue-400 overflow-visible">AI/Edge Computing</span>
                  </div>
                  <p className="text-xs text-slate-300 overflow-visible">High Margin</p>
                </div>
                <div className="bg-yellow-500/20 border-2 border-yellow-500/50 rounded-xl p-6 overflow-visible">
                  <div className="flex items-center gap-3 mb-3 overflow-visible">
                    <Coins className="w-6 h-6 text-yellow-400" />
                    <span className="text-sm font-bold text-yellow-400 overflow-visible">ASIC Mining</span>
                  </div>
                  <p className="text-xs text-slate-300 overflow-visible">Profit Alpha</p>
                </div>
              </div>
            </div>

            {/* Mobile Flow Arrows */}
            <div className="md:hidden flex flex-col items-center gap-4 my-8 overflow-visible">
              <ArrowDown className="w-6 h-6 text-blue-400/60" />
              <ArrowDown className="w-6 h-6 text-cyan-400/60" />
              <ArrowDown className="w-6 h-6 text-emerald-400/60" />
              <ArrowDown className="w-6 h-6 text-blue-400/60" />
              <ArrowDown className="w-6 h-6 text-yellow-400/60" />
            </div>
          </motion.div>

          {/* Key Technology Highlight */}
          <div className="grid md:grid-cols-2 gap-8 overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-500/50 rounded-xl p-8 overflow-visible"
            >
              <h4 className="text-xl font-bold text-white mb-4 overflow-visible">
                Adaptive Load Balancing
              </h4>
              <p className="text-slate-200 leading-relaxed overflow-visible">
                Adjusting computing load by <span className="text-cyan-400 font-bold">putting power in</span> and <span className="text-blue-400 font-bold">taking it out</span> (Flex-load) based on power supply conditions. Maintaining 100% uptime while contributing to grid stabilization.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-500/20 to-yellow-500/20 border-2 border-cyan-500/50 rounded-xl p-8 overflow-visible"
            >
              <h4 className="text-xl font-bold text-white mb-4 overflow-visible">
                Economic Edge
              </h4>
              <p className="text-slate-200 leading-relaxed overflow-visible">
                Building a stable foundation through PPA contracts, while capturing profit alpha from surplus power. Dual-mode operation maximizes both reliability and profitability.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

