import CornerConnector from './common/CornerConnector'

const ArrowDownRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3L13 13M13 13V6M13 13H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: '12px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 50,
    }}>
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '64px',
        height: '77px',
        padding: '0 16px',
        borderBottomLeftRadius: '24px',
        borderBottomRightRadius: '24px',
        background: 'var(--bg-1)',
        boxShadow: 'var(--shadow-nav)',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '8px' }}>
          <span style={{
            color: 'var(--contrast-1)',
            fontFamily: "'Host Grotesk', sans-serif",
            fontSize: '20px',
            fontWeight: 800,
            letterSpacing: '-0.4px',
            lineHeight: 1,
          }}>
            SINGULARITY
          </span>
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {['Platform', 'Features', 'Pricing'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: 'var(--contrast-2)',
                fontFamily: "'Host Grotesk', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
                letterSpacing: '-0.32px',
                lineHeight: 'normal',
                textDecoration: 'none',
                opacity: 1,
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.6' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="#signin"
            style={{
              color: 'var(--contrast-2)',
              fontFamily: "'Host Grotesk', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              letterSpacing: '-0.32px',
              lineHeight: 'normal',
              textDecoration: 'none',
              opacity: 1,
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.6' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
          >
            Sign in
          </a>

          {/* Try for free — two-part pill button */}
          <div style={{
            display: 'flex',
            alignItems: 'stretch',
            overflow: 'hidden',
            borderRadius: '12px',
            background: 'var(--accent)',
            cursor: 'pointer',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 16px',
              borderRadius: '12px',
              background: 'var(--contrast-1)',
            }}>
              <span style={{
                color: 'var(--bg-1)',
                fontFamily: "'Host Grotesk', sans-serif",
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '-0.32px',
                lineHeight: 'normal',
                whiteSpace: 'nowrap',
              }}>
                Try for free
              </span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              color: 'var(--bg-1)',
            }}>
              <ArrowDownRight />
            </div>
          </div>
        </div>

        {/*
          Corner connectors — blend the frame-top border into the navbar edges.
          Left connector: squared corner faces top-right (toward the navbar edge + frame-top).
          Right connector: squared corner faces top-left (toward the navbar edge + frame-top).
        */}
        <CornerConnector
          corner="tr"
          style={{ position: 'absolute', top: 0, left: '-24px', pointerEvents: 'none' }}
        />
        <CornerConnector
          corner="tl"
          style={{ position: 'absolute', top: 0, right: '-24px', pointerEvents: 'none' }}
        />
      </div>
    </nav>
  )
}
