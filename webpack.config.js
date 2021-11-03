const { resolve } = require("path")

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "public"),
  },
  devServer: {
    static: {
      directory: resolve(__dirname, "public"),
    },
    compress: false,
  },
}
