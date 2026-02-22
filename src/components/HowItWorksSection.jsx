const steps = [
  {
    number: '01',
    title: 'Connect',
    subtitle: 'Link your broker or upload your trades.',
    body: 'One-click broker sync or CSV upload. Auto-import handles the rest. Your trade history is imported in under 2 minutes. Supports 50+ brokers and prop firms.',
    color: '#60a5fa',
  },
  {
    number: '02',
    title: 'Tag',
    subtitle: 'Assign strategies. Mark adherence.',
    body: 'Batch-tag multiple trades at once. Smart suggestions pre-fill strategies based on your patterns. Post-trade audit takes 30 seconds per session.',
    color: '#ff8d3b',
  },
  {
    number: '03',
    title: 'Learn',
    subtitle: 'Open your dashboard. See the truth.',
    body: 'Which strategies generate alpha. Where you break your rules. What it costs you in exact dollars. Data that makes your next session better than the last.',
    color: '#4ade80',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-surface-alt py-16 md:py-30 px-3">
      <div className="max-w-container mx-auto">
        <div className="mb-10 md:mb-18 text-center">
          <span className="inline-block text-accent text-[13px] font-medium tracking-widest uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-content text-section font-normal">
            Three steps. That's it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-line rounded-2.5xl overflow-hidden">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-surface py-8 px-6 md:py-12 md:px-9 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold tracking-wide shrink-0"
                  style={{ border: `1.5px solid ${step.color}`, color: step.color }}
                >
                  {step.number}
                </span>
                {/* Connector line — only visible on desktop, only on first two steps */}
                <div
                  className="hidden md:block flex-1 h-px"
                  style={{ background: i < 2 ? 'var(--border)' : 'transparent' }}
                />
              </div>

              <h3
                className="text-[28px] md:text-[32px] font-bold tracking-tightest leading-none"
                style={{ color: step.color }}
              >
                {step.title}
              </h3>

              <p className="text-content text-[16px] md:text-[17px] font-medium leading-[1.3] tracking-tight">
                {step.subtitle}
              </p>

              <p className="text-content-muted text-sm leading-relaxed tracking-snug">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-content-muted text-sm tracking-snug">
          No credit card required. Import your first trades in under 2 minutes.
        </p>
      </div>
    </section>
  )
}
