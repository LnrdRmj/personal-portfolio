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
        },
        keyframes: {
            'background-scroll': {
                '0%': { backgroundPosition: '0% 0%' },
                '100%': { backgroundPosition: '100% 100%' },
            },
        },
        animation: {
            'background-scroll': 'background-scroll 3s ease-in-out infinite alternate',
        },
    },
  },
  plugins: [],
}

