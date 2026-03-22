/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D6A4F",      // Deep Green
        secondary: "#E76F2A",    // Earthy Orange
        background: "#FDF8F0",   // Warm Cream
        accent: "#F4A732",       // Golden Yellow
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
