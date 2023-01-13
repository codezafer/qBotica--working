const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
    assetModuleFilename: "assets/img/[hash][ext][query]"
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      favicon: "./public/favicon.png",
    }),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            //pollyfill required
            presets: [['@babel/preset-env', { targets: "defaults", "debug": true, "useBuiltIns": "usage", "corejs": 3 }], ['@babel/preset-react', { runtime: "automatic" }]]
          }
        }
      },

      {
        test: /\.(s[ac]|c)ss$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: { publicPath: "" },
        },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },


      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },

      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        type: "asset",
      },
    ]
  },

  devServer: {
    hot: true,
    port: 7000,
    open: true,
    historyApiFallback: true,
    historyApiFallback: {
      disableDotRule: true
    },
  },
  // proxy: {
  //   '/api': 'http://localhost:3000',
  //   changeOrigin: true,
  // },
}