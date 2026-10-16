import { SpeedInsights } from '@vercel/speed-insights/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Features from './components/Features'
import WhoItsFor from './components/WhoItsFor'
import HowItWorks from './components/HowItWorks'
import BeforeAfter from './components/BeforeAfter'
import TrustPoints from './components/TrustPoints'
import Faq from './components/Faq'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <BeforeAfter />
        <Features />
        <WhoItsFor />
        <HowItWorks />
        <TrustPoints />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      <SpeedInsights />
    </>
  )
}
