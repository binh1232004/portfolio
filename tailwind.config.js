/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        'elegant': ['var(--font-inter)', 'Inter', 'sans-serif'],
      },      fontSize: {
        'elegant-lg': ['1.125rem', { lineHeight: '1.4', letterSpacing: '-0.005em' }],
        'elegant-xl': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'elegant-2xl': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        'elegant-3xl': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'elegant-4xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'elegant-5xl': ['4rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'elegant-6xl': ['5rem', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'elegant-7xl': ['6rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'elegant-8xl': ['8rem', { lineHeight: '0.85', letterSpacing: '-0.045em' }],
      },
      letterSpacing: {
        'elegant': '-0.01em',
        'elegant-tight': '-0.02em',
        'elegant-tighter': '-0.03em',
      },
      lineHeight: {
        'elegant': '1.6',
        'elegant-tight': '1.3',
        'elegant-tighter': '1.2',
      }
    },
  },
  plugins: [],
}
