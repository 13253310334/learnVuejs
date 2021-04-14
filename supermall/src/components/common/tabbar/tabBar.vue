<template>
  <div id="tab-bar">
    <slot>
    </slot>
  </div>
</template>

<script>
  export default {
    name: "tabBar"
  }
  //<!--因为如果逻辑都放在上方div的位置的话会导致混乱，所以使用一个插槽
  // 并将下方代码全放到item.vue中,是app新引入一个组件文件-->
  //   <div class="tab-bar-item">
  //     <img src="../../assets/img/tabbar/home.svg" alt="">
  //     <div>首页</div>
  //     </div>
  //     <div class="tab-bar-item">
  //     <img src="../../assets/img/tabbar/home.svg" alt="">
  //     <div>分类</div>
  //     </div>
  //     <div class="tab-bar-item">
  //     <img src="../../assets/img/tabbar/home.svg" alt="">
  //     <div>购物车</div>
  //     </div>
  //     <div class="tab-bar-item">
  //     <img src="../../assets/img/tabbar/home.svg" alt="">
  //     <div>我的</div>
  //     </div>
</script>

<style scoped>


  #tab-bar {
    display: flex;
    background-color: #f2f2f2;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -3px 1px rgba(100,100,100,.3);
  }


</style>
