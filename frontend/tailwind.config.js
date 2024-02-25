/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '#D0BFFF'
      },
      colors :{
        navBg: '#393E46',
        whiteClr: "#FFFF",
        navBgNew: '#0F0F0F',
        mainBg: '#151515',
        mainText: '#F1F0E8',
        childText: '#DDDDDD',
        hoverClr: '#03001C',
        blackBg: '#000000',
        authBg: '#181818',
        darkRed1: "#ED2B2A",
        darkRed2: "#CD1818",
        darkRed3: "#EE4540",
        lightRed1: "#FAD4D4",
        lightRed2: "#FAD4D4",
        darkGrey1: "#7F8487",
        darkGrey2: "#222831",
        lightGrey1: "#F2F1EB",
      }
    
    },

  },
  plugins: [],
}

