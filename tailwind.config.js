/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9E1',
        beige: '#E8D5B7',
        mauve: '#D4A5B0',
        blush: '#F2C2CE',
        camel: '#C4A882',
        ink: '#3B3128',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 80px rgba(59, 49, 40, 0.16)',
        soft: '0 16px 48px rgba(59, 49, 40, 0.10)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};

