var getConfig = require('hjs-webpack')
var layout = require('./src/pre-render/layout')
var head = require('./src/pre-render/head')
var notFound = require('./src/pre-render/not-found')
 
module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  isDev: process.env.NODE_ENV !== 'production',
  html: function (data) {
    return {
      'index.html': data.defaultTemplate({html: layout, head: head}),
      '200.html': data.defaultTemplate({html: notFound})
    }
  }
})
