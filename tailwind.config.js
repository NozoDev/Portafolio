/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
      'DynaPuff':['Dancing Script', 'cursive']
     },
      colors: {
        "gray-d": "#181823"
      }
    },
  },
  plugins: [],
}

