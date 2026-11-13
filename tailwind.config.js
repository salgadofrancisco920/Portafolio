/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        inferno: {
          orange: '#FF7A00',
          red: '#FF3D32',
          pink: '#FF176B',
          dark: '#100910',
          card: '#1C101A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 35px rgba(255, 61, 50, 0.35)'
      }
    }
  },
  plugins: [],
}