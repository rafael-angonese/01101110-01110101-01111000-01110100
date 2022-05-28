module.exports = {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#2E8EF4',
          100: '#4441F1',
          200: '#4441F2',
          300: '#4441F3',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      }
    },
  },
};