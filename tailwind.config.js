const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FA4A0C',
        red: {
          100: '#FF4B3A',
        },
        gray: {
          100: '#F4F4F8',
          200: '#EEEEEE',
          300: '#F6F6F9',
        },
      },
      fontFamily: {
        display: ['Open Sans', ...defaultTheme.fontFamily.sans],
        body: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        card: ' 0px 30px 60px rgba(57, 57, 57, 0.1)',
      },
      dropShadow: {
        card: 'drop-shadow( 0px 6px 5px  rgba(215, 56, 0, 0.4))',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
