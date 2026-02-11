/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional trade colors: Slate and a "Plaster" off-white
        brandBlue: "#0f172a", // Navy/Slate
        brandGold: "#fbbf24", // Good for "Call to Action" buttons
      },
    },
  },
  plugins: [],
}