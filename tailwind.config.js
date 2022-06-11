/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#F4F4F2',
      'gray-white': '#E8E8E8',
      'gray-light': '#BBBFCA',
      'gray-dark': '#495464',
    },
  },
  plugins: [],
}
