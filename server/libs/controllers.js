const fs = require("fs");

function addControllers(router, dir) {
  const files = fs
    .readdirSync(__dirname + `/../${dir}`)
    .filter(f => f.endsWith(".js"))
    .forEach((f, k) => {
      console.log(`扫描到文件 ${f}; process controller: ${f}...`);
      let mapping = require(__dirname + `/../${dir}/${f}`);
      addMapping(router, mapping);
    });
}

function addMapping(router, mapping) {
  for (let url in mapping) {
    if (url.startsWith("GET ")) {
      let path = url.substring(4);
      router.get(path, mapping[url]);
      console.log(`成功注册URL mapping: GET ${path}`);
    } else if (url.startsWith("POST ")) {
      let path = url.substring(5);
      router.post(path, mapping[url]);
      console.log(`成功注册url mapping: POST ${path}`);
    } else {
      console.log(`无效url`);
    }
  }
}

module.exports = (dir = "controllers") => {
  /**@dir 如果外部调用的时候没有传路径过来的话默认扫描controllers */
  let controllers_dir = dir,
    router = require("koa-router")();
  addControllers(router, controllers_dir);
  return router.routes();
};
