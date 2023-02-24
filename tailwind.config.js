/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        goldenYellow: '#FCB72B',
        charcoal: '#495567',
        lightGray: '#939CAA',
        darkGray: '#333A44',
      },
      backgroundImage: {
        header: "url('/src/assets/home/home-hero-mobile.jpg')",
        signUp: "url('/src/assets/patterns/semi-circles.svg')",
      },
      fontFamily: {
        heading: ['Space Mono'],
        body: ['Lexend Deca'],
      },
      width: {
        oval: '56px',
        image: '311px',
        app: '34px',
      },
      height: {
        oval: '56px',
        image: '311px',
        icon: '500px',
        signUp: '320px',
        footer: '438px',
        app: '34px',
      },
    },
  },
  plugins: [],
};
