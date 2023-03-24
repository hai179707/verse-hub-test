/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'slide-item': '200px',
        'selected-slide-item': '250px',
      }
    },
  },
  plugins: [],
}