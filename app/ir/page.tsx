import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import IRHero from '@/components/ir/IRHero'
import IRRevenueEngine from '@/components/ir/IRRevenueEngine'
import ERCOTSimulation from '@/components/ir/ERCOTSimulation'
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
        <FinancialPlan />
        <AIEMSModel />
      </div>
      <Footer />
    </main>
  )
}
