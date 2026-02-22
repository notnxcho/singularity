const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'API Docs', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Terms', 'Privacy', 'Security'],
  Community: ['Twitter / X', 'Discord', 'GitHub'],
}

export default function Footer() {
  return (
    <footer className="bg-surface-alt border-t border-line pt-16 pb-8 px-3">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-[280px_repeat(4,1fr)] gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <span className="text-content text-xl font-extrabold tracking-tightest">
              SINGULARITY
            </span>
            <p className="text-content-muted text-[13px] leading-relaxed tracking-snug max-w-[220px]">
              The strategy-first trading journal for high-frequency technical traders.
            </p>
            <span className="inline-block text-accent text-xs font-medium tracking-wide">
              By Quantum Edge
            </span>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-3">
              <span className="text-content text-[13px] font-semibold tracking-wider uppercase mb-1">
                {category}
              </span>
              {links.map(link => (
                <a
                  key={link}
                  href="#"
                  className="text-content-muted text-sm no-underline tracking-snug hover:text-content transition-colors duration-150"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-line flex items-center justify-between">
          <p className="text-content-muted text-[13px] tracking-snug">
            © 2026 Singularity by Quantum Edge. All rights reserved.
          </p>
          <p className="text-content-muted text-[13px] tracking-snug">
            Data is encrypted in transit and at rest.
          </p>
        </div>
      </div>
    </footer>
  )
}
