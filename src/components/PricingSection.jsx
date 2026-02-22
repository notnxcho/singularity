const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    tagline: 'Get started, no commitment.',
    highlight: false,
    features: [
      '30 trades per month',
      '1 strategy',
      'Basic PnL tracking',
      'CSV import',
      'Web app access',
    ],
    cta: 'Start for free',
    ctaStyle: 'outline',
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    tagline: 'For traders who are serious.',
    highlight: true,
    badge: 'Most popular',
    features: [
      'Unlimited trades',
      'Unlimited strategies',
      'Full analytics suite',
      'Deviation Cost™ tracking',
      'Broker auto-import',
      '1 linked account',
      'Priority support',
    ],
    cta: 'Start Pro',
    ctaStyle: 'primary',
  },
  {
    name: 'Elite',
    price: '$59',
    period: 'per month',
    tagline: 'For professional-grade operations.',
    highlight: false,
    features: [
      'Everything in Pro',
      'Multi-account (up to 10)',
      'Behavioral analytics',
      'Tilt detection & alerts',
      'API access + webhooks',
      'Prop firm report import',
      'Priority support + onboarding',
    ],
    cta: 'Start Elite',
    ctaStyle: 'outline',
  },
]

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 3L13 13M13 13V6M13 13H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2.5 7L5.5 10L11.5 4" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-surface py-16 md:py-30 px-3 border-t border-line">
      <div className="max-w-container mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <span className="inline-block text-accent text-[13px] font-medium tracking-widest uppercase mb-4">
            Pricing
          </span>
          <h2 className="text-content text-section font-normal mb-3.5">
            Start free. Upgrade when you're ready.
          </h2>
          <p className="text-content-muted text-base leading-normal tracking-snug">
            Free is actually usable. Pro covers most traders. Elite is for professionals managing multiple accounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`rounded-2.5xl py-8 md:py-9 px-6 md:px-7 flex flex-col relative overflow-hidden ${
                plan.highlight
                  ? 'bg-[#110000] order-first md:order-none'
                  : 'bg-surface-alt border border-line'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent" />
              )}

              {plan.badge && (
                <div className="inline-flex items-center bg-accent rounded-md py-1 px-2.5 mb-5 w-fit">
                  <span className="text-white text-[11px] font-bold tracking-wider uppercase">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div
                className={`text-lg font-bold tracking-snug mb-2 ${plan.badge ? '' : 'mt-5'} ${
                  plan.highlight ? 'text-[#fffcf5]' : 'text-content'
                }`}
              >
                {plan.name}
              </div>

              <div className="flex items-baseline gap-1 mb-1.5">
                <span
                  className={`text-5xl font-extrabold tracking-[-0.05em] leading-none ${
                    plan.highlight ? 'text-[#fffcf5]' : 'text-content'
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlight ? 'text-[rgba(255,252,245,0.5)]' : 'text-content-muted'
                  }`}
                >
                  /{plan.period}
                </span>
              </div>

              <p
                className={`text-sm leading-[1.4] tracking-snug mb-7 ${
                  plan.highlight ? 'text-[rgba(255,252,245,0.6)]' : 'text-content-muted'
                }`}
              >
                {plan.tagline}
              </p>

              <ul className="list-none flex flex-col gap-2.5 flex-1 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="shrink-0 mt-px">
                      <CheckIcon />
                    </span>
                    <span
                      className={`text-sm leading-[1.4] tracking-snug ${
                        plan.highlight ? 'text-[rgba(255,252,245,0.85)]' : 'text-content-secondary'
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.ctaStyle === 'primary' ? (
                <div className="flex overflow-hidden rounded-xl bg-accent cursor-pointer">
                  <div className="flex-1 flex items-center justify-center px-4 py-3 rounded-xl bg-[#fffcf5]">
                    <span className="text-[#110000] text-[15px] font-semibold tracking-tight">
                      {plan.cta}
                    </span>
                  </div>
                  <div className="flex items-center justify-center w-11 text-white">
                    <ArrowIcon />
                  </div>
                </div>
              ) : (
                <button
                  className={`w-full py-3 px-4 rounded-xl bg-transparent text-[15px] font-semibold tracking-tight cursor-pointer transition-[border-color,background] duration-150 ${
                    plan.highlight
                      ? 'border border-[rgba(255,252,245,0.2)] text-[#fffcf5]'
                      : 'border border-line-strong text-content'
                  }`}
                >
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
