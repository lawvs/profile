const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const utils = require('./utils')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: process.env.NODE_ENV,
  entry: utils.resolvePath('src/index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', 'json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[chunkhash:7].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: utils.resolvePath(),
    }),
    new CopyWebpackPlugin([
      {
        from: utils.resolvePath('public'),
        to: '[name].[ext]',
        ignore: ['index.html'],
      },
    ]),
  ],
}
