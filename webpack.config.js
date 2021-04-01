module.exports = {
  entry: "./src",
  output: {
    filename: "./build",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js"],
  },
  loaders: [{ test: /\.ts?$/, loader: "awesome-typescript-loader" }],
  preLoaders: [{ test: /\.js$/, loader: "source-map-loader" }],
};
