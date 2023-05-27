/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'Sacramento': ['Sacramento', 'cursive'],
        'Nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        'custom-yellow': 'rgba(254, 209, 48, 0.09)', 
        'custom-salmon': '#FF6464', 
      },
    },
  },
  plugins: [],
}
