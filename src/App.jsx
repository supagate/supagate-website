import { SpeedInsights } from '@vercel/speed-insights/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Features from './components/Features'
import WhoItsFor from './components/WhoItsFor'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
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
        <Features />
        <WhoItsFor />
        <HowItWorks />
        <Testimonials />
        <Stats />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      <SpeedInsights />
    </>
  )
}
