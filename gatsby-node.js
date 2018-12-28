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

// When path registration is no longer needed
// cleanup();

const { resolve } = require('path');

const config = require('./gatsby-node-config');

exports.createPages = config.createPages;

exports.onCreatePage = config.onCreatePage;

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@src': resolve(__dirname, 'src/'),
        '@test': resolve(__dirname, 'test/')
      }
    }
  })
}
