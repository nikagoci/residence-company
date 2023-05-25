/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light_purple: "#d40f7d",
        purple: "#be066d",
        blue: "rgb(33, 140, 204)",
        light_blue: "rgba(33, 140, 204, 0.26)",
        cadet_blue: '#5f9ea0',
        primary: '#238ccc'
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
