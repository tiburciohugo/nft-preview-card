/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-blue": "#8BACD9",
        cyan: "#00FFF8",
        "blue-main": "#0D192C",
        "blue-card": "#15263F",
        "blue-line": "#2E405A",
        white: "#ffffff",
        black: "333",
      },
      screens: {
        mobile: "376px",
        tablet: "768px",
        laptop: "1024px",
      },
    },
  },
  plugins: [],
};
