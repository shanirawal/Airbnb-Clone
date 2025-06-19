/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      airbnb: {
        red: '#FF385C',
        dark: '#222222',
        light: '#F7F7F7',
        gray: '#EBEBEB',
        green: '#008489',
        gold: '#FFB400'
      }
    },
    fontFamily: {
      inter: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif']
    }
  }
}
,
  plugins: [],
  variants: {
    extend: {
      scrollbar: ['rounded'],
    },
  },
}