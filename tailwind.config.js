/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "440px" },
      },
      colors: {
        red: "#FF0000",
        "blood-moon": "#D93731",
        redbox: "#943431",
        grey: "#CECECE",
        jupiter: "#E2E2E2",
        "tropical-forest": "#018524",
        "overgrown-temple": "#157412",
      },
    },
  },
  plugins: [],
};
