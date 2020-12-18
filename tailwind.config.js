module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        "brick-wall-texture": "url('./assets/dark-brick-wall-texture.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
