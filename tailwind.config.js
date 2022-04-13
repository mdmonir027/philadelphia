module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  theme: {
    screens: {
      xs: '460px',
      sm: '640px',
      md: '768px',
      mlb: '900px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1820px',
    },
    extend: {
      colors: {
        authbtn: '#0000FF',
        pr: '#012257',
        sr: '#bbbbbb',
        tr: '#f4f4f4',
        hr: '#e2edff',
        nr: '#012257',
        black: '#000000',
        primary: '#e65d55',
        'primary-black': '#383435',
        'custom-gray': '#8f8f8f',
        lightBlue: '#0D5FC9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
