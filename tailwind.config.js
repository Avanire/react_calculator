/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        iris: {
          100: '#5D5FEF'
        },
        sky: {
          50: '#F0F9FF'
        },
        textSecondColor: '#4D5562',
        borderColor: '#E2E3E5',
        borderDashedColor: '#C4C4C4'
      },
      boxShadow: {
        componentCalcShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: [],
}
