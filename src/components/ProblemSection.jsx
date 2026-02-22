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
    <section id="problem" className="bg-surface-alt py-16 md:py-30 px-3">
      <div className="max-w-container mx-auto">
        <div className="mb-10 md:mb-18 max-w-[680px]">
          <span className="inline-block text-accent text-[13px] font-medium tracking-widest uppercase mb-4">
            The Problem
          </span>
          <h2 className="text-content text-section font-normal">
            You already know what to do.{' '}
            <span className="text-content-muted">The problem is you don't do it.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {problems.map(p => (
            <div
              key={p.number}
              className="bg-surface border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-[border-color,box-shadow] duration-200 hover:border-accent-border hover:shadow-card-hover"
            >
              <span className="text-accent text-[13px] font-bold tracking-wider">
                {p.number}
              </span>
              <h3 className="text-content text-xl font-semibold leading-[1.2] tracking-tight">
                {p.title}
              </h3>
              <p className="text-content-muted text-[15px] leading-relaxed tracking-snug">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
