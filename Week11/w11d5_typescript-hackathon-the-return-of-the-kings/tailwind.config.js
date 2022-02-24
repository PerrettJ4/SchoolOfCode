module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      "green-100": "#b7efc5",
      "green-200": "#92e6a7",
      "green-300": "#6ede8a",
      "green-400": "#4ad66d",
      "green-500": "#2dc653",
      "green-600": "#25a244",
      "green-700": "#208b3a",
      "green-800": "#1a7431",
      "green-900": "#155d27",
      "green-1000": "#10451d",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
