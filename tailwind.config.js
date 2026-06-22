/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        jade: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        vermilion: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flash-red': 'flash-red 0.5s ease-out',
        'pop-in': 'pop-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'translate(-50%, -50%) scale(0.8)', opacity: '1' },
          '100%': { transform: 'translate(-50%, -50%) scale(1.6)', opacity: '0' },
        },
        'flash-red': {
          '0%': { opacity: '1', transform: 'translate(-50%, -50%) scale(0.5)' },
          '50%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1.2)' },
          '100%': { opacity: '0', transform: 'translate(-50%, -50%) scale(1)' },
        },
        'pop-in': {
          '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: '0' },
          '60%': { transform: 'translate(-50%, -50%) scale(1.15)' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.2)',
        'glow-amber': '0 0 20px rgba(245, 158, 11, 0.5), 0 0 40px rgba(245, 158, 11, 0.2)',
        'glow-red': '0 0 20px rgba(239, 68, 68, 0.5)',
        'soft': '0 10px 40px -10px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
