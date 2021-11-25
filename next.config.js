const { ADMIN_URL } = process.env
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  future: {
    webpack5: true // by default, if you customize webpack config, they switch back to version 4. 
    // Looks like backward compatibility approach.
  },
  webpack(config) {
    config.resolve.fallback = { fs: false }
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    return config
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/admin',
        destination: `${ADMIN_URL}/admin`,
      },
      {
        source: '/admin/:path*',
        destination: `${ADMIN_URL}/admin/:path*`,
      },
    ]
  },
}

module.exports = {
  env: {
    customKey: 'my-value'
  }
}
