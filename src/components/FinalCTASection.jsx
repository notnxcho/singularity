const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 3L13 13M13 13V6M13 13H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function FinalCTASection() {
  return (
    <section
      style={{
        background: 'var(--bg-1)',
        padding: '120px 12px',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{
        maxWidth: '1080px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '28px',
      }}>
        {/* Ornament */}
        <div style={{
          width: '1px',
          height: '60px',
          background: 'linear-gradient(180deg, transparent, var(--accent-border), transparent)',
        }}/>

        <h2 style={{
          color: 'var(--contrast-1)',
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontFamily: "'Host Grotesk', sans-serif",
          fontWeight: 400,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          maxWidth: '700px',
        }}>
          Stop guessing.{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 600 }}>
            Start measuring.
          </em>
        </h2>

        <p style={{
          color: 'var(--contrast-muted)',
          fontSize: '18px',
          fontFamily: "'Host Grotesk', sans-serif",
          lineHeight: 1.5,
          letterSpacing: '-0.02em',
          maxWidth: '480px',
        }}>
          Your strategy is only as good as your discipline. Singularity gives you the data to prove it — and the insight to improve it.
        </p>

        {/* CTA Button */}
        <div style={{
          display: 'flex',
          overflow: 'hidden',
          borderRadius: '14px',
          background: 'var(--accent)',
          boxShadow: '0 8px 32px rgba(255, 141, 59, 0.3)',
          cursor: 'pointer',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '14px 24px',
            borderRadius: '14px',
            background: 'var(--contrast-1)',
          }}>
            <span style={{
              color: 'var(--bg-1)',
              fontSize: '17px',
              fontFamily: "'Host Grotesk', sans-serif",
              fontWeight: 600,
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}>
              Create Free Account
            </span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '52px',
            color: '#fff',
          }}>
            <ArrowIcon />
          </div>
        </div>

        <p style={{
          color: 'var(--contrast-muted)',
          fontSize: '13px',
          fontFamily: "'Host Grotesk', sans-serif",
          letterSpacing: '-0.01em',
        }}>
          No credit card required. Import your first trades in under 2 minutes.
        </p>

        {/* Bottom ornament */}
        <div style={{
          width: '1px',
          height: '60px',
          background: 'linear-gradient(180deg, transparent, var(--accent-border), transparent)',
        }}/>
      </div>
    </section>
  )
}
