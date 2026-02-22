import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import CornerConnector from './components/common/CornerConnector'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import DeviationCostSection from './components/DeviationCostSection'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import PricingSection from './components/PricingSection'
import FAQSection from './components/FAQSection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'
import DarkModeToggle from './components/DarkModeToggle'

function PageFrame() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-3 bg-surface z-[55] pointer-events-none" />
      <div className="fixed bottom-0 left-3 right-3 h-3 bg-surface z-[55] pointer-events-none shadow-[0px_-4px_44px_rgba(17,0,0,0.08)]" />
      <div className="fixed top-0 left-0 bottom-0 w-3 bg-surface z-[55] pointer-events-none" />
      <div className="fixed top-0 right-0 bottom-0 w-3 bg-surface z-[55] pointer-events-none" />
      <CornerConnector corner="tl" className="fixed top-3 left-3 z-[54] pointer-events-none" />
      <CornerConnector corner="tr" className="fixed top-3 right-3 z-[54] pointer-events-none" />
      <CornerConnector corner="bl" className="fixed bottom-3 left-3 z-[54] pointer-events-none" />
      <CornerConnector corner="br" className="fixed bottom-3 right-3 z-[54] pointer-events-none" />
    </>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(prefersDark)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <>
      <Helmet>
        <title>Singularity — Strategy-First Trading Journal</title>
        <meta
          name="description"
          content="The trading journal built for high-frequency technical traders. Track strategy adherence, measure Deviation Cost™, and find out exactly what breaking your rules costs you."
        />
        <meta property="og:title" content="Singularity — Strategy-First Trading Journal" />
        <meta property="og:description" content="Track. Follow. Profit. The strategy accountability system for serious traders." />
      </Helmet>

      <PageFrame />
      <Navbar />

      <div className="px-3">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <DeviationCostSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </div>

      <DarkModeToggle darkMode={darkMode} toggle={() => setDarkMode(d => !d)} />
    </>
  )
}
