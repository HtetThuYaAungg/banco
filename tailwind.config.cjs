/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cus-bg": "#fffffe",
        "btn-bg": "#ffd803",
        "secondary": "#e3f6f5",
        "primary" : "#272343",
      }
    },
  },
  plugins: [],
}
