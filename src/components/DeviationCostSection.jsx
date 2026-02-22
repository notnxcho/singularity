export default function DeviationCostSection() {
  return (
    <section
      id="deviation-cost"
      style={{
        background: 'var(--bg-2)',
        padding: '120px 12px',
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        {/* Header */}
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
            The Killer Metric
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
            The metric no other journal gives you.
          </h2>
          <p style={{
            color: 'var(--contrast-muted)',
            fontSize: '16px',
            fontFamily: "'Host Grotesk', sans-serif",
            lineHeight: 1.6,
            letterSpacing: '-0.01em',
            maxWidth: '560px',
            margin: '0 auto',
          }}>
            For every trade where you broke your own rules, Singularity calculates what would have happened if you hadn't. The difference is your Deviation Cost — the most honest number in your portfolio.
          </p>
        </div>

        {/* Main stat card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center',
        }}>
          {/* Left: the "aha moment" card */}
          <div style={{
            background: 'var(--bg-1)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}>
            {/* Card header */}
            <div style={{
              padding: '20px 28px',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <span style={{
                color: 'var(--contrast-1)',
                fontSize: '14px',
                fontFamily: "'Host Grotesk', sans-serif",
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}>
                Deviation Cost™
              </span>
              <span style={{
                color: 'var(--contrast-muted)',
                fontSize: '12px',
                fontFamily: "'Host Grotesk', sans-serif",
              }}>
                February 2026
              </span>
            </div>

            {/* Stats */}
            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <StatRow
                label="Your PnL this month"
                value="+$4,280"
                color="var(--contrast-1)"
                valueSize="28px"
              />
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                <StatRow
                  label="PnL on strategy-adherent trades"
                  value="+$9,140"
                  color="#4ade80"
                  valueSize="28px"
                  subtext="68% of your trades"
                />
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                <StatRow
                  label="Deviation Cost"
                  value="–$4,860"
                  color="#f87171"
                  valueSize="32px"
                  bold
                />
              </div>

              {/* Impact message */}
              <div style={{
                background: 'rgba(248, 113, 113, 0.08)',
                border: '1px solid rgba(248, 113, 113, 0.2)',
                borderRadius: '10px',
                padding: '14px 16px',
              }}>
                <p style={{
                  color: '#f87171',
                  fontSize: '14px',
                  fontFamily: "'Host Grotesk', sans-serif",
                  fontWeight: 500,
                  lineHeight: 1.4,
                  letterSpacing: '-0.01em',
                }}>
                  Your deviations cost you more than you made this month.
                </p>
              </div>
            </div>
          </div>

          {/* Right: explanation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h3 style={{
                color: 'var(--contrast-1)',
                fontSize: '32px',
                fontFamily: "'Host Grotesk', sans-serif",
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '16px',
              }}>
                <span style={{ color: 'var(--accent)' }}>Deviation Cost™</span>
                <br />
                is the number<br />that changes everything.
              </h3>
              <p style={{
                color: 'var(--contrast-muted)',
                fontSize: '16px',
                fontFamily: "'Host Grotesk', sans-serif",
                lineHeight: 1.6,
                letterSpacing: '-0.01em',
              }}>
                You already knew discipline mattered. Now you have the exact dollar amount to prove it to yourself. Every session. Every strategy. No more guessing.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Per-strategy breakdown', desc: 'See which strategies suffer most from your deviations' },
                { label: 'Historical trending', desc: 'Is your discipline improving or degrading over time?' },
                { label: 'Deviation categories', desc: 'Early exit, moved stop, FOMO, revenge — what\'s costing you most?' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    marginTop: '7px',
                    flexShrink: 0,
                  }}/>
                  <div>
                    <div style={{
                      color: 'var(--contrast-1)',
                      fontSize: '15px',
                      fontFamily: "'Host Grotesk', sans-serif",
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                      marginBottom: '2px',
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      color: 'var(--contrast-muted)',
                      fontSize: '14px',
                      fontFamily: "'Host Grotesk', sans-serif",
                      lineHeight: 1.5,
                    }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatRow({ label, value, color, valueSize = '24px', subtext, bold }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div style={{
        color: 'var(--contrast-muted)',
        fontSize: '12px',
        fontFamily: "'Host Grotesk', sans-serif",
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
      }}>
        {label}
      </div>
      <div style={{
        color,
        fontSize: valueSize,
        fontFamily: "'Host Grotesk', sans-serif",
        fontWeight: bold ? 700 : 600,
        letterSpacing: '-0.04em',
        lineHeight: 1,
      }}>
        {value}
      </div>
      {subtext && (
        <div style={{
          color: 'var(--contrast-muted)',
          fontSize: '12px',
          fontFamily: "'Host Grotesk', sans-serif",
        }}>
          {subtext}
        </div>
      )}
    </div>
  )
}
