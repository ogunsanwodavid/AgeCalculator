/** @type {import('tailwindcss').Config} */;
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "540px",
      md: "870px",
      lg: "976px",
      xl: "1440px"
    },
    fontFamily: {
      'poppins': 'Poppins , sans-serif'
    },
    extend: {
      colors: {
        ...colors,
        'purple': 'hsl(259, 100%, 65%)',
        'lightred': 'hsl(0, 100%, 67%)',
        'white': 'hsl(0, 0%, 100%)',
        'offwhite': 'hsl(0, 0%, 94%)',
        'lightgrey': 'hsl(0, 0%, 86%)',
        'smokeygrey': 'hsl(0, 1%, 44%)',
        'offblack': 'hsl(0, 0%, 8%)'
      }
    },
  },
  plugins: [],
}

