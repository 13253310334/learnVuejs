<template>
  <div id="app">
    <h2>----modules----</h2>
    <h2>{{$store.state.a.name}}</h2>

  <!--<h2>{{message}}&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</h2>-->
    <!--<h2>{{$store.state.counter}}是counter</h2>-->
   <!--<button @click="add">+</button>-->
   <!--<button @click="sub">-</button>-->
    <!---->
   <!--<button @click="addCount(5)">+5</button>-->
   <!--<button @click="addCount(10)">+10</button>-->
   <!--<button @click="addStudent">增加学生</button>-->

    <h2>getters---------------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>
    <!--<h2>{{$store.getters.powerCounter}}是counter的平方</h2>-->

    <!--<h2>{{$store.getters.more20}} &ndash;&gt;getters</h2>-->

    <!--<h2>{{$store.getters.more20length}} &ndash;&gt;getters&ndash;&gt;length</h2>-->
    <!--<h2>{{more20}}&ndash;&gt;students more 20 &ndash;&gt;计算属性</h2>-->
    <!--<HelloVuex :counter="counter"></HelloVuex>-->
    <!--<h2>{{$store.getters.moreAge(15)}} 大于age岁的</h2>-->
    <HelloVuex></HelloVuex>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'
  import {
    INCREMENT
  } from "./store/mutations-types";

  export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: '我是App组件',
      // counter: 0
    }
  },
  computed: {
    more20() {
      return this.$store.state.student.filter(s => { //filter 可以拿到数组里的元素
        return s.age >= 20
      })
    }
  },
  methods: {
    add() {
      this.$store.commit('INCREMENT') //commit (提交）方法 （事件类型
    },
    sub() {
      this.$store.commit('decrement')
    },
    addCount(count) { //参数成为payload(负载/载荷)
      //1.普通提交方式
      // this.$store.commit('incrementCount',count)
      //2.特殊提交方式
      this.$store.commit({
        type:'incrementCount',
        count: count //key: value
      })

    },
    addStudent() {
      // const stu = [{id: 4, name: 4, age: 22}, {id: 5, name: 5, age: 24}, {id: 6, name: 6, age: 18}, {id: 7, name: 7, age: 16}]
      const stu = {id: 4, name: 4, age: 22}
      this.$store.commit('addStudent', stu)
    },
    updateInfo() {
      // this.$store.commit('updataInfo')
      // 用this.$ store.dispatch（'etiquetteStore / SET_TAB'，value）替换
      // this.$store.dispatch('aUpdateInfo','我是payload')
      // this.$store.dispatch('aUpdateInfo',() => {
      //
      //   message: '',
      //     success: () => {
      //     console.log('完成');
      //   }
      //
      // })

      this.$store.dispatch('aUpdateInfo','').then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style>

</style>
