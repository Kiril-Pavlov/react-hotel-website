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
        primaryDarker: 'hsl(34, 40%, 45%)',
        darkLighter: 'hsl(213, 6%, 35%)'
      },
      backgroundImage: {
        'hero': "url('/src/assets/home-hero.jpg')",
      },
    },
  },
  plugins: [],
};
