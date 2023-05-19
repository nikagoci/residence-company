/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      light_purle: '#d40f7d',
      purple: '#be066d'
    },
  },
  plugins: [
    require('daisyui')
  ],
}
