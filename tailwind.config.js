/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2A7BE4",
        "background-light": "#f5f8ff",
        "background-dark": "#111121",
        "text-light": "#333333",
        "text-dark": "#f5f8ff",
        "card-light": "#ffffff",
        "card-dark": "#1a1a2e",
        "subtle-light": "#646487",
        "subtle-dark": "#a0a0c0",
        "border-light": "#dcdce5",
        "border-dark": "#33334d",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
      letterSpacing: {
        light: "-0.01em", // tracking-light
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
