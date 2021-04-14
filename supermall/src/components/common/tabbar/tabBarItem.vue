<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!--<slot v-if="!isActive" name="item-icon"></slot>-->
    <!--<slot v-else name="item-icon-active"></slot>-->
    <!--<div :class="{active: isActive}">-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: "tabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        // /home -> item(/home) = true,others are false
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {} //三目
      }
    },
    methods: {
      itemClick() {
        // console.log('itemClick');
        // this.$router.replace(this.path)
        this.$router.replace(this.path).catch(() => {})
      }
    }
  }

  // <div class="tab-bar-item">
  //   <img src="../../assets/img/tabbar/home.svg" alt="">
  //   <div>首页</div>
  //   </div>
  //   <div class="tab-bar-item">
  //   <img src="../../assets/img/tabbar/home.svg" alt="">
  //   <div>分类</div>
  //   </div>
  //   <div class="tab-bar-item">
  //   <img src="../../assets/img/tabbar/home.svg" alt="">
  //   <div>购物车</div>
  //   </div>
  //   <div class="tab-bar-item">
  //   <img src="../../assets/img/tabbar/home.svg" alt="">
  //   <div>我的</div>
  //   </div>
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active {
    color: red;
  }
</style>
