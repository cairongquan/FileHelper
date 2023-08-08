const path = require("path");
const ts = require("rollup-plugin-typescript2");

module.exports = {
  input: "./src/index.ts",

  output: {
    name: "FielHelper",
    file: path.resolve(__dirname, "index.js"),
    sourcemap: true,
    format: "umd",
  },

  plugins: [ts()],
};
