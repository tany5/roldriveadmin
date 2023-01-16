/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    minWidth: {
      '1/2': '50%',
    },
    colors:{
      'primary': "#ec5c29",
      'grey': "#F4F7FE",
      "tgrey": "#bfbfbf"
    },
    extend: {},
  },
  plugins: [],
}
