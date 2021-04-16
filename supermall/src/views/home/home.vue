<template>
  <!--<h2>首页</h2>-->
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">香菇街</div>
      <!--需要替换谁就指定谁-->
    </nav-bar>
    <tab-control
      class="tabControl" v-show="isTabFixed"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl" >
    </tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"><!--不加冒号(v-bind)的话统一当成字符串--><!--@pullingUp="loadMore"-->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl" >
      </tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick"
              v-show="isShowBackTop"></back-top>
    <!--必须加native：原生的，在我们想要监听一个组件的原生事件时，必须加上native修饰符-->
      </div>
</template>

<script>
  import HomeSwiper from './childrenComponents/HomeSwiper'
  import HomeRecommendView from './childrenComponents/HomeRecommendView'
  import FeatureView from './childrenComponents/FeatureView'

  import NavBar from '../../components/common/navbar/NavBar'
  import TabControl from '../../components/content/tabControl/TabControl'
  import GoodsList from '../../components/content/goods/GoodsList'
  import Scroll from '../../components/common/scroll/Scroll'
  import BackTop from '../../components/content/backTop/BackTop'

  import {
    getHomeMultidata,
    getHomeGoods
  } from '../../network/home'

  // import BScroll from 'better-scroll'
  // /*不要直接使用，否则导致耦合度过高，危险性高，抽一下*/
  export default {
    name: "home",
    components: {
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return {
        result: null,
        banners: [],
        recommends: [],
        goods: {
          'pop': {page:0, list: []},
          'news': {page:0, list: []},
          'sell': {page:0, list: []}
        },
        currentType: 'pop',
        isShowBackTop:false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType]/*.list*/
      }
    },
    destroyed() {
      console.log('home destroyed');
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scrolll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
      // console.log(this.saveY);
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata()
      // this.getHomeMultidata('new')
      // this.getHomeMultidata('sell')

      //2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

      //3.事件监听，监听item中图片加载完成/*去下面mounted做*/
      // this.$bus.$on('itemImageLoad', () => {
      //     console.log('----------------');
      //     this.$refs.scroll.refresh()
      // })


    },
    mounted() {
      //1.图片加载完成的事件监听
      this.debounce(this.$refs.scroll.refresh)

      this.$bus.$on('itemImageLoad', () => {
        console.log('图片加载完成的事件');
        this.$refs.scroll.refresh()
      })

      //2.获取tabControl的offSetTop  赋值
      //所有组件都有一个属性，$el：用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop

    },
    methods: {
      /**
      * 事件监听相关的方法
       */
      tabClick(index) {
        // console.log(index);
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      backClick() {
        console.log('click');
        // this.$refs.scroll.scroll.scrollTo(0, 0, 500)
        /*不加500的话就是瞬间到达（0， 0），500ms内完成*/
        this.$refs.scroll.scrollTo(0, 0)/*在Scroll.vue中封装了一个methods*/
      },
      contentScroll(position) {
        // console.log(position.y);
        //1.判断backtop是否显示
        this.isShowBackTop = -position.y > 800 /*  ? 1 : 0  */

        //2.决定tabControl是否吸顶
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore() {
        console.log('上拉加载更多');
        this.getHomeGoods(this.currentType)
      //
        this.$refs.scroll.scroll.refresh()
      },
      swiperImageLoad() {

        // console.log(this.$refs.tabControl.$el.offsetOff);
        // console.log(this.$refs.tabControl.$el);
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },

      debounce(func, delay) {
        let timer = null
        return function() {
          if (timer) clearTimeout(timer)

          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay)
        }
      },
      /**
      * 网络请求相关的方法
      */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          this.result = res
          this.banners = res.data.banner.list
          // console.log(res.data);
          // console.log(this.banners);
          this.recommends = res.data.recommend.list
          // console.log(this.recommends);
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          /*数组.push(...数组名称)*/

          // this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>/*scoped: 作用域 */
  #home {
    /*padding-top: 44px;*/
    position: relative;
    /*height: 100vh;*/
    /*padding-bottom: 100px;*/
    height: 100vh;/*vh 视口高度 100vh-》100%视口*/
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;/*停留*/
    top: 44px;
    z-index: 9;
  }
  /*.content {*/
    /*overflow: hidden;*/

    /*position: absolute;*/
    /*top: 44px;*/
    /*bottom: 49px;*/
    /*left: 0;*/
    /*right: 0;*/
  /*}*/

  .content {  /*方法二*//*计算机中没有黑魔法*/

    height: calc(100% - 93px);

    overflow: hidden;
    margin-top: 44px;
  }
  /*.fixed {*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 44px;*/
  /*}*/
</style>
