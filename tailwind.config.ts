/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Haile's custom dev palette — deep forest-green meets electric amber
        brand: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        ink: {
          950: '#060d0a',
          900: '#0a1a12',
          800: '#0f2318',
          700: '#162d1f',
          600: '#1e3a28',
          500: '#284d35',
          400: '#3d6b4f',
        },
        surface: {
          DEFAULT: 'rgba(15, 35, 24, 0.7)',
          light: 'rgba(240, 253, 244, 0.8)',
        },
      },
      fontFamily: {
        display: ['var(--font-cabinet)', 'system-ui', 'sans-serif'],
        body: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, #22c55e22 0px, transparent 50%), radial-gradient(at 80% 0%, #f59e0b11 0px, transparent 50%), radial-gradient(at 0% 50%, #22c55e11 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'typing': 'typing 3.5s steps(30) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        typing: {
          '0%': { width: '0' },
          '50%': { width: '100%' },
          '100%': { width: '0' },
        },
      },
      boxShadow: {
        'glow-green': '0 0 30px rgba(34, 197, 94, 0.2)',
        'glow-amber': '0 0 30px rgba(245, 158, 11, 0.15)',
        'glow-lg': '0 0 60px rgba(34, 197, 94, 0.15)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(34,197,94,0.2)',
      },
    },
  },
  plugins: [],
}
