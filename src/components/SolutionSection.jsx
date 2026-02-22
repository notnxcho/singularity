const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8L6.5 11.5L13 4.5" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const pillars = [
  {
    step: 'Declare → Execute → Audit',
    icon: '◎',
    title: 'Strategy accountability built in.',
    body: 'Tag every trade with the strategy you intended before you execute. After close, mark whether you followed it. Singularity tracks adherence across every trade, every day, every strategy.',
    bullets: [
      'Pre-trade strategy declaration',
      'Post-trade adherence audit',
      'Deviation categories: early exit, FOMO, revenge trade, moved stop',
      'Strategy versioning — V1 of your breakout is not V2',
    ],
  },
  {
    step: 'Analytics That Actually Matter',
    icon: '▲',
    title: 'Metrics that drive decisions.',
    body: 'PnL by strategy. Deviation cost in dollars. Performance by time of day, asset, direction. Equity curves per strategy. Slice your data 20 different ways in seconds.',
    bullets: [
      'R-multiple and expectancy by strategy',
      'Performance by time of day and day of week',
      'Sharpe, Sortino, profit factor',
      'Strategy comparison matrix',
    ],
  },
  {
    step: 'Built for Volume',
    icon: '⚡',
    title: 'Handles 200 trades before coffee.',
    body: 'Auto-import from 50+ brokers and platforms. Batch strategy tagging. Smart suggestions based on your patterns. Designed for traders doing 50–200+ trades per session.',
    bullets: [
      'One-click broker sync',
      'Batch tag multiple trades at once',
      'Smart strategy suggestions from your history',
      'Prop firm report import (TopStep, Apex, FTMO)',
    ],
  },
]

export default function SolutionSection() {
  return (
    <section
      id="platform"
      style={{
        background: 'var(--bg-1)',
        padding: '120px 12px',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '72px', maxWidth: '600px' }}>
          <span style={{
            display: 'inline-block',
            color: 'var(--accent)',
            fontSize: '13px',
            fontFamily: "'Host Grotesk', sans-serif",
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            The Solution
          </span>
          <h2 style={{
            color: 'var(--contrast-1)',
            fontSize: 'clamp(32px, 3.5vw, 48px)',
            fontFamily: "'Host Grotesk', sans-serif",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '16px',
          }}>
            Strategy-first journaling for traders who{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>take this seriously.</em>
          </h2>
          <p style={{
            color: 'var(--contrast-muted)',
            fontSize: '16px',
            fontFamily: "'Host Grotesk', sans-serif",
            lineHeight: 1.6,
            letterSpacing: '-0.01em',
          }}>
            Singularity is not another trade log. It's a strategy accountability system with institutional-grade analytics designed for traders who execute at volume.
          </p>
        </div>

        {/* Pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {pillars.map((pillar, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '80px',
                padding: '56px 0',
                borderTop: '1px solid var(--border)',
                alignItems: 'start',
              }}
            >
              <div style={{ order: i % 2 !== 0 ? 1 : 0 }}>
                <span style={{
                  display: 'inline-block',
                  color: 'var(--accent)',
                  fontSize: '13px',
                  fontFamily: "'Host Grotesk', sans-serif",
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}>
                  {pillar.step}
                </span>
                <h3 style={{
                  color: 'var(--contrast-1)',
                  fontSize: '28px',
                  fontFamily: "'Host Grotesk', sans-serif",
                  fontWeight: 600,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                }}>
                  {pillar.title}
                </h3>
                <p style={{
                  color: 'var(--contrast-muted)',
                  fontSize: '15px',
                  fontFamily: "'Host Grotesk', sans-serif",
                  lineHeight: 1.6,
                  letterSpacing: '-0.01em',
                  marginBottom: '24px',
                }}>
                  {pillar.body}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {pillar.bullets.map(b => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ flexShrink: 0, marginTop: '1px' }}><CheckIcon /></span>
                      <span style={{
                        color: 'var(--contrast-2)',
                        fontSize: '14px',
                        fontFamily: "'Host Grotesk', sans-serif",
                        lineHeight: 1.5,
                        letterSpacing: '-0.01em',
                      }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual card */}
              <div
                style={{
                  order: i % 2 !== 0 ? 0 : 1,
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  height: '280px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <PillarVisual index={i} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PillarVisual({ index }) {
  if (index === 0) {
    // Declare → Execute → Audit flow
    return (
      <div style={{ padding: '24px', width: '100%' }}>
        {[
          { phase: 'DECLARE', color: '#60a5fa', text: 'Breakout Strategy — NVDA 9:35 AM' },
          { phase: 'EXECUTE', color: '#4ade80', text: 'Entry $487.20 → Exit $493.50 (+$630)' },
          { phase: 'AUDIT', color: '#ff8d3b', text: 'Adherence: Yes ✓' },
        ].map((step, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px',
            background: 'var(--bg-1)',
            borderRadius: '10px',
            marginBottom: '8px',
            border: '1px solid var(--border)',
          }}>
            <span style={{
              color: step.color,
              fontSize: '10px',
              fontFamily: "'Host Grotesk', sans-serif",
              fontWeight: 700,
              letterSpacing: '0.08em',
              whiteSpace: 'nowrap',
              minWidth: '58px',
            }}>
              {step.phase}
            </span>
            <span style={{
              color: 'var(--contrast-2)',
              fontSize: '13px',
              fontFamily: "'Host Grotesk', sans-serif",
            }}>
              {step.text}
            </span>
          </div>
        ))}
      </div>
    )
  }

  if (index === 1) {
    // Mini analytics grid
    return (
      <div style={{ padding: '20px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {[
            { k: 'Expectancy', v: '2.1R', c: '#4ade80' },
            { k: 'Profit Factor', v: '1.74', c: '#60a5fa' },
            { k: 'Best Hour', v: '9:30 AM', c: '#ff8d3b' },
            { k: 'Sharpe Ratio', v: '1.32', c: '#a78bfa' },
          ].map(s => (
            <div key={s.k} style={{
              padding: '14px',
              background: 'var(--bg-1)',
              borderRadius: '10px',
              border: '1px solid var(--border)',
            }}>
              <div style={{ color: 'var(--contrast-muted)', fontSize: '11px', fontFamily: "'Host Grotesk', sans-serif", marginBottom: '6px', letterSpacing: '0.03em' }}>
                {s.k.toUpperCase()}
              </div>
              <div style={{ color: s.c, fontSize: '22px', fontFamily: "'Host Grotesk', sans-serif", fontWeight: 700, letterSpacing: '-0.03em' }}>
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // index === 2: broker logos grid
  return (
    <div style={{ padding: '24px', width: '100%', textAlign: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {['Interactive Brokers', 'DAS Trader', 'Lightspeed', 'Binance', 'MetaTrader', 'TradingView', 'NinjaTrader', 'Webull', 'TopStep'].map(name => (
          <div key={name} style={{
            padding: '10px 8px',
            background: 'var(--bg-1)',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            color: 'var(--contrast-2)',
            fontSize: '10px',
            fontFamily: "'Host Grotesk', sans-serif",
            fontWeight: 500,
            letterSpacing: '-0.01em',
            lineHeight: 1.3,
            textAlign: 'center',
          }}>
            {name}
          </div>
        ))}
      </div>
      <p style={{ color: 'var(--contrast-muted)', fontSize: '12px', fontFamily: "'Host Grotesk', sans-serif", marginTop: '12px' }}>
        + 40 more brokers and platforms
      </p>
    </div>
  )
}
