const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'API Docs', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Terms', 'Privacy', 'Security'],
  Community: ['Twitter / X', 'Discord', 'GitHub'],
}

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border)',
      padding: '64px 12px 32px',
    }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '280px repeat(4, 1fr)',
          gap: '48px',
          marginBottom: '64px',
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{
              color: 'var(--contrast-1)',
              fontSize: '20px',
              fontFamily: "'Host Grotesk', sans-serif",
              fontWeight: 800,
              letterSpacing: '-0.04em',
            }}>
              SINGULARITY
            </span>
            <p style={{
              color: 'var(--contrast-muted)',
              fontSize: '13px',
              fontFamily: "'Host Grotesk', sans-serif",
              lineHeight: 1.6,
              letterSpacing: '-0.01em',
              maxWidth: '220px',
            }}>
              The strategy-first trading journal for high-frequency technical traders.
            </p>
            <span style={{
              display: 'inline-block',
              color: 'var(--accent)',
              fontSize: '12px',
              fontFamily: "'Host Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: '0.03em',
            }}>
              By Quantum Edge
            </span>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{
                color: 'var(--contrast-1)',
                fontSize: '13px',
                fontFamily: "'Host Grotesk', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}>
                {category}
              </span>
              {links.map(link => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: 'var(--contrast-muted)',
                    fontSize: '14px',
                    fontFamily: "'Host Grotesk', sans-serif",
                    textDecoration: 'none',
                    letterSpacing: '-0.01em',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--contrast-1)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--contrast-muted)' }}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <p style={{
            color: 'var(--contrast-muted)',
            fontSize: '13px',
            fontFamily: "'Host Grotesk', sans-serif",
            letterSpacing: '-0.01em',
          }}>
            © 2026 Singularity by Quantum Edge. All rights reserved.
          </p>
          <p style={{
            color: 'var(--contrast-muted)',
            fontSize: '13px',
            fontFamily: "'Host Grotesk', sans-serif",
            letterSpacing: '-0.01em',
          }}>
            Data is encrypted in transit and at rest.
          </p>
        </div>
      </div>
    </footer>
  )
}
