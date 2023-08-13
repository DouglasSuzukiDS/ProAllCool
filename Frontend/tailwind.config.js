/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#C1C7E0',
        dark: '#202225'
      }
    },
  },
  plugins: [],
}

