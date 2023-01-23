/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        btnFont: "'Cormorant Garamond', serif"
      },
      colors: {
        redish: '#FF0000'
      }
    },
  },
  plugins: [],
};
