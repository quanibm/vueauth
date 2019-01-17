const path = require('path');
const Koa = require('koa');
const router = require('koa-router')();
const views = require('koa-views');
const koaStatic = require('koa-static');
const compress = require('koa-compress');
const webpack = require('webpack');
const koaBody = require('./libs/koaBody');
const cors = require('./libs/cors');
// const devMiddleware = require('../webpack/middleware/devMiddleware');
// const hotMiddleware = require('../webpack/middleware/hotMiddleware');
const koaWepack = require('koa-webpack');
const devMiddleware = require('koa-webpack-dev-middleware');
const hotMiddleware = require('koa-webpack-hot-middleware');

const app = new Koa();

class AngelConfig {
  constructor(options) {
    this.config = require(options.configUrl);
    this.router = require(options.routerUrl);
    this.webpackConfig = require(options.webpackUrl);
    this.compiler = webpack(this.webpackConfig);
    this.app = app;
    this.setDefaultConfig();
    this.setServerConfig();
  }

  setDefaultConfig() {
    //静态文件根目录
    this.config.root = this.config.root
      ? this.config.root
      : path.join(process.cwd(), 'server/static');
    //模板
    this.config.views = this.config.views
      ? this.config.views
      : path.join(process.cwd(), 'server/views');
    //默认静态配置
    this.config.static = this.config.static ? this.config.static : {};
  }

  setServerConfig() {
    //设置端口号
    this.port = this.config.listen.port;
    //cookie签名加密
    this.app.keys = this.config.keys ? this.config.keys : this.app.keys;
  }
}

//启动服务器
class AngelServer extends AngelConfig {
  constructor(options) {
    super(options);
    this.startService();
  }

  startService() {
    //开启gzip压缩
    this.app.use(compress(this.config.compress));

    //跨域
    this.app.use(cors());
    this.app.use(koaBody());
    this.app.use(
      views(this.config.views, {
        extension: 'ejs'
      })
    );

    //访问日志
    // this.app.use(async (ctx, next) => {
    //   await next();
    //   const rt = ctx.response.get('X-Response-Time');
    //   ctx.logger.info(
    //     `angel ${ctx.method}`.green,
    //     ` ${ctx.url} - `,
    //     `${rt}`.green
    //   );
    // });

    // 响应时间;
    this.app.use(async (ctx, next) => {
      const start = Date.now();
      await next();
      const ms = Date.now() - start;
      ctx.set('X-Response-Time', `${ms}ms`);
    });
    //路由管理
    // this.router({
    //   router,
    //   config: this.config,
    //   app: this.app
    // });

    // this.app.use(router.routes())
    //   .use(router.allowedMethods());

    // 静态资源
    this.app.use(koaStatic(this.config.root, this.config.static));

    this.app.use(
      devMiddleware(this.compiler, {
        noInfo: true,
        reload: true,
        publicPath: this.webpackConfig.output.publicPath
      })
    );
    this.app.use(hotMiddleware(this.compiler), { noInfo: true, reload: true });

    // this.app.use(async (ctx) => {
    //   const filename = path.resolve(this.webpackConfig.output.path, 'index.html')
    //   ctx.response.type = 'html'
    //   console.log(devMiddleware.fileSystem.createReadStream(filename));
    //   ctx.response.body = devMiddleware.fileSystem.createReadStream(filename)1111
    // });
    // this.koawebpack = async () => {
    //   let
    //   return await koaWepack({ compiler: this.compiler });
    // };

    // this.app.use(this.koawebpack);
    // this.app.use(
    //   koaWepack(this.compiler, {
    //     // hot: {
    //     //   log: () => { }
    //     // },
    //     // dev: {
    //     //   noInfo: true,
    //     //   serverSideRender: true,
    //     //   hot: true,
    //     //   logLevel: 'error',
    //     //   stats: {
    //     //     colors: true
    //     //   },
    //     //   publicPath: ''
    //     // }
    //   })
    // );

    // 启动服务器
    this.app.listen(this.port, () => {
      console.log(`当前服务器已经启动,请访问`, `http://127.0.0.1:${this.port}`);
    });
  }
}

var server = new AngelServer({
  routerUrl: path.join(process.cwd(), 'server/routes/router.js'), //路由地址
  configUrl: path.join(process.cwd(), 'server/config/config.default.js'), //默认读取config/config.default.js
  webpackUrl: path.join(process.cwd(), 'webpack/webpack.dev.js')
});
