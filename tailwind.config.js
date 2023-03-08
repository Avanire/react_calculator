/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#5D5FEF',
        textMainColor: '#000000',
        textSecondColor: '#4D5562',
        bgColor: '#F3F4F6',
        borderColor: '#E2E3E5'
      }
    }
  },
  plugins: [],
}
