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

// Frame border overlay — 12px bg-1 strips on all 4 sides of the viewport
// Matches the Figma v1 design's frame-left/right/top/bot elements
function PageFrame() {
  return (
    <>
      {/* Top */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: '12px', background: 'var(--bg-1)', zIndex: 55,
        pointerEvents: 'none',
      }}/>
      {/* Bottom — with upward shadow (from Figma: frame-bot shadow) */}
      <div style={{
        position: 'fixed', bottom: 0, left: '12px', right: '12px',
        height: '12px', background: 'var(--bg-1)', zIndex: 55,
        pointerEvents: 'none',
        boxShadow: '0px -4px 44px rgba(17, 0, 0, 0.08)',
      }}/>
      {/* Left */}
      <div style={{
        position: 'fixed', top: 0, left: 0, bottom: 0,
        width: '12px', background: 'var(--bg-1)', zIndex: 55,
        pointerEvents: 'none',
      }}/>
      {/* Right */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: '12px', background: 'var(--bg-1)', zIndex: 55,
        pointerEvents: 'none',
      }}/>
      {/* Inner corner decorations — CornerConnector rotated for each position */}
      <CornerConnector corner="tl" style={{ position: 'fixed', top: 12, left: 12,  zIndex: 54, pointerEvents: 'none' }} />
      <CornerConnector corner="tr" style={{ position: 'fixed', top: 12, right: 12, zIndex: 54, pointerEvents: 'none' }} />
      <CornerConnector corner="bl" style={{ position: 'fixed', bottom: 12, left: 12,  zIndex: 54, pointerEvents: 'none' }} />
      <CornerConnector corner="br" style={{ position: 'fixed', bottom: 12, right: 12, zIndex: 54, pointerEvents: 'none' }} />
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

      {/* Fixed frame overlay — always on top, matches Figma v1 design */}
      <PageFrame />

      {/* Fixed navbar */}
      <Navbar />

      {/* Page content — padded to sit inside the 12px frame */}
      <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>
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

      {/* Dark mode toggle — fixed, bottom-right */}
      <DarkModeToggle darkMode={darkMode} toggle={() => setDarkMode(d => !d)} />
    </>
  )
}
