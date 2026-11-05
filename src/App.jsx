import { SpeedInsights } from '@vercel/speed-insights/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Intro from './components/Intro'
import WhoItsFor from './components/WhoItsFor'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import DayWithSupagate from './components/DayWithSupagate'
import WhySupagate from './components/WhySupagate'
import Testimonials from './components/Testimonials'
import PartnerCta from './components/PartnerCta'
import Faq from './components/Faq'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

// Section order follows the content restructuring brief: promise → what it
// is → who it serves → solutions → how → a day in the life → why → proof →
// demo/partner CTA → FAQs → final CTA.
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Intro />
        <WhoItsFor />
        <Features />
        <HowItWorks />
        <DayWithSupagate />
        <WhySupagate />
        <Testimonials />
        <PartnerCta />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      <SpeedInsights />
    </>
  )
}
