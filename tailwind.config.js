const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      "grid-rows-9",
      "grid-rows-4",
      "grid-cols-9",
      "grid-cols-4",
      "grid-rows-3",
      "grid-rows-2",
      "grid-cols-3",
      "grid-cols-2",
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: { max: "639px" },
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
