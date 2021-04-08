import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './mutations-types'

//1.安装插件
Vue.use(Vuex)

// const modileA = {
//   state: {
//     name: 'zhansan'
//   }
// }

//2.创建对象
const store = new Vuex.Store({
  state: { //保存
    counter: 1000,
    student: [
      {id: 1, name: 'sht', age: 23},
      {id: 2, name: 2, age: 19},
      {id: 3, name: 3, age: 14}
    ],
    info: {
      name:'kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    //方法
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // incrementCount(state, count) {
    //   state.counter += count
    // },
    incrementCount(state, payload) {
      state.counter += payload.count
    },
    addStudent(state, stu) {
      state.student.push(stu)
    },
    updataInfo(state) {
      state.info.name = 'why'
      // state.info.name = 'why'
      // state.info['address'] = '洛杉矶'  //非响应式
      // delete state.info.age //非响应式
      // Vue.set(state.info, 'sex','男') //响应式
      // Vue.delete(state.info,'age') //响应式
      //push / pop

      // setTimeout(() => { //异步操作，devtools无法跟踪
      //   state.info.name = 'why'
      // },1000)
    }
  },
  actions: { //action类似于Mutation，替代mutation进行异步操作
    //context: 上下文
    aUpdateInfo(context, payload) {
      // setTimeout(() => {
      //   // context.state.info.name = 'why'
      //   context.commit('updateInfo')
      //   // payload();
      // },1000)

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo');
          resolve(1111)
        },1000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20(state) {
      return state.student.filter(s => s.age >= 20)
    },
    more20length(state, getters) { //getters作参数
      return getters.more20.length
    },
    moreAge(state) {
      // return function (age) {
      //   return state.student.filter(s => s.age > age)
      // }
      // 简写
      return age => {return state.student.filter(s => s.age > age)
    }}
  },
  modules: {
    a: {

    }
    ,
    b: {

    }
  }
})

//3.导出store对象
export default store

const obj = {
  name: 'sht',
  age: 18,
}

const {name, age} = obj;
console.log(name);
