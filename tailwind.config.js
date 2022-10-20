/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-blue-400": "#415a77",
        "navy-blue-600": "#1B263B",
        "navy-blue-700": "#182437",
        "navy-blue-800": "#0D1B2A",
        "smoke-500": "#E0E1DD",
        "smoke-600": "#C6CCD0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lexendDeca: ["Lexend Deca", "sans-serif"],
      },
      flexGrow: {
        2: 2,
        3: 3,
        4: 4,
      },
      animation: {
        "slide-in-from-right": "slide-in-from-right 0.5s ease normal",
        "slide-out-to-right": "slide-out-to-right 0.5s ease normal",
      },
      keyframes: {
        "slide-in-from-right": {
          "0%": {
            transform: "translateX(500px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        "slide-out-to-right": {
          "0%": {
            transform: "translateX(0px)",
          },
          "100%": {
            transform: "translateX(500px)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
