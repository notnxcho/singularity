import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'API Docs', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Terms', 'Privacy', 'Security'],
  Community: ['Twitter / X', 'Discord', 'GitHub'],
}

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered column reveal
      gsap.fromTo(
        '.footer-col',
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.09,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 88%',
            once: true,
          },
        }
      )

      // Bottom bar fades in slightly after
      gsap.fromTo(
        '.footer-bottom',
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-surface-alt border-t border-line pt-12 md:pt-16 pb-8 px-3">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[280px_repeat(4,1fr)] gap-8 md:gap-12 mb-10 md:mb-16">

          {/* Brand — full width on mobile */}
          <div className="footer-col col-span-2 md:col-span-1 flex flex-col gap-4">
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

          {/* Link categories */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer-col flex flex-col gap-3">
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

        <div className="footer-bottom pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
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
