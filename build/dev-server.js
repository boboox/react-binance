'use strict'
const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

const port = 8080;
const autoOpenBrowser = true;

const app = express()
const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: false
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: false,
    heartbeat: 2000
})

app.use(hotMiddleware)

app.use(require('connect-history-api-fallback')())

app.use(devMiddleware)

const uri = 'http://localhost:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
    _resolve = resolve
    _reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
    portfinder.getPort((err, port) => {
        if (err) {
            _reject(err)
        }
        process.env.PORT = port
        var uri = 'http://localhost:' + port
        console.log('> Listening at ' + uri + '\n')
        // when env is testing, don't need open it
        if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
            opn(uri)
        }
        server = app.listen(port)
        _resolve()
    })
})

module.exports = {
    ready: readyPromise,
    close: () => {
        server.close()
    }
}
