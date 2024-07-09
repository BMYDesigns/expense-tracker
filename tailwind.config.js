/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ss: '393',
      sm: '412px',
      md: '600px',
      lg: '800px',
      ms: '1000px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primaryColor: '#0D9347',

      }
    },
  },
  plugins: [],
}

