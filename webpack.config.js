const HtmlWebpackPlugin = require('html-webpack-plugin') // installed via npm
const path = require('path')

module.exports = {
  entry: './src/main.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ],
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      }]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  resolve: {
    alias: {vue: 'vue/dist/vue.js'}
  }
}
