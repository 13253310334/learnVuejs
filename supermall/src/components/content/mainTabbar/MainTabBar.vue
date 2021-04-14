<template>
  <tabBar>
    <tabBarItem path="/home" >
      <img slot="item-icon" src="../../../assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tabBarItem >
    <tabBarItem path="/category" activeColor = "deeppink">
      <img slot="item-icon" src="../../../assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tabBarItem>
    <tabBarItem path="/cart" activeColor = "deeppink">
      <img slot="item-icon" src="../../../assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tabBarItem>
    <tabBarItem path="/profile" activeColor = "deeppink">
      <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt="">
      <!--路径问题过于繁琐而且不方便复用，在配置文件webpack.base.conf.js中的alias（别名）这里设置一些文件的别名，例如src文件的@ -->
      <div slot="item-text">我的</div>
    </tabBarItem>
  </tabBar>
</template>

<script>
  import tabBar from '../../common/tabbar/tabBar'
  import tabBarItem from '../../common/tabbar/tabBarItem'
  export default {
    name: "MainTabBar",
    components:{
      //注册一下用到的组件
      tabBar,
      tabBarItem
    }
  }
</script>

<style scoped>

</style>
