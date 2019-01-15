const Koa = require("koa");
const router = require("koa-router")();
const koaBody = require("koa-body");
const koaCors = require("koa-cors");

const app = new Koa();
const port = 9998;

app.use(koaCors());
app.use(koaBody());

router.get("/", async (ctx, next) => {
  ctx.response.body = {
    code: 0,
    list: [1, 2, 3, 4]
  };
});

app.use(router.routes());
app.listen(port, () => {
  console.log(`app started ${port}`);
});
