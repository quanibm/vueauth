import Axios from "axios";


// 通过和后端约定,判断数据权限

async function apiHome(url, options) {
  let res = await Axios({
    ...options,
    url
  });
  if (!res) {
    console.log("发生了错误");
  } else {
    console.log(res);
    if (res.data.code == 3) {
      console.log("没有权限");
    } else if (res.data.code == 0) {
      return res.data;
    } else {
      return "没有返回";
    }
  }
}

export { apiHome };
