/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#008874",
        secondary: "#000000",
        accent: "#FFFFFF",
      },
    },
  },
  plugins: [],
}
