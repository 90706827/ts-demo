const { Configuration } = require("webpack");
const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const CssExtractPlugin = require("mini-css-extract-plugin");

/**
 * @type {Configuration}
 */
const config = {
  mode: "development",
  entry: "./src/main.ts", // 文件入口
  output: {
    path: path.resolve(__dirname, "dist"), //生成的目录
    filename: "[chunkhash].js", //打包之后的文件 重名采用[]
    clean: true, // 清空打包结果
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
    new CssExtractPlugin(),
  ], // webpack的插件都是class 都需要new
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader", // 处理ts文件
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      },
      {
        test: /\.vue$/,
        use: "vue-loader", // 处理vue文件
      },
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"], // 从右向左
        use: [CssExtractPlugin.loader, "css-loader"], // 从右向左
      },
      {
        test: /\.less$/,
        // use: ["style-loader", "css-loader", "less-loader"], // 从右向左
        use: [CssExtractPlugin.loader, "css-loader", "less-loader"], // 从右向左
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        moment: {
          name: "moment",
          chunks: "all",
          test: /[\\/]node_modules[\\/]moment[\\/]/,
        },
        common: {
          name: "common",
          chunks: "all",
          minChunks: 2, // 他的引用次数大于2个就会被分割出来
          test: /[\\/]node_modules[\\/]common[\\/]/,
        },
      },
    },
  },
};

module.exports = config;
