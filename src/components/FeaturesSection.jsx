import { useState } from 'react'

const tabs = [
  {
    id: 'strategy',
    label: 'Strategy Engine',
    headline: 'The brain of the platform.',
    body: 'Build and version your strategies with structured entry/exit criteria, stop rules, and position sizing. Every trade links to a strategy. Every deviation gets categorized.',
    details: [
      'Strategy Builder with versioning (V1, V2...)',
      'Pre-trade declaration — commit before outcome is known',
      'Deviation categories: early exit, FOMO entry, moved stop, revenge trade, oversized position',
      'Conditional rules: "Only valid when VIX > 20"',
      'Strategy performance dashboard with adherence rate',
    ],
    visual: 'strategy',
  },
  {
    id: 'analytics',
    label: 'Performance Analytics',
    headline: 'Data that doesn\'t lie.',
    body: 'Every metric you need. None you don\'t. Equity curves per strategy, performance by time of day, R-multiples, Sharpe/Sortino, and everything sliceable by 20+ dimensions.',
    details: [
      'Equity curve with drawdown overlay, per strategy',
      'Performance by time of day, day of week, session',
      'R-multiple (expectancy) by strategy',
      'YoY / MoM period comparisons',
      'Advanced filter: combine any 5 dimensions',
    ],
    visual: 'analytics',
  },
  {
    id: 'behavioral',
    label: 'Behavioral Intelligence',
    headline: 'The mirror you didn\'t want.',
    body: 'Your discipline score, tracked over time. Overtrading detection. Tilt alerts before you blow up the account. Emotional pattern recognition that turns gut-feel into data.',
    details: [
      'Discipline Score: composite of adherence, stop discipline, sizing consistency',
      'Overtrading detection — flag sessions above your historical average',
      'Tilt alert: "You\'ve taken 5 trades in 12 min after a $500 loss. Historical PnL in this pattern: –$2,340."',
      'Optional emotional tagging: calm, frustrated, euphoric, revenge',
      'Consecutive wins/losses streak tracking',
    ],
    visual: 'behavioral',
  },
  {
    id: 'import',
    label: 'Import & Compatibility',
    headline: '50+ brokers. Zero friction.',
    body: 'Auto-import from every major broker and platform. CSV smart mapping. Prop firm support. Crypto exchanges. If you trade on it, we connect to it.',
    details: [
      'Interactive Brokers, TD Ameritrade/Schwab, Webull, Robinhood',
      'DAS Trader, Lightspeed, TradeStation, CenterPoint',
      'MetaTrader 4/5, NinjaTrader, TradingView, cTrader',
      'Prop firm reports: TopStep, Apex, FTMO',
      'Crypto: Binance, Bybit, Coinbase, KuCoin',
    ],
    visual: 'import',
  },
]

const visualComponents = {
  strategy: StrategyVisual,
  analytics: AnalyticsVisual,
  behavioral: BehavioralVisual,
  import: ImportVisual,
}

export default function FeaturesSection() {
  const [active, setActive] = useState('strategy')
  const current = tabs.find(t => t.id === active)
  const VisualComponent = visualComponents[current.visual]

  return (
    <section id="features" className="bg-surface py-16 md:py-30 px-3 border-t border-b border-line">
      <div className="max-w-container mx-auto">
        <div className="mb-10 md:mb-14">
          <span className="inline-block text-accent text-[13px] font-medium tracking-widest uppercase mb-4">
            Features
          </span>
          <h2 className="text-content text-section font-normal">
            Everything a serious trader needs.
            <br />
            <span className="text-content-muted">Nothing they don't.</span>
          </h2>
        </div>

        {/* Tab bar — 2×2 grid on mobile, horizontal on desktop */}
        <div className="mb-8 md:mb-10 bg-surface-alt p-1 rounded-[14px]">
          <div className="grid grid-cols-2 md:flex gap-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`py-2.5 px-3 md:px-[18px] rounded-[10px] border-none cursor-pointer text-sm tracking-snug transition-all duration-150 text-center ${
                  active === tab.id
                    ? 'font-semibold bg-surface text-content shadow-card'
                    : 'font-normal bg-transparent text-content-muted'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] items-start">
          <div>
            <h3 className="text-content text-[22px] md:text-[28px] font-semibold leading-[1.15] tracking-tighter mb-3.5">
              {current.headline}
            </h3>
            <p className="text-content-muted text-[15px] leading-relaxed tracking-snug mb-7">
              {current.body}
            </p>
            <ul className="list-none flex flex-col gap-3">
              {current.details.map(d => (
                <li key={d} className="flex items-start gap-2.5">
                  <span className="text-accent text-base leading-none mt-px shrink-0">→</span>
                  <span className="text-content-secondary text-sm leading-normal tracking-snug">
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface-alt border border-line rounded-2xl min-h-[300px] md:min-h-[360px] overflow-hidden flex items-stretch">
            <VisualComponent />
          </div>
        </div>
      </div>
    </section>
  )
}

function StrategyVisual() {
  return (
    <div className="p-4 md:p-6 w-full">
      <div className="text-content-muted text-[11px] font-semibold tracking-widest uppercase mb-4">
        Strategy Builder — Breakout v2
      </div>
      <div className="flex flex-col gap-2">
        {[
          { field: 'Entry Criteria', value: 'First 5-min candle break + volume > 2x avg', color: 'var(--contrast-2)' },
          { field: 'Stop Loss', value: 'Below HOD of prior day', color: 'var(--contrast-2)' },
          { field: 'Position Size', value: '1% account risk per trade', color: 'var(--contrast-2)' },
          { field: 'Timeframe', value: '1m / 5m', color: 'var(--contrast-2)' },
          { field: 'Valid When', value: 'VIX > 18, Volume > 1M', color: '#ff8d3b' },
          { field: 'Status', value: 'Active', color: '#4ade80' },
        ].map(row => (
          <div key={row.field} className="flex justify-between items-center py-2.5 px-3.5 bg-surface rounded-lg border border-line gap-3">
            <span className="text-content-muted text-xs tracking-wide shrink-0">
              {row.field}
            </span>
            <span className="text-xs font-medium text-right" style={{ color: row.color }}>
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnalyticsVisual() {
  const bars = [
    { label: 'Mon', h: 60, pnl: '+$820' },
    { label: 'Tue', h: 80, pnl: '+$1.2k' },
    { label: 'Wed', h: 25, pnl: '+$340' },
    { label: 'Thu', h: 90, pnl: '+$1.8k' },
    { label: 'Fri', h: 45, pnl: '+$620' },
  ]
  return (
    <div className="p-4 md:p-6 w-full flex flex-col gap-4">
      <div className="text-content-muted text-[11px] font-semibold tracking-widest uppercase">
        PnL by Day of Week
      </div>
      <div className="flex gap-2.5 items-end flex-1 pb-2">
        {bars.map(b => (
          <div key={b.label} className="flex-1 flex flex-col items-center gap-1.5">
            <span className="text-green-400 text-[11px] font-semibold">
              {b.pnl}
            </span>
            <div
              className="w-full rounded-t-md bg-gradient-to-b from-green-400 to-green-400/40"
              style={{ height: `${b.h * 1.4}px` }}
            />
            <span className="text-content-muted text-xs">
              {b.label}
            </span>
          </div>
        ))}
      </div>
      <div className="py-3 px-3.5 bg-surface rounded-lg border border-line text-accent text-[13px] font-medium">
        Best performance: Thursday 9:30–10:30 AM
      </div>
    </div>
  )
}

function BehavioralVisual() {
  return (
    <div className="p-4 md:p-6 w-full flex flex-col gap-3.5">
      <div className="p-4 bg-surface rounded-xl border border-line">
        <div className="text-content-muted text-[11px] tracking-wider uppercase mb-2">
          Discipline Score
        </div>
        <div className="flex items-center gap-3.5">
          <div className="text-accent text-[40px] font-extrabold tracking-tightest leading-none">
            74
          </div>
          <div className="flex-1">
            <div className="h-1.5 bg-surface-alt rounded-sm overflow-hidden mb-1.5">
              <div className="w-[74%] h-full bg-gradient-to-r from-accent to-amber-400 rounded-sm" />
            </div>
            <div className="text-content-muted text-[11px]">
              +6 pts from last week
            </div>
          </div>
        </div>
      </div>

      <div className="p-3.5 bg-red-400/[0.07] rounded-xl border border-red-400/20">
        <div className="text-red-400 text-xs font-semibold tracking-wide mb-1.5">
          ⚠ TILT ALERT
        </div>
        <div className="text-content-secondary text-[13px] leading-[1.4]">
          5 trades in 12 min after a –$420 loss. Historical PnL in this pattern: <span className="text-red-400 font-semibold">–$2,340</span>
        </div>
      </div>

      <div className="p-3.5 bg-surface rounded-xl border border-line">
        <div className="text-content-muted text-[11px] tracking-wider uppercase mb-2">
          Today's trade count
        </div>
        <div className="flex gap-1 items-end">
          {[12, 15, 18, 22, 19, 31, 28].map((v, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-sm ${v === 31 ? 'bg-red-400' : 'bg-surface-elevated'}`}
              style={{ height: `${v * 2.5}px` }}
            />
          ))}
        </div>
        <div className="text-red-400 text-xs font-medium mt-1.5">
          Today: 31 trades (avg 19) — overtrading flag
        </div>
      </div>
    </div>
  )
}

function ImportVisual() {
  const brokers = [
    'Interactive Brokers', 'TD Ameritrade', 'DAS Trader', 'TradeStation',
    'Lightspeed', 'Webull', 'Robinhood', 'CenterPoint',
    'MetaTrader 5', 'NinjaTrader', 'TradingView', 'Binance',
  ]
  return (
    <div className="p-4 md:p-6 w-full">
      <div className="text-content-muted text-[11px] font-semibold tracking-widest uppercase mb-4">
        50+ Connected Platforms
      </div>
      <div className="grid grid-cols-3 gap-2">
        {brokers.map(b => (
          <div key={b} className="p-2.5 bg-surface border border-line rounded-lg text-content-secondary text-[11px] font-medium text-center leading-[1.3]">
            {b}
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 bg-surface border border-accent-border rounded-lg text-accent text-[13px] font-medium text-center">
        + CSV smart mapping for any broker
      </div>
    </div>
  )
}
