const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: path.resolve(__dirname, "public", "javascripts", "index.js"),
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
