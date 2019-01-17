const path = require('path');
module.exports = {
  root: path.join(__dirname, '../static'),
  views: path.join(__dirname, '../views'),
  static: {},
  listen: {
    port: 9998
  },
};
