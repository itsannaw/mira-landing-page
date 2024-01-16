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
        hero: "url('/src/assets/images/HeroBG.png')",
      },
      boxShadow: {
        hero: "0px 0px 11.221px 0px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
