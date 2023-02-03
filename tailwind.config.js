/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        btnFont: "'Cormorant Garamond', serif",
        logoFont: "'Fredericka the Great', cursive"
      },
      colors: {
        primaryClr: 'hsl(34, 40%, 53%)',
        primaryDarker: 'hsl(34, 40%, 45%)',
        darkLighter: 'hsl(213, 6%, 35%)',
        fontClrGrey: '#7a7a7a',
        blackClr: '#090909'
      },
      backgroundImage: {
        'hero': "url('/src/assets/home-hero.jpg')",
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'background-zoom': 'zoom 20s linear infinite',
      },
    },
  },
  plugins: [],
};
