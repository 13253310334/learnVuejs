import axios from 'axios'

// export function request(config, success, failure) {
//   //
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 6000
//   })
//
//   instance(config)
//     .then(res => {
//     // console.log(res);
//     success(res)
//   })
//     .catch(err => {
//       // console.log(err);
//       failure(err)
//     })
// }

//2.
// export function request(config) {
//   //
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 6000
//   })
//
//   instance(config.baseConfig)
//     .then(res => {
//       // console.log(res);
//       config.success(res)
//     })
//     .catch(err => {
//       // console.log(err);
//       config.failure(err)
//     })
// }

//
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     //创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//
//     //发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

//
export function request(config) {

    //创建axios的实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

  //axios的拦截器
  // axios.interceptors //全局
  // instance.interceptors.request.use(config => {//请求 拦截
  //   console.log(config);
  //   //请求拦截的作用
  //   //1.比如config中的信息有一些不符合服务器要求，需要处理一下
  //   //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
  //   //3.某些网络请求（比如登录），必须携带一些特殊的信息（例如token令牌）
  //   return config
  // },err => {
  //   console.log(err);
  // });

  instance.interceptors.response.use(res => {//响应 拦截
    console.log(res);
    // console.log(res.data);
    return res.data.data
  }, err => {
    console.log(err);
  });


    //发送真正的网络请求
    return instance(config)
}

function test(aaa, bbb) {
  aaa('Hello World')
  bbb('Hello Vue, err message')
}
test(function () {

},function () {

})


