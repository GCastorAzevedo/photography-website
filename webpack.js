const path = require("path");

// TODO: load styles first on header

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: path.resolve(__dirname, "public", "javascripts", "index.js"),
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    filename: "bundle.js",
    library: "utils",
    libraryTarget: "umd",
    // libraryTarget: "var",
    // library: "EntryPoint",
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
