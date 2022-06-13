/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        "gray-white": "#E8E8E8",
        "gray-light": "#BBBFCA",
        "gray-dark": "#495464",
        dark: "#353353",
        "bg-white": "#F9F9FF",
        pink: "#FF4C60",
        yellow: "#FFD15C",
        blue: "#6C6CE5",
        default: "#454360",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
