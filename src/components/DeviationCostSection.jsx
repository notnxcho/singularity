export default function DeviationCostSection() {
  return (
    <section id="deviation-cost" className="bg-surface-alt py-16 md:py-30 px-3">
      <div className="max-w-container mx-auto">
        <div className="mb-10 md:mb-18 text-center">
          <span className="inline-block text-accent text-[13px] font-medium tracking-widest uppercase mb-4">
            The Killer Metric
          </span>
          <h2 className="text-content text-section font-normal mb-4">
            The metric no other journal gives you.
          </h2>
          <p className="text-content-muted text-base leading-relaxed tracking-snug max-w-[560px] mx-auto">
            For every trade where you broke your own rules, Singularity calculates what would have happened if you hadn't. The difference is your Deviation Cost — the most honest number in your portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="bg-surface border border-line rounded-2.5xl overflow-hidden">
            <div className="py-5 px-6 md:px-7 border-b border-line flex items-center justify-between">
              <span className="text-content text-sm font-semibold tracking-snug">
                Deviation Cost™
              </span>
              <span className="text-content-muted text-xs">
                February 2026
              </span>
            </div>

            <div className="p-6 md:p-7 flex flex-col gap-5">
              <StatRow
                label="Your PnL this month"
                value="+$4,280"
                color="var(--contrast-1)"
                valueSize="28px"
              />
              <div className="border-t border-line pt-5">
                <StatRow
                  label="PnL on strategy-adherent trades"
                  value="+$9,140"
                  color="#4ade80"
                  valueSize="28px"
                  subtext="68% of your trades"
                />
              </div>
              <div className="border-t border-line pt-5">
                <StatRow
                  label="Deviation Cost"
                  value="–$4,860"
                  color="#f87171"
                  valueSize="32px"
                  bold
                />
              </div>

              <div className="bg-red-400/[0.08] border border-red-400/20 rounded-[10px] py-3.5 px-4">
                <p className="text-red-400 text-sm font-medium leading-[1.4] tracking-snug">
                  Your deviations cost you more than you made this month.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7 md:gap-8">
            <div>
              <h3 className="text-content text-[26px] md:text-[32px] font-semibold leading-[1.15] tracking-tighter mb-4">
                <span className="text-accent">Deviation Cost™</span>
                <br />
                is the number<br />that changes everything.
              </h3>
              <p className="text-content-muted text-base leading-relaxed tracking-snug">
                You already knew discipline mattered. Now you have the exact dollar amount to prove it to yourself. Every session. Every strategy. No more guessing.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { label: 'Per-strategy breakdown', desc: 'See which strategies suffer most from your deviations' },
                { label: 'Historical trending', desc: 'Is your discipline improving or degrading over time?' },
                { label: 'Deviation categories', desc: 'Early exit, moved stop, FOMO, revenge — what\'s costing you most?' },
              ].map(item => (
                <div key={item.label} className="flex gap-3.5 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-[7px] shrink-0" />
                  <div>
                    <div className="text-content text-[15px] font-semibold tracking-snug mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-content-muted text-sm leading-normal">
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
    <div className="flex flex-col gap-1">
      <div className="text-content-muted text-xs tracking-wider uppercase">
        {label}
      </div>
      <div
        className={`${bold ? 'font-bold' : 'font-semibold'} tracking-tightest leading-none`}
        style={{ color, fontSize: valueSize }}
      >
        {value}
      </div>
      {subtext && (
        <div className="text-content-muted text-xs">
          {subtext}
        </div>
      )}
    </div>
  )
}
