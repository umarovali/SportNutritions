/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        golos: ['Golos Text', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: '16px',
      screens: {
        DEFAULT: '100%',
      },
    },
  },
  plugins: [],
}

