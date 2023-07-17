const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NAME": JSON.stringify("dev name"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    hot: true,
  },
};
