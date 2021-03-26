module.exports = {
  entry: "./src",
  output: {
    filename: "./build/bundle.js",
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
};
