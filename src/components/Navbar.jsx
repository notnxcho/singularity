import { useState, useEffect, useRef } from 'react'
import CornerConnector from './common/CornerConnector'

const ArrowDownRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3L13 13M13 13V6M13 13H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Animated hamburger — 3 bars morph into × with CSS transitions
function HamburgerBars({ open }) {
  const bar = 'absolute left-0 right-0 h-[1.5px] bg-current rounded-full origin-center'
  const ease = 'transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]'

  return (
    <div className="relative w-[18px] h-[14px]">
      {/* top bar */}
      <span className={`${bar} ${ease} top-0 ${open ? 'translate-y-[6.25px] rotate-45' : ''}`} />
      {/* middle bar */}
      <span className={`${bar} ease-[cubic-bezier(0.32,0.72,0,1)] transition-[transform,opacity] duration-200 top-1/2 -translate-y-1/2 ${open ? 'opacity-0 scale-x-0' : ''}`} />
      {/* bottom bar */}
      <span className={`${bar} ${ease} bottom-0 ${open ? '-translate-y-[6.25px] -rotate-45' : ''}`} />
    </div>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)      // CSS state (drives animation class)
  const [isVisible, setIsVisible] = useState(false) // DOM mounting
  const closeTimer = useRef(null)

  function openMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setIsVisible(true)
    // Double rAF: first ensures element is in DOM, second triggers the transition
    requestAnimationFrame(() => requestAnimationFrame(() => setIsOpen(true)))
  }

  function closeMenu() {
    setIsOpen(false)
    closeTimer.current = setTimeout(() => setIsVisible(false), 300)
  }

  function toggleMenu() {
    if (isOpen) closeMenu()
    else openMenu()
  }

  // Close on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) closeMenu() }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] md:w-auto">
      <div className="relative flex items-center justify-between md:gap-16 h-16 md:h-[77px] md:px-4 md:rounded-b-3xl bg-surface shadow-nav">

        {/* Logo */}
        <div className="flex items-center pl-2">
          <span className="text-content text-lg md:text-xl font-extrabold tracking-[-0.4px] leading-none">
            SINGULARITY
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-4">
          {['Platform', 'Features', 'Pricing'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-content-secondary text-base tracking-[-0.32px] no-underline hover:opacity-60 transition-opacity duration-150"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop right section */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#signin"
            className="text-content-secondary text-base tracking-[-0.32px] no-underline hover:opacity-60 transition-opacity duration-150"
          >
            Sign in
          </a>
          <div className="flex items-stretch overflow-hidden rounded-xl bg-accent cursor-pointer">
            <div className="flex items-center justify-center px-4 py-3 rounded-xl bg-content">
              <span className="text-surface text-base font-medium tracking-[-0.32px] whitespace-nowrap">
                Try for free
              </span>
            </div>
            <div className="flex items-center justify-center w-10 text-surface">
              <ArrowDownRight />
            </div>
          </div>
        </div>

        {/* Mobile right section */}
        <div className="flex md:hidden items-center gap-2.5">
          <div className="flex items-stretch overflow-hidden rounded-xl bg-accent cursor-pointer">
            <div className="flex items-center justify-center px-3.5 py-2.5 rounded-xl bg-content">
              <span className="text-surface text-sm font-medium tracking-[-0.3px] whitespace-nowrap">
                Try free
              </span>
            </div>
            <div className="flex items-center justify-center w-8 text-surface">
              <ArrowDownRight />
            </div>
          </div>
          <button
            onClick={toggleMenu}
            className="w-9 h-9 flex items-center justify-center rounded-[10px] bg-surface-alt border border-line text-content cursor-pointer"
            aria-label="Toggle menu"
          >
            <HamburgerBars open={isOpen} />
          </button>
        </div>

        <CornerConnector corner="tr" className="absolute top-0 -left-6 pointer-events-none hidden md:block" />
        <CornerConnector corner="tl" className="absolute top-0 -right-6 pointer-events-none hidden md:block" />
        <CornerConnector corner="tl" className="absolute -bottom-6 left-0 pointer-events-none md:hidden" />
        <CornerConnector corner="tr" className="absolute -bottom-6 right-0 pointer-events-none md:hidden" />
      </div>

      {/* Mobile dropdown — mounted while visible, animated by isOpen class */}
      {isVisible && (
        <div
          className={`md:hidden absolute top-full mt-2 left-0 right-0 bg-surface shadow-nav rounded-2xl border border-line overflow-hidden
            transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'}`}
        >
          <div className="flex flex-col p-2 gap-0.5">
            {['Platform', 'Features', 'Pricing'].map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={closeMenu}
                style={{ transitionDelay: isOpen ? `${i * 40 + 60}ms` : '0ms' }}
                className={`py-3 px-4 text-content-secondary text-base tracking-snug no-underline rounded-xl
                  hover:bg-surface-alt transition-[opacity,transform,background-color]
                  duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
                  ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
              >
                {link}
              </a>
            ))}
            <div className="h-px bg-line my-1 mx-2" />
            <a
              href="#signin"
              onClick={closeMenu}
              style={{ transitionDelay: isOpen ? '180ms' : '0ms' }}
              className={`py-3 px-4 text-content-secondary text-base tracking-snug no-underline rounded-xl
                hover:bg-surface-alt transition-[opacity,transform,background-color]
                duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
            >
              Sign in
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
