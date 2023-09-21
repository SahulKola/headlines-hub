/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        accent: {
          normal: "#D72406",
          dark: "#BE1D02",
        },
      },
    },
  },
  plugins: [],
};
