/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-red-gradient': 'linear-gradient(180deg, #8B0000, #B22222)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}