const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.js');
process.env.NODE_ENV = 'dev';

const html_w_p = new HtmlWebpackPlugin({
  /**
   * https://webpack.docschina.org/plugins/html-webpack-plugin/
   */
  template: path.resolve(__dirname, '../public/index.html'),
  alwaysWriteToDisk: false,
  inject: true,
  hash: false
});
const hotMiddlewarePlun = new webpack.HotModuleReplacementPlugin();

const devConfig = {
  mode: 'development',
  devServer: {
    //https://webpack.js.org/configuration/dev-server/#src/components/Sidebar/Sidebar.jsx
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: path.resolve(__dirname, '../public'),
    host: 'localhost',
    compress: true, //gzip 亚索
    inline: true, //实时刷新
    port: 9998,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: true,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true
    }
  }
};

config.plugins.push(html_w_p, hotMiddlewarePlun);
config.entry.index.push(
  'webpack-hot-middleware/client?noInfo=true&reload=true'
);
config.module.rules.push({
  test: /\.(htm|html)$/,
  use: 'raw-loader'
});

module.exports = Object.assign({}, config, devConfig);
