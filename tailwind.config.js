/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A4D2E",      // Even deeper, richer green
        'primary-light': '#4F6F52',
        secondary: "#E85D04",    // More vibrant orange
        background: "#F8F4E6",   // Warmer, premium cream
        accent: "#F4A261",       // Soft golden orange
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'glow': '0 0 20px rgba(244, 162, 97, 0.4)',
      }
    },
  },
  plugins: [],
}
