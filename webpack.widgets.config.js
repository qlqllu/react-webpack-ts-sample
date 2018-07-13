var path = require('path');
var fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RequireFrom = require('webpack-require-from');

module.exports = {
  entry: {
    'widget': './widgets/widget.js'
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.join(__dirname, 'dist/widgets')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {loader: 'ts-loader'}
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
  },
};
