const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 3L13 13M13 13V6M13 13H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function FinalCTASection() {
  return (
    <section className="bg-surface py-16 md:py-30 px-3 border-t border-line">
      <div className="max-w-container mx-auto flex flex-col items-center text-center gap-7">
        <div className="w-px h-[60px] bg-gradient-to-b from-transparent via-accent-border to-transparent" />

        <h2 className="text-content text-cta font-normal max-w-[700px]">
          Stop guessing.{' '}
          <em className="italic text-accent font-semibold">
            Start measuring.
          </em>
        </h2>

        <p className="text-content-muted text-base md:text-lg leading-normal tracking-tight max-w-[480px]">
          Your strategy is only as good as your discipline. Singularity gives you the data to prove it — and the insight to improve it.
        </p>

        <div className="flex overflow-hidden rounded-[14px] bg-accent shadow-[0_8px_32px_rgba(255,141,59,0.3)] cursor-pointer">
          <div className="flex items-center justify-center py-3.5 px-5 md:px-6 rounded-[14px] bg-content">
            <span className="text-surface text-base md:text-[17px] font-semibold tracking-tight whitespace-nowrap">
              Create Free Account
            </span>
          </div>
          <div className="flex items-center justify-center w-12 md:w-[52px] text-white">
            <ArrowIcon />
          </div>
        </div>

        <p className="text-content-muted text-[13px] tracking-snug">
          No credit card required. Import your first trades in under 2 minutes.
        </p>

        <div className="w-px h-[60px] bg-gradient-to-b from-transparent via-accent-border to-transparent" />
      </div>
    </section>
  )
}
