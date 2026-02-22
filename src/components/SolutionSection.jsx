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
    <section id="platform" className="bg-surface py-30 px-3 border-t border-b border-line">
      <div className="max-w-container mx-auto">
        <div className="mb-18 max-w-[600px]">
          <span className="inline-block text-accent text-[13px] font-medium tracking-widest uppercase mb-4">
            The Solution
          </span>
          <h2 className="text-content text-section font-normal mb-4">
            Strategy-first journaling for traders who{' '}
            <em className="italic text-accent">take this seriously.</em>
          </h2>
          <p className="text-content-muted text-base leading-relaxed tracking-snug">
            Singularity is not another trade log. It's a strategy accountability system with institutional-grade analytics designed for traders who execute at volume.
          </p>
        </div>

        <div className="flex flex-col gap-0.5">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="grid grid-cols-2 gap-20 py-14 border-t border-line items-start"
            >
              <div style={{ order: i % 2 !== 0 ? 1 : 0 }}>
                <span className="inline-block text-accent text-[13px] font-medium tracking-widest uppercase mb-3">
                  {pillar.step}
                </span>
                <h3 className="text-content text-[28px] font-semibold leading-[1.15] tracking-tight mb-4">
                  {pillar.title}
                </h3>
                <p className="text-content-muted text-[15px] leading-relaxed tracking-snug mb-6">
                  {pillar.body}
                </p>
                <ul className="list-none flex flex-col gap-2.5">
                  {pillar.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="shrink-0 mt-px"><CheckIcon /></span>
                      <span className="text-content-secondary text-sm leading-normal tracking-snug">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="bg-surface-alt border border-line rounded-2xl h-[280px] flex items-center justify-center overflow-hidden relative"
                style={{ order: i % 2 !== 0 ? 0 : 1 }}
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
    return (
      <div className="p-6 w-full">
        {[
          { phase: 'DECLARE', color: '#60a5fa', text: 'Breakout Strategy — NVDA 9:35 AM' },
          { phase: 'EXECUTE', color: '#4ade80', text: 'Entry $487.20 → Exit $493.50 (+$630)' },
          { phase: 'AUDIT', color: '#ff8d3b', text: 'Adherence: Yes ✓' },
        ].map((step, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-surface rounded-[10px] mb-2 border border-line">
            <span
              className="text-[10px] font-bold tracking-widest whitespace-nowrap min-w-[58px]"
              style={{ color: step.color }}
            >
              {step.phase}
            </span>
            <span className="text-content-secondary text-[13px]">
              {step.text}
            </span>
          </div>
        ))}
      </div>
    )
  }

  if (index === 1) {
    return (
      <div className="p-5 w-full">
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { k: 'Expectancy', v: '2.1R', c: '#4ade80' },
            { k: 'Profit Factor', v: '1.74', c: '#60a5fa' },
            { k: 'Best Hour', v: '9:30 AM', c: '#ff8d3b' },
            { k: 'Sharpe Ratio', v: '1.32', c: '#a78bfa' },
          ].map(s => (
            <div key={s.k} className="p-3.5 bg-surface rounded-[10px] border border-line">
              <div className="text-content-muted text-[11px] mb-1.5 tracking-wide">
                {s.k.toUpperCase()}
              </div>
              <div className="text-[22px] font-bold tracking-tighter" style={{ color: s.c }}>
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 w-full text-center">
      <div className="grid grid-cols-3 gap-2.5">
        {['Interactive Brokers', 'DAS Trader', 'Lightspeed', 'Binance', 'MetaTrader', 'TradingView', 'NinjaTrader', 'Webull', 'TopStep'].map(name => (
          <div key={name} className="py-2.5 px-2 bg-surface rounded-lg border border-line text-content-secondary text-[10px] font-medium tracking-snug leading-[1.3] text-center">
            {name}
          </div>
        ))}
      </div>
      <p className="text-content-muted text-xs mt-3">
        + 40 more brokers and platforms
      </p>
    </div>
  )
}
