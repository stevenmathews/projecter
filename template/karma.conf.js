'use strict'

module.exports = function (config) {
  config.set({
    basePath: '',
    files: [
      'test/**/*.js'
    ],
    exclude: [
    ],
    frameworks: ['mocha', 'sinon-chai'],
    browsers: ['Chrome'],
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false
  })
}
