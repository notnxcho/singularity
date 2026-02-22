/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ["'Host Grotesk'", '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'sans-serif'],
    },
    letterSpacing: {
      tightest: '-0.04em',
      tighter: '-0.03em',
      tight: '-0.02em',
      snug: '-0.01em',
      normal: '0',
      wide: '0.03em',
      wider: '0.05em',
      widest: '0.08em',
    },
    extend: {
      colors: {
        surface: {
          DEFAULT: 'var(--bg-1)',
          alt: 'var(--bg-2)',
          elevated: 'var(--bg-3)',
        },
        content: {
          DEFAULT: 'var(--contrast-1)',
          secondary: 'var(--contrast-2)',
          muted: 'var(--contrast-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          dim: 'var(--accent-dim)',
          border: 'var(--accent-border)',
        },
        line: {
          DEFAULT: 'var(--border)',
          strong: 'var(--border-strong)',
        },
      },
      boxShadow: {
        nav: 'var(--shadow-nav)',
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
      },
      maxWidth: {
        container: '1080px',
      },
      spacing: {
        18: '4.5rem',
        30: '7.5rem',
      },
      fontSize: {
        section: ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        hero: ['clamp(2.5rem, 5.5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        cta: ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'faq-title': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      },
      borderRadius: {
        '2.5xl': '20px',
      },
    },
  },
  plugins: [],
}
