

const hello = async (ctx) => {
  ctx.response.body = {
      code: 200,
      msg: `我是hello， 我呗请求了`
  }
}


module.exports = {
    'GET /hello' : hello
}