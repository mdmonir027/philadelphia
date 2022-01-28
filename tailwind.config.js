module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
        primary: '#e65d55',
        'primary-black': '#383435',
        'custom-gray': '#8f8f8f',
      },
    },
  },
  plugins: [],
};
