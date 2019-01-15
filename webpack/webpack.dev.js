const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
process.env.NODE_ENV = "dev";
const config = require("./webpack.config.js");

const html_w_p = new HtmlWebpackPlugin({
  /**
   * https://webpack.docschina.org/plugins/html-webpack-plugin/
   */
  template: path.resolve(__dirname, "../public/index.html"),
  alwaysWriteToDisk: false,
  inject: true,
  hash: false
});

config.plugins.push(html_w_p);

const devConfig = {
  mode: "development",
  devServer: {
    //https://webpack.js.org/configuration/dev-server/#src/components/Sidebar/Sidebar.jsx
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: path.resolve(__dirname, "../public"),
    host: "localhost",
    compress: true, //gzip 亚索
    inline: true, //实时刷新
    port: 9999,
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

module.exports = Object.assign({}, config, devConfig);
