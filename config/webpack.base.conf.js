const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const utils = require('./utils')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: process.env.NODE_ENV,
  entry: utils.resolvePath('src/index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
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
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      // Make a global `process` variable that points to the `process` package,
      // because the `util` package expects there to be a global variable named `process`.
      // Thanks to https://stackoverflow.com/a/65018686/14239942
      process: 'process/browser',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: utils.resolvePath('public'),
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
}
