/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require("postcss-sorting")({
      "properties-order": "alphabetical",
    }),
  ],
};

export default config;
