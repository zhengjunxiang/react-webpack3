/*eslint-disable*/
const os = require('os');
const Path = require('path');
const Webpack = require('webpack');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
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
    modules: [Path.resolve(__dirname, 'node_modules')],
    alias: {
      'moment': 'moment/min/moment.min.js'
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    noParse: /node_modules\/(jquey|moment|chart\.js)/,
    rules: [
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: Path.resolve(__dirname, './node_modules', 'happypack/loader') + '?id=css'
        })
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            Path.resolve(__dirname, './node_modules', 'happypack/loader') + '?id=less',
          ]
        })
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['happypack/loader?id=happybabel']
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader?limit=10000&name=[name].[ext]&outputPath=images/']
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: ['url-loader?limit=30000&name=[name].[ext]&outputPath=fonts/']
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
    new HtmlWebpackPlugin({title: 'My Webpack3', filename: 'index.html', template: 'src/index.html'}),
    ExtractLess,
    new HappyPack({
      id: 'happybabel',
      loaders: ['babel-loader?cacheDirectory=true'],
      threadPool: happyThreadPool
    }),
    new HappyPack({
      id: 'less',
      loaders: ['css-loader!less-loader'],
      threadPool: happyThreadPool
    }),
    new HappyPack({
      id: 'css',
      loaders: ['css-loader?mportLoaders=1'],
      threadPool: happyThreadPool
    })
  ]
}

module.exports = config;
