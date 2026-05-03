/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vermillion: '#D9381E', 
        paper: '#EAE6DF',
        ink: '#1C1B19',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '6px 6px 0px 0px #1C1B19',
        'brutal-hover': '2px 2px 0px 0px #1C1B19',
      },
      animation: {
        'marquee': 'marquee 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
