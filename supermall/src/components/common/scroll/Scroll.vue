<template>
  <div class="wrapper" ref="wrapper"><!--ref 一般绑定给明确的某个子组件，下面拿他的时候通过this.$refs.refname  ；而div 也可以使用-->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  // import PullUp from 'better-scroll'
  // BScroll.use(PullUp)
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type:  Boolean,
        default: true
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //1.创建BScroll对象
      // this.scroll = new BScroll(document.querySelector('.wrapper'), {
      // })
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        // pullUpLoad: true,/*这句加上的话默认监控打印，封装失效*/
        mouseWheel: true,
        observeDOM: true
      })
      // this.scroll.scrollTo(0, 0)

      //2.监听滚动位置
      this.scroll.on('scroll', (position) =>{
        // console.log(position);
        this.$emit('scroll', position)  /*通过自定义事件把事件发出了，在主页的地方可以使用*/
      })

      //3.监听上拉事件
      this.scroll.on('pullingUp', () => {
        // console.log('上拉加载更多');
        this.$emit('pullingUp')
      })
    },
    methods: {
      scrollTo(x, y, time=500) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
