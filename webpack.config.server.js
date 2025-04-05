const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const webpackNodeExternals = require('webpack-node-externals')

module.exports = merge(baseConfig, {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: [webpackNodeExternals()],
})
