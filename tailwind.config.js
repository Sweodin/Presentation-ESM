/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'esm-green': {
          primary: '#2AAE82',
          secondary: '#27B1A6',
          dark: '#17818E',
        },
        'esm-gray': {
          dark: '#2D3748',
          medium: '#718096',
          light: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
