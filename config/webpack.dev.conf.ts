import HtmlWebpackPlugin from 'html-webpack-plugin'
import type { Configuration as WebpackConfiguration } from 'webpack'
import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import mergePlugin from 'webpack-merge'
import { resolvePath } from './utils'
import baseWebpackConfig from './webpack.base.conf'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const webpackConfig: Configuration = mergePlugin(baseWebpackConfig, {
  mode: 'development',
  // https://webpack.js.org/configuration/devtool/
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: '/',
  },
  plugins: [
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: resolvePath('public/index.html'),
      inject: true,
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
    static: { directory: resolvePath('public') },
  },
  performance: {
    hints: false,
  },
})

module.exports = webpackConfig
