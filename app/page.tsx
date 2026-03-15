import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechTicker from '@/components/TechTicker'
import GlobalOpportunity from '@/components/GlobalOpportunity'
import SSMDCSolution from '@/components/SSMDCSolution'
import HowItWorks from '@/components/HowItWorks'
import RevenueEngine from '@/components/RevenueEngine'
import SSMDCvsESS from '@/components/SSMDCvsESS'
import ExpansionStrategy from '@/components/ExpansionStrategy'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TechTicker />
      <GlobalOpportunity />
      <SSMDCSolution />
      <HowItWorks />
      <RevenueEngine />
      <SSMDCvsESS />
      <ExpansionStrategy />
      <ContactSection />
      <Footer />
    </main>
  )
}
