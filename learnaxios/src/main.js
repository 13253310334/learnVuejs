import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
//1. 基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',//?callback=json123//jsonp
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })
// // axios.post()
// axios({
//   url: "http://123.207.32.32:8000/home/data?type=sell&page=1",
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

//2.axios发送并发请求,例如需求同时发送两个请求
//使用axios.all，可以放入多个请求的数组
//axios.all([])返回的结果是一个数组，

//3.全局默认配置（公共）
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//
// axios.all([axios({
//   // baseURL: 'http://123.207.32.32:8000',
//   // timeout: 5,//超时时间
//   url:  '/home/multidata'
// }), axios({
//   url: "http://123.207.32.32:8000/home/data",
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })])
// //   .then(results => {
// //   console.log(results);
// // })
// // 使用axios.spread可将数组[res1,res2],展开为res1，res2
//   .then(axios.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2);
//   })
// )
//
// //数组解构
// // const names = [1, 2]
// // const [name1, name2] = names
//
// axios({
//   url: 'http://123.207.32.32:8000/category'
// }).then(res => {
//   console.log(res);
// })

// 4.创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })
// instance1({
//   url: '/home/data'
// }).then(res =>{
//   console.log(res);
// })
//
// const instance2 = axios.create({
//   baseURL: 'http://localhost:8080/',
//   timeout: 10000,
//   //headers: {}
// })
//   instance2({
//   })
//   .then(res => {
//     console.log(res);
//   })

//5.封装request模块
import {request} from './network/request';
// request({
//   url: '/home/multidata'
// },res => {
//   console.log(res);
// },err => {
//   console.log(err);
// })

//2.
// request({
//   baseConfig: {
//
//   },
//   success: function (res) {
//
//   },
//   failure: function (err) {
//
//   }
// })

//
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})


