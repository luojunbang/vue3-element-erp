/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        xs: '5px',
        sm: '10px',
        md: '20px',
        lg: '30px',
        xl: '50px',
      },
      fontFamily: {},
      colors: {
        primary: 'rgba(0,137,255,1)',
        danger: 'rgba(215,0,15,1.0)',
        warn: 'rgba(255,119,15,1.0)',
        normal: 'rgba(255,231,111,1.0)',
        success: 'rgba(145,184,34,1.0)',
      },
    },
  },
}
