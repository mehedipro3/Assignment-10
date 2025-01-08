/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");
import daisyui from 'daisyui'
// eslint-disable-next-line no-undef
module.exports = withMT({
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
});