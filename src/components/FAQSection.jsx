import { useState } from 'react'

const faqs = [
  {
    q: 'How is this different from TraderSync, Tradervue, or TradeZella?',
    a: 'Those tools are built for casual day traders doing 5–15 trades. They treat strategy as a journal note — not a queryable, audited dimension of your data. Singularity is built around strategy as the primary axis. Every trade links to a strategy. Every deviation is categorized. Deviation Cost™ is a metric that doesn\'t exist anywhere else. And the platform handles 200+ trades/day without UI degradation.',
  },
  {
    q: 'Does it work with prop firm accounts?',
    a: 'Yes. Singularity imports directly from TopStep, Apex, FTMO, and generic prop firm report formats. You can track strategy adherence and deviation cost within prop firm challenges just like a live account — which is arguably where discipline matters most.',
  },
  {
    q: 'How long does auto-import take?',
    a: 'Under 2 minutes for most brokers after initial connection. Subsequent syncs are automatic and run continuously throughout your trading session. CSV uploads with smart field mapping take about 30 seconds.',
  },
  {
    q: 'Can I use it for swing trading too?',
    a: 'Yes. Singularity is optimized for high-frequency traders (50–200+ trades/session) but works for any volume. The strategy accountability framework and analytics are equally valuable whether you\'re holding for 30 seconds or 3 days.',
  },
  {
    q: 'Is my data secure?',
    a: 'Your trade data is encrypted in transit and at rest. We use read-only broker API connections — we cannot place trades on your behalf. We do not sell data to third parties. Two-factor authentication is available on all accounts.',
  },
  {
    q: 'Do you support options and futures?',
    a: 'Yes. Singularity supports equities, options, futures, forex, crypto, and CFDs. Asset class is captured per trade, and you can slice all analytics by asset class. Options-specific metrics (delta P&L, Greeks impact) are on the roadmap.',
  },
  {
    q: 'What if I trade on multiple accounts?',
    a: 'Free and Pro plans support one linked account. Elite supports up to 10 accounts and provides consolidated analytics across all of them — essential if you\'re running multiple strategies across a live account and a prop firm challenge simultaneously.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState(null)

  return (
    <section
      id="faq"
      style={{
        background: 'var(--bg-2)',
        padding: '120px 12px',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
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
            FAQ
          </span>
          <h2 style={{
            color: 'var(--contrast-1)',
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontFamily: "'Host Grotesk', sans-serif",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
          }}>
            Questions worth asking.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-1)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '22px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{
                  color: 'var(--contrast-1)',
                  fontSize: '16px',
                  fontFamily: "'Host Grotesk', sans-serif",
                  fontWeight: 500,
                  lineHeight: 1.35,
                  letterSpacing: '-0.02em',
                }}>
                  {faq.q}
                </span>
                <span style={{
                  color: open === i ? 'var(--accent)' : 'var(--contrast-muted)',
                  fontSize: '20px',
                  lineHeight: 1,
                  flexShrink: 0,
                  transition: 'transform 0.2s, color 0.2s',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  display: 'inline-block',
                }}>
                  +
                </span>
              </button>

              {open === i && (
                <div style={{
                  padding: '0 24px 22px',
                  borderTop: '1px solid var(--border)',
                  paddingTop: '20px',
                }}>
                  <p style={{
                    color: 'var(--contrast-muted)',
                    fontSize: '15px',
                    fontFamily: "'Host Grotesk', sans-serif",
                    lineHeight: 1.65,
                    letterSpacing: '-0.01em',
                  }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
