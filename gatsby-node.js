'use strict'

require('source-map-support').install()

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
})

const config = require('./gatsby-node-config');

exports.createPages = config.createPages;

exports.onCreatePage = config.onCreatePage;
