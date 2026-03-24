import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
import IRHero from '@/components/ir/IRHero'
import IRRevenueEngine from '@/components/ir/IRRevenueEngine'
import ERCOTSimulation from '@/components/ir/ERCOTSimulation'
import AIEMSDashboard from '@/components/ir/AIEMSDashboard'
import FinancialPlan from '@/components/ir/FinancialPlan'
import AIEMSModel from '@/components/ir/AIEMSModel'

export default function IRPage() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <Navbar />
      <div className="pt-20">
        <IRHero />
        <IRRevenueEngine />
        <ERCOTSimulation />
        <section className="py-16 px-4 bg-[#020617]">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-sm font-semibold">LIVE DEMO</span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              AI-EMS Live Simulation
            </h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto">
              Real-time grid data → AI optimization → Data center load management
            </p>
          </div>
          <AIEMSDashboard />
        </section>
        <FinancialPlan />
        <AIEMSModel />
      </div>
      <ContactSection />
      <Footer />
    </main>
  )
}
