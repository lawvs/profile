const mergePlugin = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.conf')
const utils = require('./utils')

/**
 * @type {import('webpack').Configuration}
 */
const webpackConfig = mergePlugin.merge(baseWebpackConfig, {
  mode: 'development',
  // https://webpack.js.org/configuration/devtool/
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: '/',
  },
  plugins: [
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: utils.resolvePath('public/index.html'),
      inject: true,
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
    static: { directory: utils.resolvePath('public') },
  },
  performance: {
    hints: false,
  },
})

module.exports = webpackConfig
