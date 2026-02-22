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
    visual: <StrategyVisual />,
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
    visual: <AnalyticsVisual />,
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
    visual: <BehavioralVisual />,
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
    visual: <ImportVisual />,
  },
]

export default function FeaturesSection() {
  const [active, setActive] = useState('strategy')
  const current = tabs.find(t => t.id === active)

  return (
    <section
      id="features"
      style={{
        background: 'var(--bg-1)',
        padding: '120px 12px',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
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
            Features
          </span>
          <h2 style={{
            color: 'var(--contrast-1)',
            fontSize: 'clamp(32px, 3.5vw, 48px)',
            fontFamily: "'Host Grotesk', sans-serif",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
          }}>
            Everything a serious trader needs.
            <br />
            <span style={{ color: 'var(--contrast-muted)' }}>Nothing they don't.</span>
          </h2>
        </div>

        {/* Tab bar */}
        <div style={{
          display: 'flex',
          gap: '4px',
          marginBottom: '40px',
          background: 'var(--bg-2)',
          padding: '4px',
          borderRadius: '14px',
          width: 'fit-content',
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              style={{
                padding: '10px 18px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: "'Host Grotesk', sans-serif",
                fontSize: '14px',
                fontWeight: active === tab.id ? 600 : 400,
                letterSpacing: '-0.01em',
                background: active === tab.id ? 'var(--bg-1)' : 'transparent',
                color: active === tab.id ? 'var(--contrast-1)' : 'var(--contrast-muted)',
                boxShadow: active === tab.id ? 'var(--shadow-card)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start',
        }}>
          {/* Left: description */}
          <div>
            <h3 style={{
              color: 'var(--contrast-1)',
              fontSize: '28px',
              fontFamily: "'Host Grotesk', sans-serif",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '14px',
            }}>
              {current.headline}
            </h3>
            <p style={{
              color: 'var(--contrast-muted)',
              fontSize: '15px',
              fontFamily: "'Host Grotesk', sans-serif",
              lineHeight: 1.6,
              letterSpacing: '-0.01em',
              marginBottom: '28px',
            }}>
              {current.body}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {current.details.map(d => (
                <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{
                    color: 'var(--accent)',
                    fontSize: '16px',
                    lineHeight: 1,
                    marginTop: '1px',
                    flexShrink: 0,
                  }}>→</span>
                  <span style={{
                    color: 'var(--contrast-2)',
                    fontSize: '14px',
                    fontFamily: "'Host Grotesk', sans-serif",
                    lineHeight: 1.5,
                    letterSpacing: '-0.01em',
                  }}>
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: visual */}
          <div style={{
            background: 'var(--bg-2)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            minHeight: '360px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'stretch',
          }}>
            {current.visual}
          </div>
        </div>
      </div>
    </section>
  )
}

function StrategyVisual() {
  return (
    <div style={{ padding: '24px', width: '100%' }}>
      <div style={{
        color: 'var(--contrast-muted)',
        fontSize: '11px',
        fontFamily: "'Host Grotesk', sans-serif",
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        marginBottom: '16px',
      }}>
        Strategy Builder — Breakout v2
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {[
          { field: 'Entry Criteria', value: 'First 5-min candle break + volume > 2x avg', color: 'var(--contrast-2)' },
          { field: 'Stop Loss', value: 'Below HOD of prior day', color: 'var(--contrast-2)' },
          { field: 'Position Size', value: '1% account risk per trade', color: 'var(--contrast-2)' },
          { field: 'Timeframe', value: '1m / 5m', color: 'var(--contrast-2)' },
          { field: 'Valid When', value: 'VIX > 18, Volume > 1M', color: '#ff8d3b' },
          { field: 'Status', value: 'Active', color: '#4ade80' },
        ].map(row => (
          <div key={row.field} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 14px',
            background: 'var(--bg-1)',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            gap: '12px',
          }}>
            <span style={{
              color: 'var(--contrast-muted)',
              fontSize: '12px',
              fontFamily: "'Host Grotesk', sans-serif",
              letterSpacing: '0.02em',
              flexShrink: 0,
            }}>
              {row.field}
            </span>
            <span style={{
              color: row.color,
              fontSize: '12px',
              fontFamily: "'Host Grotesk', sans-serif",
              fontWeight: 500,
              textAlign: 'right',
            }}>
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
    <div style={{ padding: '24px', width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{
        color: 'var(--contrast-muted)',
        fontSize: '11px',
        fontFamily: "'Host Grotesk', sans-serif",
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
      }}>
        PnL by Day of Week
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', flex: 1, paddingBottom: '8px' }}>
        {bars.map(b => (
          <div key={b.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: '#4ade80', fontSize: '11px', fontFamily: "'Host Grotesk', sans-serif", fontWeight: 600 }}>
              {b.pnl}
            </span>
            <div style={{
              width: '100%',
              height: `${b.h * 1.4}px`,
              background: 'linear-gradient(180deg, #4ade80 0%, rgba(74, 222, 128, 0.4) 100%)',
              borderRadius: '6px 6px 0 0',
            }}/>
            <span style={{ color: 'var(--contrast-muted)', fontSize: '12px', fontFamily: "'Host Grotesk', sans-serif" }}>
              {b.label}
            </span>
          </div>
        ))}
      </div>
      <div style={{
        padding: '12px 14px',
        background: 'var(--bg-1)',
        borderRadius: '8px',
        border: '1px solid var(--border)',
        color: 'var(--accent)',
        fontSize: '13px',
        fontFamily: "'Host Grotesk', sans-serif",
        fontWeight: 500,
      }}>
        Best performance: Thursday 9:30–10:30 AM
      </div>
    </div>
  )
}

function BehavioralVisual() {
  return (
    <div style={{ padding: '24px', width: '100%', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Discipline Score */}
      <div style={{
        padding: '16px',
        background: 'var(--bg-1)',
        borderRadius: '12px',
        border: '1px solid var(--border)',
      }}>
        <div style={{ color: 'var(--contrast-muted)', fontSize: '11px', fontFamily: "'Host Grotesk', sans-serif", letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
          Discipline Score
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ color: '#ff8d3b', fontSize: '40px', fontFamily: "'Host Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}>
            74
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ height: '6px', background: 'var(--bg-2)', borderRadius: '3px', overflow: 'hidden', marginBottom: '6px' }}>
              <div style={{ width: '74%', height: '100%', background: 'linear-gradient(90deg, #ff8d3b, #fbbf24)', borderRadius: '3px' }}/>
            </div>
            <div style={{ color: 'var(--contrast-muted)', fontSize: '11px', fontFamily: "'Host Grotesk', sans-serif" }}>
              +6 pts from last week
            </div>
          </div>
        </div>
      </div>

      {/* Tilt alert */}
      <div style={{
        padding: '14px',
        background: 'rgba(248, 113, 113, 0.07)',
        borderRadius: '12px',
        border: '1px solid rgba(248, 113, 113, 0.2)',
      }}>
        <div style={{ color: '#f87171', fontSize: '12px', fontFamily: "'Host Grotesk', sans-serif", fontWeight: 600, letterSpacing: '0.03em', marginBottom: '6px' }}>
          ⚠ TILT ALERT
        </div>
        <div style={{ color: 'var(--contrast-2)', fontSize: '13px', fontFamily: "'Host Grotesk', sans-serif", lineHeight: 1.4 }}>
          5 trades in 12 min after a –$420 loss. Historical PnL in this pattern: <span style={{ color: '#f87171', fontWeight: 600 }}>–$2,340</span>
        </div>
      </div>

      {/* Overtrading */}
      <div style={{
        padding: '14px',
        background: 'var(--bg-1)',
        borderRadius: '12px',
        border: '1px solid var(--border)',
      }}>
        <div style={{ color: 'var(--contrast-muted)', fontSize: '11px', fontFamily: "'Host Grotesk', sans-serif", letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
          Today's trade count
        </div>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end' }}>
          {[12, 15, 18, 22, 19, 31, 28].map((v, i) => (
            <div key={i} style={{
              flex: 1,
              height: `${v * 2.5}px`,
              background: v === 31 ? '#f87171' : 'var(--bg-3)',
              borderRadius: '3px 3px 0 0',
            }}/>
          ))}
        </div>
        <div style={{ color: '#f87171', fontSize: '12px', fontFamily: "'Host Grotesk', sans-serif", marginTop: '6px', fontWeight: 500 }}>
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
    <div style={{ padding: '24px', width: '100%' }}>
      <div style={{
        color: 'var(--contrast-muted)',
        fontSize: '11px',
        fontFamily: "'Host Grotesk', sans-serif",
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        marginBottom: '16px',
      }}>
        50+ Connected Platforms
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
        {brokers.map(b => (
          <div key={b} style={{
            padding: '10px',
            background: 'var(--bg-1)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            color: 'var(--contrast-2)',
            fontSize: '11px',
            fontFamily: "'Host Grotesk', sans-serif",
            fontWeight: 500,
            textAlign: 'center',
            lineHeight: 1.3,
          }}>
            {b}
          </div>
        ))}
      </div>
      <div style={{
        marginTop: '12px',
        padding: '12px',
        background: 'var(--bg-1)',
        border: '1px solid var(--accent-border)',
        borderRadius: '8px',
        color: 'var(--accent)',
        fontSize: '13px',
        fontFamily: "'Host Grotesk', sans-serif",
        fontWeight: 500,
        textAlign: 'center',
      }}>
        + CSV smart mapping for any broker
      </div>
    </div>
  )
}
