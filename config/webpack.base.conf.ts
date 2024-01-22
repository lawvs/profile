import type { Configuration } from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'

import { resolvePath } from './utils'

const baseWebpackConfig: Configuration = {
  mode: process.env.NODE_ENV as any,
  entry: resolvePath('src/index.tsx'),
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
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolvePath('public'),
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
}

export default baseWebpackConfig
