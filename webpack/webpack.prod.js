const path = require("path");
const process = require("process");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "production";
const config = require("./webpack.config.js");

// const copy_w_p = new CopyWebpackPlugin([
//   {
//     from: path.resolve(`${path.resolve(__dirname)}/../../src/files`),
//     to: path.resolve(`${path.resolve(__dirname)}/../public/admin/files`)
//   }
// ]);
const clean_w_p = new CleanWebpackPlugin(['dist'], {
  root: path.resolve(process.cwd()),
  verbose: true
});
const html_w_p = new HtmlWebpackPlugin({
  /**
   * https://webpack.docschina.org/plugins/html-webpack-plugin/
   */
  template: path.resolve(__dirname, "../public/index.html"),
  alwaysWriteToDisk: false,
  inject: true,
  hash: false,
  minify: {
    collapseWhitespace: true,
    decodeEntities: true,
    html5: true,
    processConditionalComments: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeTagWhitespace: true,
    sortAttributes: true,
    sortClassName: true,
    useShortDoctype: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  }
});
const prodConfig = {
  mode: "production"
};


config.plugins.push(
  //  copy_w_p,
  html_w_p
);
config.plugins.unshift(clean_w_p)

module.exports = Object.assign({}, config, prodConfig);
