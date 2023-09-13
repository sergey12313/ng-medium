/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        shadowCard: '0px 5px 20px 0px rgba(0, 0, 0, 0.15);'
      },
      colors: {
        primary: '#6E79D6',

      }
    },
  },
  plugins: [],
}

