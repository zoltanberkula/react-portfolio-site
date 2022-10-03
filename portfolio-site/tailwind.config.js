/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      colors: {
        charCoal: "#2F3E46",
        darkSlateGray: "#354F52",
        hookersGreen: "#52796F",
        darkSeaGreen: "#84A98C",
        ashGray: "#CAD2C5",
      },
    },
  },
  plugins: [],
};
