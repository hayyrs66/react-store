/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
      
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      
      },
      backgroundImage: {
        'brandbanner': "url('./src/assets/brandbanner.png')",
      }
    },
    screens: {
      'bg': {'max': '1315px'},
      'sbg': {'max': '1265px'},
      'gg': {'max': '1130px'},
      'sg': {'max': '1050px'},
      'smg': {'max': '910px'},
      'ssm': {'max': '790px'},
      'sm': {'max': '780px'},
      'smm': {'max': '690px'},
      'ss': {'max': '565px'},
    },
  },
  plugins: [],
};