const { env, publicPath } = require('../configuration.js')

module.exports = {
  test: /\.(jpg|jpeg|png|gif|svg)$/i,
  use: [{
    loader: 'file-loader',
    options: {
      publicPath,
      name: env.NODE_ENV === 'production' ? 'assets/images/[name]-[hash].[ext]' : 'assets/images/[name].[ext]'
    }
  }]
}