/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx'],
  },
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      colors: {
        'blue': 'yellow',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
