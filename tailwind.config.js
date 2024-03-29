/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "[data-theme='dark']"],
  content: ["./src/**/*.tsx", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'Sacramento': ['Sacramento', 'cursive'],
        'Nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        'custom-yellow': 'rgba(254, 209, 48, 0.09)', 
        'custom-salmon-300': "#ffa0a0",
        'custom-salmon': '#FF6464', 
        'custom-salmon-500': "#f83b3b",
        "turquoise": {
          300: "#7cccc1",
          400: "#62B8AF",
          500: "#37958d"
        }
      },
      screens: {
        'min-[840px]': '840px',
        'max-[899px]': '899px',
      },
      backgroundImage: {
        'gradient-ferramenta': 'linear-gradient(179.85deg, #62B8AF 7.11%, rgba(98, 184, 175, 0.964083) 90.57%, rgba(98, 184, 175, 0.427083) 94.79%, rgba(98, 184, 175, 0) 99.91%)',
        'LineSmall-gradient' : 'linear-gradient(90.02deg, #62B8AF 54.71%, rgba(98, 184, 175, 0) 99.98%)',
      },
      maxHeight: {
        "screenModal": "calc(100% - 4rem)"
      }
    },
  },
  plugins: [],
}
