'use strict'

require('source-map-support').install()

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
})

const config = require('./gatsby-config-config');

module.exports = {
  siteMetadata: config.siteMetadata,
  plugins: config.plugins
}
