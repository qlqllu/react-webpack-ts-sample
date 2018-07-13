var path = require('path');
var fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RequireFrom = require('webpack-require-from');

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
  /* node: {
    fs: "empty"
 }, */
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          /* {
            loader: 'babel-loader',
            query: {
              presets: [['env', {'modules': false}]],
              plugins: ['babel-plugin-syntax-dynamic-import']
            }
          }, */
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
      inject: true
    }),
    new	 RequireFrom({
      methodName: 'setSDN',
      // path: 'customPath/',
      replaceSrcMethodName: 'replaceDynamicSrc'
    })
  ],
  devServer: {
    contentBase: './dist',
  },
};
