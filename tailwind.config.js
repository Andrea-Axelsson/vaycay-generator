/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px', // default
      'md': '768px', // default
      'lg': '1200px', // default
      'xl': '1280px', // default
      '2xl': '1536px', // default
    },
    extend: {
      fontSize: {
        50: '3.125rem',
        35: '2.1875rem',
        20: '1.25rem',
        18: '1.125',
        16: '1rem',
        14: '0.875rem',
      },
      fontFamily: {
        'abril': ['"Abril Fatface"', 'cursive'],
        'lexend': ['Lexend', 'sans-serif'],
        'ms-madi': ['"Ms Madi"', 'cursive'],
      },
      colors: {
        'primary' : {
          100: '#FF6A41',
          200: '#C14D2D',
        },
        'secondary' : {
          100: '#00C3FF',
          200: '#001F28',
          300: '#248FB0',
          400: '#00485F',
        }
      }
    },
  },
  plugins: [],
}


