// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      fontFamily: {
        'Work': ['Work Sans', 'sans-serif']
      },
      colors: {
        'text': '#0a012d',
        'background': '#ebe6fe',
        'primary': '#647c04',
        'secondary': '#af9cfc',
        'accent': '#a0c606',
      },
    },
  },
  plugins: [],
};
