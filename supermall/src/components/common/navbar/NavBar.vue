<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
    <!--不能在slot里直接class设置布局，应该用div包起来-->
    <!--具名插槽-->
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;/*模型内必须有内容，需要撑开*/
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }
  .left, .right {
    width: 60px;
    /*background-color: red;*/
  }
  .center {
    flex: 1;/*占据剩余空间，1是表示占了剩余空间百分百*/
    /*background-color: blue;*/
  }
</style>
