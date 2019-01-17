const path = require("path");

function koaBody_fn(obj, koaBody) {
  return koaBody(obj);
}

module.exports = (obj = {}) => {
  new_obj = {
    ...obj,
    multipart: true, // 支持文件上传
    // encoding: "gzip", //开启gzip 后ｋｏａ-cors　包４１５　错误
    formidable: {
      uploadDir: path.join(__dirname, "static/upload/"), // 设置文件上传目录
      keepExtensions: true, // 保持文件的后缀
      maxFieldsSize: 200 * 1024 * 1024, // 文件上传大小
      onFileBegin: (name, file) => {
        // 文件上传前的设置
        // console.log(`name: ${name}`);
        // console.log(file);
      }
    }
  };
  const koaBody = require("koa-body");
  return koaBody_fn(new_obj, koaBody);
};
