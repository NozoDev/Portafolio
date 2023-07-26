/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DynaPuff: ["Dancing Script", "cursive"],
      },
      colors: {
        "gray-d": "#181823",
        "dark": "#1B262C",
        "blue": "#0F4C75",
        "winter": "#3282B8",
        "cold": "#BBE1FA",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    "daisyui",
    require("autoprefixer"),
    Myclass,
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
