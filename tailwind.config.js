/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],

  animation: {
    shimmer: "shimmer 1s infinite",
  },
  keyframes: {
    shimmer: {
      "0%": {
        backgroundPosition: "-1000px 0",
      },
      "100%": {
        backgroundPosition: "1000px 0",
      },
    },
  },
};
