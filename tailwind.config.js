/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'FullSize': "100% 100%"
      },
      backgroundImage: {
        'bg_layerthing': "linear-gradient(180deg, rgba(0, 0, 0, 0.75) 18.25%, rgba(0, 0, 0, 0.0587349) 100%)"
      }
    },
  },
  plugins: [],
}
