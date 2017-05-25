/*eslint-disable*/
const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 根据NODE_ENV来启用
const ExtractLess = new ExtractTextPlugin({
  filename: "style/style.[contenthash:8].css",
  disable: process.env.NODE_ENV === "development"
});

const config = {
  entry: {
    main: Path.resolve(__dirname, 'src/app.js')
  },
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    path: Path.resolve(__dirname, 'dist'),
    chunkFilename: "js/[name].[chunkhash:8].js",
    publicPath: "/"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {loader: "css-loader"}
          ]
        })
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {loader: "css-loader"},
            {loader: "less-loader"}
          ]
        })
      }, {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000&name=[name].[ext]&outputPath=images/', {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {quality: 65},
              pngquant: {quality: '65-90', speed: 4},
              svgo: {
                plugins: [{removeViewBox: false}, {removeEmptyAttrs: false}]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        // 该配置假定你引入的 vendor 存在于 node_modules 目录中
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
    new Webpack.optimize.CommonsChunkPlugin({
      // 由于它们之间没有更常见的模块，我们最终只会包含在清单文件中的运行时代码
      name: 'manifest'
    }),
    new HtmlWebpackPlugin({title: 'My Webpack2', filename: 'index.html', template: 'src/index.html'}),
    ExtractLess
  ]
}

module.exports = config;
