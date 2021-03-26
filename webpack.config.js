module.exports = {
  entry: "./src",
  output: {
    filename: "./build/bundle.js",
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
};
