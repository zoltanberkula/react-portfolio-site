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
        bgColor_LightMode: "#1A6574",
        bgColor_DarkMode: "#1C2541",
        bgColor_CardLight: "#1A6574",
        bgColor_CardDark: "#164e63",
        iconColor_SocialLight: "#111827",
        iconColor_SocialDark: "#164e63",
        textColor_LightMode: "#111827",
        textColor_DarkMode: "#164e63",
      },
    },
  },
  plugins: [],
};
