import { useState } from 'react'

const faqs = [
  {
    q: 'How is this different from TraderSync, Tradervue, or TradeZella?',
    a: 'Those tools are built for casual day traders doing 5–15 trades. They treat strategy as a journal note — not a queryable, audited dimension of your data. Singularity is built around strategy as the primary axis. Every trade links to a strategy. Every deviation is categorized. Deviation Cost™ is a metric that doesn\'t exist anywhere else. And the platform handles 200+ trades/day without UI degradation.',
  },
  {
    q: 'Does it work with prop firm accounts?',
    a: 'Yes. Singularity imports directly from TopStep, Apex, FTMO, and generic prop firm report formats. You can track strategy adherence and deviation cost within prop firm challenges just like a live account — which is arguably where discipline matters most.',
  },
  {
    q: 'How long does auto-import take?',
    a: 'Under 2 minutes for most brokers after initial connection. Subsequent syncs are automatic and run continuously throughout your trading session. CSV uploads with smart field mapping take about 30 seconds.',
  },
  {
    q: 'Can I use it for swing trading too?',
    a: 'Yes. Singularity is optimized for high-frequency traders (50–200+ trades/session) but works for any volume. The strategy accountability framework and analytics are equally valuable whether you\'re holding for 30 seconds or 3 days.',
  },
  {
    q: 'Is my data secure?',
    a: 'Your trade data is encrypted in transit and at rest. We use read-only broker API connections — we cannot place trades on your behalf. We do not sell data to third parties. Two-factor authentication is available on all accounts.',
  },
  {
    q: 'Do you support options and futures?',
    a: 'Yes. Singularity supports equities, options, futures, forex, crypto, and CFDs. Asset class is captured per trade, and you can slice all analytics by asset class. Options-specific metrics (delta P&L, Greeks impact) are on the roadmap.',
  },
  {
    q: 'What if I trade on multiple accounts?',
    a: 'Free and Pro plans support one linked account. Elite supports up to 10 accounts and provides consolidated analytics across all of them — essential if you\'re running multiple strategies across a live account and a prop firm challenge simultaneously.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="bg-surface-alt py-16 md:py-30 px-3 border-t border-line">
      <div className="max-w-[760px] mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <span className="inline-block text-accent text-[13px] font-medium tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-content text-faq-title font-normal">
            Questions worth asking.
          </h2>
        </div>

        <div className="flex flex-col gap-0.5">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-surface rounded-xl overflow-hidden border border-line"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-5 md:py-[22px] px-5 md:px-6 flex items-center justify-between gap-4 bg-transparent border-none cursor-pointer text-left"
              >
                <span className="text-content text-[15px] md:text-base font-medium leading-[1.35] tracking-tight">
                  {faq.q}
                </span>
                <span
                  className={`text-xl leading-none shrink-0 inline-block transition-[transform,color] duration-200 ${
                    open === i ? 'text-accent rotate-45' : 'text-content-muted rotate-0'
                  }`}
                >
                  +
                </span>
              </button>

              {/* grid-template-rows trick: animates height:auto cleanly */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className={`px-5 md:px-6 pb-5 md:pb-[22px] border-t border-line pt-4 md:pt-5
                      transition-opacity duration-200 ease-out
                      ${open === i ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <p className="text-content-muted text-[14px] md:text-[15px] leading-[1.65] tracking-snug">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
