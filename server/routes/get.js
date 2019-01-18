const appData = require('../../data.json');
const { seller, goods, ratings } = appData;


const seller_fn = ctx => {
  ctx.response.body = {
    code: 200,
    data: seller
  };
};

const goods_fn = ctx => {
  ctx.response.body = {
    code: 200,
    data: goods
  };
};

const rating_fn = ctx => {
  ctx.response.body = {
    code: 200,
    data: ratings
  };
};

module.exports = {
  'GET /api/seller': seller_fn,
  'GET /api/goods': goods_fn,
  'GET /api/ratings': rating_fn
};
