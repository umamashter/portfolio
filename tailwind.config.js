/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: "rgb(243, 180, 20)",
        dark: "#0f172a",
        secondary: '#64748b'
      },
      screens:{
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

