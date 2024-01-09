/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#6E78D1",
        dark_violet: "#525FC9",
        light_orange: "#FFC468",
      },
    },
  },
  plugins: [],
};
