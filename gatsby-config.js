'use strict'

require('source-map-support').install()

require("tsconfig-paths").register({
  baseUrl: './',
  paths: {
    '@src/*': [ 'src/*' ],
    '@test/*': [ 'test/*' ]
  }
});

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
    noImplicitAny: false
  }
})

const config = require('./gatsby-config-config');

module.exports = {
  siteMetadata: config.siteMetadata,
  plugins: config.plugins
}
