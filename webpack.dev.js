const path = require("path");
const fs = require("fs");

module.exports = {
  mode: "developer",
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    filename: "[name].[hash].bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
  },
};
