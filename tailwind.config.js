/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        btnFont: "'Cormorant Garamond', serif"
      },
      colors: {
        primaryClr: 'hsl(34, 40%, 53%)',
        primaryDark: 'hsl(34, 40%, 45%)'
      }
    },
  },
  plugins: [],
};
