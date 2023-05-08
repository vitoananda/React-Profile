/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '28rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        "red" : "#E13F18",
        'gray': '#4b5563',
        'white': '#ffffff',
        'ylw': '#F3C529',
        'bl' : '#2256DD',
        'lbl' : '#4678E8', 
        'softblck' : '#414a4c',
        'softgray' : '#F5F2EA'
      },
    },
  },
  plugins: [],
}

