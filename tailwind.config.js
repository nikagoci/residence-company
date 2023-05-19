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
        light_purle: "#d40f7d",
        purple: "#be066d",
        blue: "rgb(33, 140, 204)",
        light_blue: "rgba(33, 140, 204, 0.26)",
      },
    },
  },
  plugins: [require("daisyui")],
};
