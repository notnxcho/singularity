// Figma v1 hero — background image asset from Figma MCP local server
const heroImage = 'http://localhost:3845/assets/c368012cc60e1f5830789384332544131108aaa2.png'

const ArrowDownRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3L13 13M13 13V6M13 13H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SparkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1.5L9.3 6.7L14.5 8L9.3 9.3L8 14.5L6.7 9.3L1.5 8L6.7 6.7L8 1.5Z" fill="#ff8d3b"/>
    <path d="M13 2L13.6 4.4L16 5L13.6 5.6L13 8L12.4 5.6L10 5L12.4 4.4L13 2Z" fill="#ff8d3b" opacity="0.6"/>
  </svg>
)

// Mock equity curve SVG for platform preview
const EquityCurve = () => (
  <svg width="100%" height="100%" viewBox="0 0 800 320" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    {/* Grid lines */}
    {[0, 1, 2, 3, 4].map(i => (
      <line key={i} x1="60" y1={60 + i * 50} x2="780" y2={60 + i * 50}
        stroke="rgba(255,252,245,0.06)" strokeWidth="1"/>
    ))}
    {/* Y-axis labels */}
    {['+$12k', '+$9k', '+$6k', '+$3k', '$0'].map((label, i) => (
      <text key={i} x="52" y={64 + i * 50} fill="rgba(255,252,245,0.35)"
        fontSize="10" textAnchor="end" fontFamily="Host Grotesk, sans-serif">{label}</text>
    ))}
    {/* Adherent trades line (green) */}
    <path
      d="M60 240 C100 230 140 220 180 210 C220 198 260 185 300 165 C340 142 380 115 420 95 C460 78 500 72 540 68 C580 64 620 62 660 60 C700 58 740 57 780 56"
      fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"/>
    <path
      d="M60 240 C100 230 140 220 180 210 C220 198 260 185 300 165 C340 142 380 115 420 95 C460 78 500 72 540 68 C580 64 620 62 660 60 C700 58 740 57 780 56 L780 270 L60 270 Z"
      fill="rgba(74, 222, 128, 0.06)"/>
    {/* Deviation trades line (red) */}
    <path
      d="M60 240 C100 242 140 248 180 255 C220 262 260 270 300 278 C340 286 380 288 420 290 C460 292 500 294 540 295 C580 296 620 297 660 297 C700 297 740 298 780 298"
      fill="none" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 3"/>
    {/* Legend */}
    <circle cx="80" cy="295" r="5" fill="#4ade80"/>
    <text x="90" y="299" fill="rgba(255,252,245,0.6)" fontSize="11" fontFamily="Host Grotesk, sans-serif">Strategy adherent trades</text>
    <circle cx="270" cy="295" r="5" fill="#f87171"/>
    <text x="280" y="299" fill="rgba(255,252,245,0.6)" fontSize="11" fontFamily="Host Grotesk, sans-serif">Deviation trades</text>
    {/* Gap annotation */}
    <line x1="660" y1="60" x2="660" y2="297" stroke="rgba(255,141,59,0.4)" strokeWidth="1" strokeDasharray="4 2"/>
    <text x="665" y="180" fill="#ff8d3b" fontSize="11" fontFamily="Host Grotesk, sans-serif" fontWeight="600">–$11,800</text>
    <text x="665" y="193" fill="rgba(255,141,59,0.7)" fontSize="9" fontFamily="Host Grotesk, sans-serif">gap</text>
  </svg>
)

// Mini dashboard stat cards
const DashboardPreview = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
    {/* Top bar */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
      <span style={{ color: 'rgba(255,252,245,0.5)', fontSize: '12px', fontFamily: 'Host Grotesk, sans-serif', letterSpacing: '-0.2px' }}>
        PERFORMANCE DASHBOARD
      </span>
      <span style={{ color: 'rgba(255,252,245,0.3)', fontSize: '11px', fontFamily: 'Host Grotesk, sans-serif' }}>
        Feb 2026
      </span>
    </div>

    {/* Stat row */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
      {[
        { label: 'Total PnL', value: '+$9,140', color: '#4ade80' },
        { label: 'Adherence Rate', value: '68%', color: '#ff8d3b' },
        { label: 'Deviation Cost', value: '–$4,860', color: '#f87171' },
        { label: 'Discipline Score', value: '74', color: '#60a5fa' },
      ].map(stat => (
        <div key={stat.label} style={{
          background: 'rgba(255,252,245,0.04)',
          border: '1px solid rgba(255,252,245,0.07)',
          borderRadius: '10px',
          padding: '12px',
        }}>
          <div style={{ color: 'rgba(255,252,245,0.45)', fontSize: '10px', fontFamily: 'Host Grotesk, sans-serif', marginBottom: '6px', letterSpacing: '0.2px' }}>
            {stat.label.toUpperCase()}
          </div>
          <div style={{ color: stat.color, fontSize: '18px', fontFamily: 'Host Grotesk, sans-serif', fontWeight: 700, letterSpacing: '-0.5px' }}>
            {stat.value}
          </div>
        </div>
      ))}
    </div>

    {/* Chart area */}
    <div style={{
      flex: 1,
      background: 'rgba(255,252,245,0.02)',
      border: '1px solid rgba(255,252,245,0.07)',
      borderRadius: '10px',
      overflow: 'hidden',
      minHeight: '200px',
    }}>
      <EquityCurve />
    </div>

    {/* Strategy table */}
    <div style={{
      background: 'rgba(255,252,245,0.02)',
      border: '1px solid rgba(255,252,245,0.07)',
      borderRadius: '10px',
      padding: '12px',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', color: 'rgba(255,252,245,0.35)', fontSize: '10px', fontFamily: 'Host Grotesk, sans-serif', marginBottom: '8px', letterSpacing: '0.3px' }}>
        <span>STRATEGY</span><span>WIN RATE</span><span>AVG R</span><span>ADHERENCE</span><span>DEV COST</span>
      </div>
      {[
        ['Breakout', '61%', '1.8R', '72%', '–$820'],
        ['Momentum', '54%', '2.1R', '58%', '–$2,140'],
        ['Mean-Rev', '71%', '1.3R', '81%', '–$340'],
      ].map(([strat, wr, r, adh, dev]) => (
        <div key={strat} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', padding: '4px 0', color: 'rgba(255,252,245,0.7)', fontSize: '11px', fontFamily: 'Host Grotesk, sans-serif', borderTop: '1px solid rgba(255,252,245,0.04)' }}>
          <span style={{ color: '#fff', fontWeight: 500 }}>{strat}</span>
          <span>{wr}</span>
          <span style={{ color: '#4ade80' }}>{r}</span>
          <span style={{ color: '#ff8d3b' }}>{adh}</span>
          <span style={{ color: '#f87171' }}>{dev}</span>
        </div>
      ))}
    </div>
  </div>
)

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        // The hero never changes background — always the dark cosmic image
      }}
    >
      {/* Background image — always dark, never changes with mode */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          transform: 'scaleX(-1)',
        }}
      />
      {/* Gradient overlay — fade image toward bottom */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 50%, rgba(10,9,7,0.85) 80%, rgba(10,9,7,1) 100%)',
      }}/>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '220px',
        paddingBottom: '64px',
        paddingLeft: '12px',
        paddingRight: '12px',
        gap: '72px',
      }}>

        {/* Hero text block */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          maxWidth: '1080px',
          width: '100%',
        }}>

          {/* Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            borderRadius: '12px',
            border: '1px solid rgba(255,141,59,0.32)',
            backdropFilter: 'blur(2px)',
            background: 'linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(rgba(226,255,248,0.12) 0%, rgba(255,141,59,0.24) 100%)',
            boxShadow: '0px 4px 24px rgba(17,0,0,0.2), 0px 8px 64px rgba(34,0,0,0.12)',
          }}>
            <SparkIcon />
            <span style={{
              color: '#ff8d3b',
              fontSize: '16px',
              fontFamily: "'Host Grotesk', sans-serif",
              fontWeight: 400,
              letterSpacing: '-0.32px',
              lineHeight: 'normal',
            }}>
              BY QUANTUM EDGE
            </span>
          </div>

          {/* Headline — always white (hero bg never changes) */}
          <h1 style={{
            color: '#fffcf5',
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            fontFamily: "'Host Grotesk', sans-serif",
            fontWeight: 400,
            lineHeight: 1,
            textAlign: 'center',
            letterSpacing: '-0.02em',
            textShadow: '0 2px 20px rgba(0,0,0,0.6)',
            maxWidth: '900px',
          }}>
            Your strategies have a cost{' '}
            <em style={{
              fontStyle: 'italic',
              fontWeight: 600,
              color: '#ff8d3b',
            }}>
              when you break them.
            </em>
          </h1>

          {/* Subheadline */}
          <p style={{
            color: '#fffcf5',
            opacity: 0.8,
            fontSize: '16px',
            fontFamily: "'Host Grotesk', sans-serif",
            fontWeight: 400,
            textAlign: 'center',
            letterSpacing: '-0.32px',
            lineHeight: 'normal',
            textShadow: '0 1px 12px rgba(0,0,0,0.7)',
            maxWidth: '460px',
          }}>
            The trading journal built for high-frequency technical traders who want to know which strategies actually work — and what happens when they don't follow them.
          </p>

          {/* CTA button */}
          <div style={{
            display: 'flex',
            overflow: 'hidden',
            borderRadius: '12px',
            background: '#ff8d3b',
            filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.5))',
            cursor: 'pointer',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 16px',
              borderRadius: '12px',
              background: '#110000',
            }}>
              <span style={{
                color: '#fffcf5',
                fontSize: '16px',
                fontFamily: "'Host Grotesk', sans-serif",
                fontWeight: 500,
                letterSpacing: '-0.32px',
                lineHeight: 'normal',
                whiteSpace: 'nowrap',
              }}>
                Get Started
              </span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              color: '#fffcf5',
            }}>
              <ArrowDownRight />
            </div>
          </div>
        </div>

        {/* Platform screenshot mockup */}
        <div style={{
          width: '100%',
          maxWidth: '1080px',
          height: '560px',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid rgba(255,252,245,0.1)',
          background: 'rgba(10,9,7,0.7)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 32px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,252,245,0.06)',
        }}>
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
