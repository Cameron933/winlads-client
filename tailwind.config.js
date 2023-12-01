/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "special": "2150px",
        "pro": "1024px"
      }
    },
    fontFamily: {
      subscription: ["Urbanist", "sans-serif"],
    },
  },
  plugins: [],
}

