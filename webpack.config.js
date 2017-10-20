const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: JSON.parse(fs.readFileSync('./.babelrc'))
          },
          'eslint-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map'
    })
  ]
}
