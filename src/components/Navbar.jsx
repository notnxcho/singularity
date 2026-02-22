import CornerConnector from './common/CornerConnector'

const ArrowDownRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3L13 13M13 13V6M13 13H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Navbar() {
  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex items-center gap-16 h-[77px] px-4 rounded-b-3xl bg-surface shadow-nav">
        <div className="flex items-center pl-2">
          <span className="text-content text-xl font-extrabold tracking-[-0.4px] leading-none">
            SINGULARITY
          </span>
        </div>

        <div className="flex items-center gap-4">
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

        <div className="flex items-center gap-4">
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

        <CornerConnector corner="tr" className="absolute top-0 -left-6 pointer-events-none" />
        <CornerConnector corner="tl" className="absolute top-0 -right-6 pointer-events-none" />
      </div>
    </nav>
  )
}
