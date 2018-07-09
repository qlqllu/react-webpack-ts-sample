var path = require('path');
var fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'index': './index.tsx',
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.join(__dirname, 'dist')
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
          {
            loader: 'babel-loader',
            query: {
              presets: [['env', {'modules': false}]],
              plugins: ['babel-plugin-syntax-dynamic-import']
            }
          },
          {loader: 'ts-loader'}
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'app',
      template: 'index.html',
      filename: 'index.html',
      inject: true,            
    })
  ],
  devServer: {
    contentBase: './dist',
  },
};
