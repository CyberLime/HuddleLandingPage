/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
    "./style.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins'],
        'Open-Sans': ['Open Sans']
      },
      colors: {
        'my-violet': 'hsl(257, 40%, 49%)',
        'my-soft-magenta': 'hsl(300, 69%, 71%)'
      },
      backgroundImage: {
        'bg-desktop': 'url("./images/bg-desktop.svg")',
        'bg-mobile': 'url("./images/bg-mobile.svg")'
      },
      width: {
        'xl': '680px',
        'b1xl': '540px',
        'lgxl': '432px'
      },
      fontSize: {
        '4.5xl': '42px'
      },
      maxWidth: {
        't': '520px',
        'b1t': '416px'
      },
      screens: {
        'b1': '1325px',
        'b2': '825px',
        'xss': '425px'
      }
    },
  },
  plugins: [],
}