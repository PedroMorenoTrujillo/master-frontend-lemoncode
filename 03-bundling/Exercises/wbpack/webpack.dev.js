import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    port: 8080,
    devMiddleware: {
      stats: "errors-only",
    },
  },
});
