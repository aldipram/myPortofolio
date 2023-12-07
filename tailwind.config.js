/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#0c111f',
        brightColor: '#f9ec7d',
      },
    },
  },
  plugins: [],
}