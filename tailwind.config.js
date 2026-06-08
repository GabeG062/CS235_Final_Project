// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        cream:  "#FFF8E7",
        coral:  "#FF6B6B",
        sunny:  "#FFD93D",
        mint:   "#6BCB77",
        sky:    "#4D96FF",
        purple: "#C77DFF",
      },
    },
  },
  plugins: [],
};
