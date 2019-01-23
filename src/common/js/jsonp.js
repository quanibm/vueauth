import originJsonp from 'jsonp';

function jsonp(url, data, option) {
  url += /\?$/.test(url) ? '&' : '?' + param(data);
  console.log(url);
  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}

function param(data) {
  let url = '';
  for (let k in data) {
    let value = !!data[k] ? data[k] : '';
    url += `&${k}=${encodeURIComponent(value)}`;
  }
  return !!url ? url.substring(1) : '';
}

export { jsonp };
