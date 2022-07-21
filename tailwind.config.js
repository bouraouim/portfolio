/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}","./index.html"],
  theme: {
    debugScreens: {
      ignore: ['dark'],
      position: ['top', 'left'],
      },
      
    
    fontFamily: {
      'gumela':['guamela']
    },
    extend: {
      colors: {
      backgroundcolor:"b  ackground-color: #0093E9;background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);",
      customyellow: '#F5C32C',
      customOrange : '#FCA61F',
      customblack : '#242D49',
      customgray : '#788097',
      customblueCard : '#DDF8FE',
      custompurple: 'rgb(238 210 255)',
      btnbg:'linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)',
      boxShadow : '0px 19px 60px rgb(0 0 0 / 8%)',
      orangeCard:' rgba(252, 166, 31, 0.45)',
      smboxShadow: '-79px 51px 60px rgba(0, 0, 0, 0.08)',
      bg2:'#1E2B48'
      },
      scale: {
        '69': '0.69',
        '67': '0.67',
        '140': '1.14',
        '62': '0.62',
        '38': '0.38',

      },
      spacing: {
        '15%': '15%',
        '9%': '9%',
        '28%': '28%',
        '19%': '19%',
        '24%': '24%',
        '18%': '18%',
        '56%': '56%',
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    ]
}
