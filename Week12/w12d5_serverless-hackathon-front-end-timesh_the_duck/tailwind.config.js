// tailwind.config.js
module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      item: "goldenrod",
      backgroundcolor: "#a33527",
      list: "papayawhip",
      text: "white",
      textlist: "black",
      itemlsd: "#b76Dfd",
      backgroundcolorlsd: "#ff2281",
      listlsd: "#011ffd",
      textlsd: "#75D5FD",
      textlistlsd: "#01ff4f",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
