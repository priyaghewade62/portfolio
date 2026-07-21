import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 35px rgba(124, 58, 237, 0.28)',
        soft: '0 32px 80px rgba(7,12,33,0.35)'
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#7C3AED',
          600: '#5b21b6',
          700: '#4c1d95'
        },
        accent: {
          500: '#14B8A6',
          400: '#06B6D4',
          300: '#2563EB'
        }
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 10% 10%, rgba(124,58,237,0.2), transparent 25%), radial-gradient(circle at 80% 15%, rgba(56,189,248,0.2), transparent 22%), radial-gradient(circle at 60% 80%, rgba(20,184,166,0.14), transparent 20%)'
      }
    }
  },
  plugins: []
};

export default config;
