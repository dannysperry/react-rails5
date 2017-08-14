const { join } = require('path')
const { env, publicPath } = require('../configuration.js')

module.exports = {
  test: /\.(eot|ttf|woff|woff2)$/i,
  use: [{
    loader: 'file-loader',
    options: {
      publicPath,
      name: env.NODE_ENV === 'production' ? 'assets/fonts/[name]-[hash].[ext]' : 'assets/fonts/[name].[ext]'
    }
  }]
}