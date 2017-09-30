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
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
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
