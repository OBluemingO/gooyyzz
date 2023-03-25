/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-purple': '#5F60B9'
      },
      animation: {
        'spin-slow': 'spinSlow 10s linear infinite',
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}