const problems = [
  {
    number: '01',
    title: 'You have a strategy. You just don\'t follow it.',
    body: 'Most traders have a plan. The journal in your head says you stuck to it. The data says otherwise. Singularity makes the gap visible — in dollars, not feelings.',
  },
  {
    number: '02',
    title: 'Your journal doesn\'t scale.',
    body: 'At 50+ trades a day, spreadsheets break, manual notes disappear, and you\'re left with a PnL number and no idea what drove it. You need a system that handles volume without adding work.',
  },
  {
    number: '03',
    title: 'Win rate is a vanity metric.',
    body: 'A 60% win rate means nothing if you\'re giving it all back on the 40%. What matters is expectancy by strategy, discipline over time, and the actual dollar cost of your deviations.',
  },
]

export default function ProblemSection() {
  return (
    <section
      id="problem"
      style={{
        background: 'var(--bg-2)',
        padding: '120px 12px',
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: '72px', maxWidth: '680px' }}>
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
            The Problem
          </span>
          <h2 style={{
            color: 'var(--contrast-1)',
            fontSize: 'clamp(32px, 3.5vw, 48px)',
            fontFamily: "'Host Grotesk', sans-serif",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
          }}>
            You already know what to do.{' '}
            <span style={{ color: 'var(--contrast-muted)' }}>The problem is you don't do it.</span>
          </h2>
        </div>

        {/* Problem cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}>
          {problems.map(p => (
            <div
              key={p.number}
              style={{
                background: 'var(--bg-1)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent-border)'
                e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span style={{
                color: 'var(--accent)',
                fontSize: '13px',
                fontFamily: "'Host Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.05em',
              }}>
                {p.number}
              </span>
              <h3 style={{
                color: 'var(--contrast-1)',
                fontSize: '20px',
                fontFamily: "'Host Grotesk', sans-serif",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}>
                {p.title}
              </h3>
              <p style={{
                color: 'var(--contrast-muted)',
                fontSize: '15px',
                fontFamily: "'Host Grotesk', sans-serif",
                fontWeight: 400,
                lineHeight: 1.6,
                letterSpacing: '-0.01em',
              }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
