const steps = [
  {
    number: '01',
    title: 'Connect',
    subtitle: 'Link your broker or upload your trades.',
    body: 'One-click broker sync or CSV upload. Auto-import handles the rest. Your trade history is imported in under 2 minutes. Supports 50+ brokers and prop firms.',
    color: '#60a5fa',
  },
  {
    number: '02',
    title: 'Tag',
    subtitle: 'Assign strategies. Mark adherence.',
    body: 'Batch-tag multiple trades at once. Smart suggestions pre-fill strategies based on your patterns. Post-trade audit takes 30 seconds per session.',
    color: '#ff8d3b',
  },
  {
    number: '03',
    title: 'Learn',
    subtitle: 'Open your dashboard. See the truth.',
    body: 'Which strategies generate alpha. Where you break your rules. What it costs you in exact dollars. Data that makes your next session better than the last.',
    color: '#4ade80',
  },
]

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      style={{
        background: 'var(--bg-2)',
        padding: '120px 12px',
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ marginBottom: '72px', textAlign: 'center' }}>
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
            How It Works
          </span>
          <h2 style={{
            color: 'var(--contrast-1)',
            fontSize: 'clamp(32px, 3.5vw, 48px)',
            fontFamily: "'Host Grotesk', sans-serif",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
          }}>
            Three steps. That's it.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
          background: 'var(--border)',
          borderRadius: '20px',
          overflow: 'hidden',
        }}>
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-1)',
                padding: '48px 36px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {/* Step number */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <span style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: `1.5px solid ${step.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: step.color,
                  fontSize: '13px',
                  fontFamily: "'Host Grotesk', sans-serif",
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  flexShrink: 0,
                }}>
                  {step.number}
                </span>
                <div style={{
                  flex: 1,
                  height: '1px',
                  background: i < 2 ? 'var(--border)' : 'transparent',
                }}/>
              </div>

              <h3 style={{
                color: step.color,
                fontSize: '32px',
                fontFamily: "'Host Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}>
                {step.title}
              </h3>

              <p style={{
                color: 'var(--contrast-1)',
                fontSize: '17px',
                fontFamily: "'Host Grotesk', sans-serif",
                fontWeight: 500,
                lineHeight: 1.3,
                letterSpacing: '-0.02em',
              }}>
                {step.subtitle}
              </p>

              <p style={{
                color: 'var(--contrast-muted)',
                fontSize: '14px',
                fontFamily: "'Host Grotesk', sans-serif",
                lineHeight: 1.6,
                letterSpacing: '-0.01em',
              }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p style={{
          textAlign: 'center',
          marginTop: '32px',
          color: 'var(--contrast-muted)',
          fontSize: '14px',
          fontFamily: "'Host Grotesk', sans-serif",
          letterSpacing: '-0.01em',
        }}>
          No credit card required. Import your first trades in under 2 minutes.
        </p>
      </div>
    </section>
  )
}
