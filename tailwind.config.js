const {heroui} = require("@heroui/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(card|divider|dropdown|skeleton|user|ripple|menu|popover|button|spinner|avatar).js"
  ],
    theme: {
      extend: {
        animation: {
            move: "move 5s linear infinite",
          },
          keyframes: {
            move: {
              "0%": { transform: "translateX(-200px)" },
              "100%": { transform: "translateX(200px)" },
            },
          },
        colors: {
          primary: "#3a31d8", // Custom primary color (adjust as needed)
          secondary: "#EC4899", // Custom secondary color
          background: "#00000", // Light background
          text: "#ebe9fc"
        },
        container: {
          center: true,
          padding: "1rem",
        },
        borderRadius: {
          xl: "1rem",
          "2xl": "1.5rem",
        },
        boxShadow: {
          soft: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    darkMode: "class", // Enables dark mode (toggle with 'class' strategy)
  plugins: [require("@tailwindcss/forms"),require("@tailwindcss/typography"),heroui()],
  };
  