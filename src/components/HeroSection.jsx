import heroImage from '../assets/hero-background.png'

const ArrowDownRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3L13 13M13 13V6M13 13H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SparkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1.5L9.3 6.7L14.5 8L9.3 9.3L8 14.5L6.7 9.3L1.5 8L6.7 6.7L8 1.5Z" fill="#ff8d3b"/>
    <path d="M13 2L13.6 4.4L16 5L13.6 5.6L13 8L12.4 5.6L10 5L12.4 4.4L13 2Z" fill="#ff8d3b" opacity="0.6"/>
  </svg>
)

const EquityCurve = () => (
  <svg width="100%" height="100%" viewBox="0 0 800 320" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    {[0, 1, 2, 3, 4].map(i => (
      <line key={i} x1="60" y1={60 + i * 50} x2="780" y2={60 + i * 50}
        stroke="rgba(255,252,245,0.06)" strokeWidth="1"/>
    ))}
    {['+$12k', '+$9k', '+$6k', '+$3k', '$0'].map((label, i) => (
      <text key={i} x="52" y={64 + i * 50} fill="rgba(255,252,245,0.35)"
        fontSize="10" textAnchor="end" fontFamily="Host Grotesk, sans-serif">{label}</text>
    ))}
    <path
      d="M60 240 C100 230 140 220 180 210 C220 198 260 185 300 165 C340 142 380 115 420 95 C460 78 500 72 540 68 C580 64 620 62 660 60 C700 58 740 57 780 56"
      fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"/>
    <path
      d="M60 240 C100 230 140 220 180 210 C220 198 260 185 300 165 C340 142 380 115 420 95 C460 78 500 72 540 68 C580 64 620 62 660 60 C700 58 740 57 780 56 L780 270 L60 270 Z"
      fill="rgba(74, 222, 128, 0.06)"/>
    <path
      d="M60 240 C100 242 140 248 180 255 C220 262 260 270 300 278 C340 286 380 288 420 290 C460 292 500 294 540 295 C580 296 620 297 660 297 C700 297 740 298 780 298"
      fill="none" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 3"/>
    <circle cx="80" cy="295" r="5" fill="#4ade80"/>
    <text x="90" y="299" fill="rgba(255,252,245,0.6)" fontSize="11" fontFamily="Host Grotesk, sans-serif">Strategy adherent trades</text>
    <circle cx="270" cy="295" r="5" fill="#f87171"/>
    <text x="280" y="299" fill="rgba(255,252,245,0.6)" fontSize="11" fontFamily="Host Grotesk, sans-serif">Deviation trades</text>
    <line x1="660" y1="60" x2="660" y2="297" stroke="rgba(255,141,59,0.4)" strokeWidth="1" strokeDasharray="4 2"/>
    <text x="665" y="180" fill="#ff8d3b" fontSize="11" fontFamily="Host Grotesk, sans-serif" fontWeight="600">–$11,800</text>
    <text x="665" y="193" fill="rgba(255,141,59,0.7)" fontSize="9" fontFamily="Host Grotesk, sans-serif">gap</text>
  </svg>
)

const DashboardPreview = () => (
  <div className="relative w-full h-full flex flex-col gap-2.5 md:gap-3 p-3 md:p-6">
    <div className="flex items-center justify-between mb-0.5 md:mb-1">
      <span className="text-[rgba(255,252,245,0.5)] text-[10px] md:text-xs tracking-[-0.2px]">
        PERFORMANCE DASHBOARD
      </span>
      <span className="text-[rgba(255,252,245,0.3)] text-[9px] md:text-[11px]">
        Feb 2026
      </span>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
      {[
        { label: 'Total PnL', value: '+$9,140', color: '#4ade80' },
        { label: 'Adherence Rate', value: '68%', color: '#ff8d3b' },
        { label: 'Deviation Cost', value: '–$4,860', color: '#f87171' },
        { label: 'Discipline Score', value: '74', color: '#60a5fa' },
      ].map(stat => (
        <div key={stat.label} className="bg-[rgba(255,252,245,0.04)] border border-[rgba(255,252,245,0.07)] rounded-[10px] p-2.5 md:p-3">
          <div className="text-[rgba(255,252,245,0.45)] text-[9px] md:text-[10px] mb-1 md:mb-1.5 tracking-[0.2px]">
            {stat.label.toUpperCase()}
          </div>
          <div className="text-base md:text-lg font-bold tracking-[-0.5px]" style={{ color: stat.color }}>
            {stat.value}
          </div>
        </div>
      ))}
    </div>

    <div className="flex-1 bg-[rgba(255,252,245,0.02)] border border-[rgba(255,252,245,0.07)] rounded-[10px] overflow-hidden min-h-[140px] md:min-h-[200px]">
      <EquityCurve />
    </div>

    <div className="hidden md:block bg-[rgba(255,252,245,0.02)] border border-[rgba(255,252,245,0.07)] rounded-[10px] p-3">
      <div className="grid grid-cols-5 gap-2 text-[rgba(255,252,245,0.35)] text-[10px] mb-2 tracking-[0.3px]">
        <span>STRATEGY</span><span>WIN RATE</span><span>AVG R</span><span>ADHERENCE</span><span>DEV COST</span>
      </div>
      {[
        ['Breakout', '61%', '1.8R', '72%', '–$820'],
        ['Momentum', '54%', '2.1R', '58%', '–$2,140'],
        ['Mean-Rev', '71%', '1.3R', '81%', '–$340'],
      ].map(([strat, wr, r, adh, dev]) => (
        <div key={strat} className="grid grid-cols-5 gap-2 py-1 text-[rgba(255,252,245,0.7)] text-[11px] border-t border-[rgba(255,252,245,0.04)]">
          <span className="text-white font-medium">{strat}</span>
          <span>{wr}</span>
          <span className="text-green-400">{r}</span>
          <span className="text-[#ff8d3b]">{adh}</span>
          <span className="text-red-400">{dev}</span>
        </div>
      ))}
    </div>
  </div>
)

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat -scale-x-100"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 via-50% to-[rgba(10,9,7,0.85)] to-80%" />

      <div className="relative z-[1] flex flex-col items-center pt-[120px] md:pt-[220px] pb-12 md:pb-16 px-3 gap-10 md:gap-18">
        <div className="flex flex-col items-center gap-5 md:gap-6 max-w-container w-full">
          <div className="flex items-center gap-1.5 py-2 px-3 rounded-xl border border-accent-border backdrop-blur-[2px] bg-[linear-gradient(90deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(rgba(226,255,248,0.12),rgba(255,141,59,0.24))] shadow-nav">
            <SparkIcon />
            <span className="text-accent text-sm md:text-base tracking-[-0.32px]">
              BY QUANTUM EDGE
            </span>
          </div>

          <h1 className="text-[#fffcf5] text-hero font-normal text-center max-w-[900px] [text-shadow:0_2px_20px_rgba(0,0,0,0.6)]">
            Your strategies have a cost{' '}
            <em className="italic font-semibold text-accent">
              when you break them.
            </em>
          </h1>

          <p className="text-[#fffcf5] opacity-80 text-sm md:text-base text-center tracking-[-0.32px] max-w-[460px] [text-shadow:0_1px_12px_rgba(0,0,0,0.7)]">
            The trading journal built for high-frequency technical traders who want to know which strategies actually work — and what happens when they don't follow them.
          </p>

          <div className="flex overflow-hidden rounded-xl bg-accent drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] cursor-pointer">
            <div className="flex items-center justify-center px-4 py-3 rounded-xl bg-[#110000]">
              <span className="text-[#fffcf5] text-base font-medium tracking-[-0.32px] whitespace-nowrap">
                Get Started
              </span>
            </div>
            <div className="flex items-center justify-center w-10 text-[#fffcf5]">
              <ArrowDownRight />
            </div>
          </div>
        </div>

        <div className="w-full max-w-container h-[300px] sm:h-[400px] md:h-[560px] rounded-2.5xl overflow-hidden border border-[rgba(255,252,245,0.1)] bg-[rgba(10,9,7,0.7)] backdrop-blur-[20px] shadow-[0_32px_120px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,252,245,0.06)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_100%)]">
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
