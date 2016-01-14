'use strict'

const webpackConfigLoaders = require('./webpack.config.js').module.loaders

module.exports = function (config) {
  config.set({
    basePath: '',
    files: [
      'test/test-index.js'
    ],
    exclude: [
    ],
    frameworks: ['mocha', 'sinon-chai'],
    browsers: ['Chrome'],
    reporters: ['mocha'],
    preprocessors: {
      'test/test-index.js': ['webpack', 'sourcemap']
    },
    webpack: {
      module: {
        loaders: webpackConfigLoaders
      },
      devtool: 'inline-source-map'
    },
    webpackMiddleware: {
      noInfo: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false
  })
}
