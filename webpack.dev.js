/*eslint-disable*/
const Path = require('path');
const Webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.com.js');
const PORT = 8080;

const config = function(env) {
  return Merge(CommonConfig, {
    entry: [
      'react-hot-loader/patch',
      // 开启 React 代码的模块热替换(HMR)
      'webpack-dev-server/client?http://localhost:' + PORT,
      // 为 webpack-dev-server 的环境打包代码
      // 然后连接到指定服务器域名与端口
      'webpack/hot/only-dev-server',
      // 为热替换(HMR)打包好代码
      // only- 意味着只有成功更新运行代码才会执行热替换(HMR)
      Path.resolve(__dirname, 'src/app.js')
    ],
    devtool: 'inline-source-map',
    output: {
      filename: '[name].js',
    },
    plugins: [
      new Webpack.NamedModulesPlugin(),
      new Webpack.HotModuleReplacementPlugin(),
      // 开启全局的模块热替换(HMR)
      new Webpack.HashedModuleIdsPlugin(),
      new Webpack.DefinePlugin({
        'process.env': {'NODE_ENV': JSON.stringify('development')}
      })
    ],
    devServer: {
      hot: true,
      port: PORT,
      host: 'localhost',
      open: true,
      historyApiFallback: true,
      stats: {errors: true, errorDetails: true, warnings: false, chunks: false},
      publicPath: "/",
      contentBase: Path.resolve(__dirname, 'dist'),
      overlay: {warnings: true, errors: true},
      openPage: ''
    }
  })
}

module.exports = config;
