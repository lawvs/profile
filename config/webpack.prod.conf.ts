import HtmlWebpackPlugin from 'html-webpack-plugin'
import type { Configuration } from 'webpack'
import mergePlugin from 'webpack-merge'
import { resolvePath } from './utils'
import baseWebpackConfig from './webpack.base.conf'

const webpackConfig: Configuration = mergePlugin(baseWebpackConfig, {
  mode: 'production',
  bail: true,
  devtool: process.env.CI ? 'source-map' : false,
  output: {
    filename: '[name].[chunkhash:8].js',
    clean: {
      keep: 'user.json',
    },
  },
  plugins: [
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: resolvePath('public/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
})

module.exports = webpackConfig
