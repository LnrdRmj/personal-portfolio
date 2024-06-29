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
                fadein: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeout: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                popup: {
                    '0%': { opacity: '0', width: '50%', height: '50%' },
                    '100%': { opacity: '1', width: '100%', height: '100%' },
                },
                popout: {
                    '0%': { width: '100%', height: '100%' },
                    '100%': { opacity: '0', width: '50%', height: '50%' },
                },
                // animations 'to'
                // Theese animation are for when a component goes out of scene
                slidetoup: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-100%)' },
                },
                slidetodown: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(100%)' },
                },
                slidetoleft: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                slidetoright: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                // animations 'from'
                // Theese animation are for when a component comes in to a scene 
                slidefromup: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                slidefromdown: {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                slidefromleft: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                slidefromright: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                // animations 'fade to'
                // Theese animation are for when a component goes out of scene with a fade
                fadeslidetoup: {
                    '0%': { transform: 'translateY(0)', opacity: '1' },
                    '100%': { transform: 'translateY(-100%)', opacity: '0' },
                },
                fadeslidetodown: {
                    '0%': { transform: 'translateY(0)', opacity: '1' },
                    '100%': { transform: 'translateY(100%)', opacity: '0' },
                },
                fadeslidetoleft: {
                    '0%': { transform: 'translateY(0)', opacity: '1' },
                    '100%': { transform: 'translateX(-100%)', opacity: '0' },
                },
                fadeslidetoright: {
                    '0%': { transform: 'translateY(0)', opacity: '1' },
                    '100%': { transform: 'translateX(100%)', opacity: '0' },
                },
                // animations 'from'
                // Theese animation are for when a component comes in to a scene 
                fadeslidefromup: {
                    '0%': { transform: 'translateY(-100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeslidefromdown: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeslidefromleft: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeslidefromright: {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                hide: {
                    '0%': {},
                    '100%': { display: 'none' }
                },
                wave: {
                    '0%': { opacity: '1' },
                    '45%': { opacity: '0.4' },
                    '55%': { opacity: '0.4' },
                    '100%': { opacity: '1' },
                }
            },
            animation: {
                'background-scroll': 'background-scroll 3s ease-in-out infinite alternate',
                fadein: 'fadein .5s forwards',
                fadeout: 'fadeout .5s forwards',
                popup: 'popup .3s ease-out forwards',
                popout: 'popout .3s ease-out forwards',
                slidetoup: 'slidetoup      .4s cubic-bezier(.73,.34,.8,.8) forwards',
                slidetodown: 'slidetodown    .3s cubic-bezier(.73,.34,.8,.8) forwards',
                slidetoleft: 'slidetoleft    .3s cubic-bezier(.73,.34,.8,.8) forwards',
                slidetoright: 'slidetoright   .3s cubic-bezier(.73,.34,.8,.8) forwards',
                slidefromup: 'slidefromup    .3s cubic-bezier(.17,.67,.63,.9) forwards',
                slidefromdown: 'slidefromdown  .3s cubic-bezier(.17,.67,.63,.9) forwards',
                slidefromleft: 'slidefromleft  .3s cubic-bezier(.17,.67,.63,.9) forwards',
                slidefromright: 'slidefromright .3s cubic-bezier(.17,.67,.63,.9) forwards',
                fadeslidetoup: 'fadeslidetoup .3s cubic-bezier(.17,.67,.63,.9) forwards',
                fadeslidetodown: 'fadeslidetodown .3s cubic-bezier(.17,.67,.63,.9) forwards',
                fadeslidetoleft: 'fadeslidetoleft .3s cubic-bezier(.17,.67,.63,.9) forwards',
                fadeslidetoright: 'fadeslidetoright .3s cubic-bezier(.17,.67,.63,.9) forwards',
                fadeslidefromup: 'fadeslidefromup .3s cubic-bezier(.17,.67,.63,.9) forwards',
                fadeslidefromdown: 'fadeslidefromdown .3s cubic-bezier(.17,.67,.63,.9) forwards',
                fadeslidefromleft: 'fadeslidefromleft .3s cubic-bezier(.17,.67,.63,.9) forwards',
                fadeslidefromright: 'fadeslidefromright .3s cubic-bezier(.17,.67,.63,.9) forwards',
                hide: 'hide .5s forwards',
                infiniteWave: 'wave 2s infinite ease-in-out'
            },
        },
    },
    plugins: [],
}

