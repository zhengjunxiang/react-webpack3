/*eslint-disable*/
const Path = require('path');
const Webpack = require('webpack');
const Merge = require('webpack-merge');
const WebpackChunkHash = require("webpack-chunk-hash");
const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
const CommonConfig = require('./webpack.com.js');

const config = function(env) {
  return Merge(CommonConfig, {
    stats: {
      errors: true, errorDetails: true, warnings: false, chunks: false
    },
    plugins: [
      new Webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new Webpack.DefinePlugin({
        'process.env': {'NODE_ENV': JSON.stringify('production')}
      }),
      new Webpack.optimize.UglifyJsPlugin({
        beautify: false,
        compress: true,
        comments: false
      }),
      new Webpack.NoEmitOnErrorsPlugin(),
      new Webpack.HashedModuleIdsPlugin(),
      new ChunkManifestPlugin({
        filename: 'chunk-manifest.json',
        manifestVariable: 'webpackManifest',
        inlineManifest: true
      }),
      new WebpackChunkHash()
    ]
  })
}

module.exports = config;
