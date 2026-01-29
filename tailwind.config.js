/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Custom premium monochrome palette
        background: '#09090b', // Zinc 950
        surface: '#18181b', // Zinc 900
        primary: '#f4f4f5', // Zinc 100
        secondary: '#a1a1aa', // Zinc 400
        accent: '#fafafa', // White-ish
        border: '#27272a', // Zinc 800
      }
    },
  },
  plugins: [],
}
