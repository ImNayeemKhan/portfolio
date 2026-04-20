/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e5f3ff',
          100: '#c9e8ff',
          400: '#22d3ee',
          500: '#14b8a6',
          600: '#0f766e',
          700: '#0f4f5c',
          900: '#031926'
        },
        accent: {
          50: '#e0f9f2',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e'
        },
        ops: {
          50: '#e8f8ff',
          400: '#60a5fa',
          500: '#3b82f6',
          700: '#1d4ed8'
        },
        dark: {
          950: '#020814',
          900: '#06111e',
          800: '#0d1a2d',
          700: '#122134',
          600: '#24324a'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}