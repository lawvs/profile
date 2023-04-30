const url = require('url')
const mergePlugin = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.conf')
const utils = require('./utils')

const publicUrl = process.env.PUBLIC_URL || '/'
const publicPath = url.parse(publicUrl).pathname

/**
 * @type {import('webpack').Configuration}
 */
const webpackConfig = mergePlugin.merge(baseWebpackConfig, {
  mode: 'production',
  bail: true,
  devtool: process.env.CI ? 'source-map' : false,
  output: {
    filename: '[name].[chunkhash:8].js',
    publicPath: publicPath,
    clean: true,
  },
  plugins: [
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: utils.resolvePath('public/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
})

module.exports = webpackConfig
