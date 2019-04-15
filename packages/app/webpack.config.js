const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.partial.hydration.js"),
  output: {
    path: path.resolve(__dirname, "/dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
