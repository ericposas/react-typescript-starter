const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
dotenv.config();

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx')
  },
  mode: process.env.MODE,
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules'
      }
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new htmlPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ]
}
