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
        "accent-light": "#0D9488",
        "accent-dark": "#14B8A6",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lexendDeca: ["Lexend Deca", "sans-serif"],
        ubuntuMono: ["Ubuntu Mono", "monospace"],
      },
      gridTemplateColumns: {
        "blog-card": "2fr 3fr",
      },
      flexGrow: {
        2: 2,
        3: 3,
        4: 4,
      },
      animation: {
        "click-me": "click-me 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-70": "pulse-70 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "click-me": {
          "0%, 100%": {
            opacity: 0.0,
          },
          "50%": {
            opacity: 0.5,
          },
        },
        "pulse-70": {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.7,
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
