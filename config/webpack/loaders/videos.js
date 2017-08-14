const { env, publicPath } = require('../configuration.js')

module.exports = {
  test: /\.(mp4|webm)$/i,
  use: [{
    loader: 'file-loader',
    options: {
      publicPath,
      name: env.NODE_ENV === 'production' ? 'assets/videos/[name]-[hash].[ext]' : 'assets/videos/[name].[ext]'
    }
  }]
}