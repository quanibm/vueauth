const path = require('path');
const Koa = require('koa');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMiddleware = require('./middleware/devMiddleware');
const hotMiddleware = require('./middleware/hotMiddleware');
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
config.plugins.push(html_w_p);

const devConfig = {
  mode: 'development'
  // devServer: {
  //   //https://webpack.js.org/configuration/dev-server/#src/components/Sidebar/Sidebar.jsx
  //   historyApiFallback: true,
  //   disableHostCheck: true,
  //   contentBase: path.resolve(__dirname, '../public'),
  //   host: 'localhost',
  //   compress: true, //gzip 亚索
  //   inline: true, //实时刷新
  //   port: 9999,
  //   stats: {
  //     assets: true,
  //     children: false,
  //     chunks: false,
  //     hash: true,
  //     modules: false,
  //     publicPath: false,
  //     timings: true,
  //     version: false,
  //     warnings: true
  //   }
  // }
};
const compiler = webpack(Object.assign({}, config, devConfig));
const middleware = require('koa-webpack');
const app = new Koa();
app.use(
  devMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);
app.use(hotMiddleware(compiler));
// app.use(
//   middleware({
//     compiler: compiler
//   })
// );
app.listen(9999, () => {
  console.log('app started at port 9999');
});

// module.exports = Object.assign({}, config, devConfig);
