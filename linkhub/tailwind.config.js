/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'dark': '#0F1011',
      "primary": '#909CC2',
      "white": "#FFFFFF",
      "gray": "#6C6C6C",
      "black": "#000000",
    },
    fontSize:{
      xl: '50px'
    },
    extend: {
      fontFamily: {
        'museo': ['MuseoModerno', 'sans-serif']
      }
    },
  },
  plugins: [],
}

