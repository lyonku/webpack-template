import webpack, { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const { mode, paths, platform } = options;
  const isProd = mode === "production";
  const isDev = mode === "development";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, "favicon.ico"),
    }),
    new webpack.ProgressPlugin(),
    new DefinePlugin({ __PLATFORM__: JSON.stringify(platform) }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      })
    );
    plugins
      .push
      // new CopyPlugin({
      //   patterns: [
      //     { from: paths.public, to: path.resolve(paths.output, "assets") },
      //   ],
      // })
      ();
  }

  return plugins;
}
