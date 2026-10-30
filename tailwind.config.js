/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stage: {
          bg: '#FBF9F5',
          surface: '#FFFFFF',
          muted: '#F3EFE6',
          sand: '#ECE6DA',
          text: '#121316',
          subtext: '#58554E',
          accent: '#B8860B',
          accentHover: '#9A6E08',
          accentSoft: '#F6EEDB',
          border: '#E7E2D6',
          dark: '#141518',
          darkCard: '#1D1E22'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
}
