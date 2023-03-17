/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // => @media (max-width: 1535px) { ... }

      'lg': { 'max': '1500px' },
      // => @media (max-width: 1279px) { ... }

      'md': { 'max': '750px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '400px' },
      // => @media (max-width: 639px) { ... }
      'xs': { 'max': '320px' }
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#6E6E6E',
      'mid-dark': '#2c3e50',
      'american-dark': '#2d3436',
      'text-header': '#f5f6fa',
      'button-primary': '#ff9100',
      'light-blue': '#cae5f4'
    },
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
      fancy: ["Dancing Script", "cursive"],
      pacefic: ["Pacifico", "cursive"],
    },
  },

  plugins: [],
};
