/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
],
  theme: {
    extend: {
        fontFamily: {
            area: ['AreaNormalTrial', 'sans-serif']
        },
        colors: {
            'primary': '#F3F0EB',
            'secondary': '#141414'
        }
    },
  },
  plugins: [],
}

