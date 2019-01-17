const fs = require("fs");
const path = require("path");
const mongo = require("../db/mongodb/mongo");
const Chatm = mongo.getModel("chat");
// Chatm.remove({}, function () {
    
// })
module.exports = server => {
  const io = require("socket.io")(server);
  //    (async io => {
  //     const socket = await io.on("connection");
  //     if (socket) {
  //         console.log('链接mongodb成功')
  //       const data = await socket.on("sendMsg");
  //       const { from, to, msg } = data;
  //       const user = [from, to].sort().join("_");
  //       const res = await Chatm.create({ user, from, to, content: msg });
  //       if (res) {
  //         await io.emit("recvmsg", Object.assign({}, res));
  //       }
  //     }
  //   })(io)

  // io.on("connection", function(socket) {
  //   /* … */

  //   console.log("user login..socket 戳链接橙色");
  //   socket.on("sendMsg", data => {
  //     const { from, to, msg } = data;
  //     const user = [from, to].sort().join("_");
  //     Chatm.create({ user, from, to, content: msg }, function(err, doc) {
  //       if (!err) {
  //           console.log("我两次")
  //         io.emit("recvmsg", Object.assign({}, doc));
  //       }
  //     });
  //   });
  // });
  return server;
};
