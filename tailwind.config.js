/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prifeBlue: '#1E40AF',
        prifeGreen: '#10B981',
        prifeOrange: '#F59E0B',
      }
    },
  },
  plugins: [],
}

