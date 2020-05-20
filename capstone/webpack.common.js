const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
  entry: "./src/client/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    })
  ],
  modules: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
}