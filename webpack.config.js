const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const plugins = [
  new CleanWebpackPlugin(['dist/js'], {
    verbose: true
  }),
  new HtmlWebpackPlugin({
    // template: 'index.ejs',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    },
    chunksSortMode: 'dependency'
  })
]

module.exports = {
  devtool: 'eval-source-map',
  entry: ['./src/client'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        exclude: [/node_modules/, require.resolve('./dist/index.html')],
        use: {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.jsx?$/,
        loaders: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css!'
      }
    ]
  },
  plugins: plugins
}
