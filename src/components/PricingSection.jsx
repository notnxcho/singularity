const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    tagline: 'Get started, no commitment.',
    highlight: false,
    features: [
      '30 trades per month',
      '1 strategy',
      'Basic PnL tracking',
      'CSV import',
      'Web app access',
    ],
    cta: 'Start for free',
    ctaStyle: 'outline',
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    tagline: 'For traders who are serious.',
    highlight: true,
    badge: 'Most popular',
    features: [
      'Unlimited trades',
      'Unlimited strategies',
      'Full analytics suite',
      'Deviation Cost™ tracking',
      'Broker auto-import',
      '1 linked account',
      'Priority support',
    ],
    cta: 'Start Pro',
    ctaStyle: 'primary',
  },
  {
    name: 'Elite',
    price: '$59',
    period: 'per month',
    tagline: 'For professional-grade operations.',
    highlight: false,
    features: [
      'Everything in Pro',
      'Multi-account (up to 10)',
      'Behavioral analytics',
      'Tilt detection & alerts',
      'API access + webhooks',
      'Prop firm report import',
      'Priority support + onboarding',
    ],
    cta: 'Start Elite',
    ctaStyle: 'outline',
  },
]

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 3L13 13M13 13V6M13 13H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2.5 7L5.5 10L11.5 4" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function PricingSection() {
  return (
    <section
      id="pricing"
      style={{
        background: 'var(--bg-1)',
        padding: '120px 12px',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
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
            Pricing
          </span>
          <h2 style={{
            color: 'var(--contrast-1)',
            fontSize: 'clamp(32px, 3.5vw, 48px)',
            fontFamily: "'Host Grotesk', sans-serif",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '14px',
          }}>
            Start free. Upgrade when you're ready.
          </h2>
          <p style={{
            color: 'var(--contrast-muted)',
            fontSize: '16px',
            fontFamily: "'Host Grotesk', sans-serif",
            lineHeight: 1.5,
            letterSpacing: '-0.01em',
          }}>
            Free is actually usable. Pro covers most traders. Elite is for professionals managing multiple accounts.
          </p>
        </div>

        {/* Plans */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          alignItems: 'stretch',
        }}>
          {plans.map(plan => (
            <div
              key={plan.name}
              style={{
                background: plan.highlight ? '#110000' : 'var(--bg-2)',
                border: plan.highlight ? 'none' : '1px solid var(--border)',
                borderRadius: '20px',
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Highlight accent bar */}
              {plan.highlight && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'var(--accent)',
                }}/>
              )}

              {/* Badge */}
              {plan.badge && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'var(--accent)',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  marginBottom: '20px',
                  width: 'fit-content',
                }}>
                  <span style={{
                    color: '#fff',
                    fontSize: '11px',
                    fontFamily: "'Host Grotesk', sans-serif",
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}>
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div style={{
                color: plan.highlight ? '#fffcf5' : 'var(--contrast-1)',
                fontSize: '18px',
                fontFamily: "'Host Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: '-0.01em',
                marginBottom: '8px',
                marginTop: plan.badge ? 0 : '20px',
              }}>
                {plan.name}
              </div>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '6px' }}>
                <span style={{
                  color: plan.highlight ? '#fffcf5' : 'var(--contrast-1)',
                  fontSize: '48px',
                  fontFamily: "'Host Grotesk', sans-serif",
                  fontWeight: 800,
                  letterSpacing: '-0.05em',
                  lineHeight: 1,
                }}>
                  {plan.price}
                </span>
                <span style={{
                  color: plan.highlight ? 'rgba(255,252,245,0.5)' : 'var(--contrast-muted)',
                  fontSize: '14px',
                  fontFamily: "'Host Grotesk', sans-serif",
                }}>
                  /{plan.period}
                </span>
              </div>

              <p style={{
                color: plan.highlight ? 'rgba(255,252,245,0.6)' : 'var(--contrast-muted)',
                fontSize: '14px',
                fontFamily: "'Host Grotesk', sans-serif",
                lineHeight: 1.4,
                letterSpacing: '-0.01em',
                marginBottom: '28px',
              }}>
                {plan.tagline}
              </p>

              {/* Features */}
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                flex: 1,
                marginBottom: '32px',
              }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ flexShrink: 0, marginTop: '1px' }}>
                      <CheckIcon />
                    </span>
                    <span style={{
                      color: plan.highlight ? 'rgba(255,252,245,0.85)' : 'var(--contrast-2)',
                      fontSize: '14px',
                      fontFamily: "'Host Grotesk', sans-serif",
                      lineHeight: 1.4,
                      letterSpacing: '-0.01em',
                    }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {plan.ctaStyle === 'primary' ? (
                <div style={{
                  display: 'flex',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  background: 'var(--accent)',
                  cursor: 'pointer',
                }}>
                  <div style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: '#fffcf5',
                  }}>
                    <span style={{
                      color: '#110000',
                      fontSize: '15px',
                      fontFamily: "'Host Grotesk', sans-serif",
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                    }}>
                      {plan.cta}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    color: '#fff',
                  }}>
                    <ArrowIcon />
                  </div>
                </div>
              ) : (
                <button style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: plan.highlight
                    ? '1px solid rgba(255,252,245,0.2)'
                    : '1px solid var(--border-strong)',
                  background: 'transparent',
                  color: plan.highlight ? '#fffcf5' : 'var(--contrast-1)',
                  fontSize: '15px',
                  fontFamily: "'Host Grotesk', sans-serif",
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  cursor: 'pointer',
                  transition: 'border-color 0.15s, background 0.15s',
                }}>
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
