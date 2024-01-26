/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#6E78D1",
        dark_violet: "#525FC9",
        light_orange: "#FFC468",
        black: "#2D2D2D",
      },
      backgroundImage: {
        hero: "url('/src/public/images/HeroBG.png')",
      },
      boxShadow: {
        hero: "0px 0px 11.221px 0px rgba(0, 0, 0, 0.12)",
        card: "3px 3px 5px 0px rgba(160, 150, 180, 0.15)",
      },
    },
  },
  plugins: [],
};
