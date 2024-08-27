/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        circular: ["circular-std-medium-500", "sans-serif"],
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#F85E9F",
        textColor: "#222831",
        textColor2: "#8B8B91",
        btnColor: "#5D50C6",
        orangeColor: "#FF5722",
      },
    },
  },
  plugins: [],
};
