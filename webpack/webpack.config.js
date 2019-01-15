const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const mqpacker = require('css-mqpacker');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const process = require('process');
//插件实例
console.log(process.env.NODE_ENV);
const clean_w_p = new CleanWebpackPlugin(['../dist'], {
  root: path.resolve(__dirname, '..'),
  verbose: true
});
const extract_w_p = new ExtractTextPlugin({
  filename: 'bundle.css',
  disable: false,
  allChunks: true
});

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, '../src/index.js')],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/', //如果react-router 在多级路由下找不到css 或者js 资源的话配置这个可以解决
    filename: 'bundle.js'
  },

  resolve: {
    modules: ['node_modules', 'src'], // import时到哪些地方去寻找模块
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'], // require的时候可以直接使用require('file')，不用require('file.js')
    alias: {
      reducers: `${path.resolve(__dirname)}/../src/common/reducers`,
      vue: 'vue/dist/vue.js' //因为是使用webpack，默认实用的是vue的runtime版本，不包含编译，因此会报错，在config中添加如下代码
    } //别名
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: process.env.NODE_ENV !== 'production'
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        query: {
          presets: [
            'env',
            'es2015',
            'stage-0',
            'react'
          ] /**加入babel-preset-stage-0 并使用这个配置就能使用es7的语法,但是它回报更多的错误,所以我放弃了它 */,
          plugins: [
            'transform-runtime',
            'transform-decorators-legacy', //http://es6.ruanyifeng.com/#docs/decorator#%E7%B1%BB%E7%9A%84%E4%BF%AE%E9%A5%B0
            // "transform-class-properties",
            // "transform-object-rest-spread",
            // "emotion",
            // [
            //   "zent",
            //   {
            //     moduleMappingFile: "zent/lib/module-mapping.json",
            //     noModuleRewrite: false,
            //     automaticStyleImport: true,
            //     useRawStyle: false
            //     /**https://youzan.github.io/zent/zh/guides/babel-plugin-zent#babel-plugin-zent */
            //   }
            // ],
            [
              'import',
              {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: 'css' // `style: true` 会加载 less 文件
              }
            ]
          ]
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                minimize: process.env.NODE_ENV === 'production', //是否压缩css
                modules: false, //开启将会吧选择器变成随机字符串
                // localIdentName: "[path][name]__[local]--[hash:base64:5]",
                // getLocalIdent: (
                //   context,
                //   localIdentName,
                //   localName,
                //   options
                // ) => {
                //   return "whatever_random_class_name";
                // }
                publicPath: '/'
              }
            },
            'sass-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [precss(), autoprefixer(), mqpacker()]
              }
            }
          ]
        })
      },
      // {
      //   test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      //   loader: "url-loader",
      //   options: {
      //     name: "[path][name].[ext]",
      //     limit: 1024 * 10,
      //     fallback: "file-loader"
      //   }
      // },
      {
        test: /\.(png|jpg|gif|mp3)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              // outputPath: 'images'
              publicPath: '/',
              emitFile: true //默认情况下会生成文件，可以通过将此项设置为 false 来禁用（例如使用了服务端的 packages）。
              //useRelativePath: process.env.NODE_ENV === "production" //如果你希望为每个文件生成一个相对 URL 的 context 时，应该将 useRelativePath 设置为 true。
            }
          }
        ]
      }
    ]
  },
  plugins: [clean_w_p, extract_w_p, new VueLoaderPlugin()]
};
