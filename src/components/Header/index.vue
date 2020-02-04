<template>
  <header id="header">
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  // 标题属性 
  props: {
    title: {
      type: String,
      default: "呱呱电影"
    }
  }
}
</script>

<style>
/* 来自commons.css的头部组件的样式 */
#header {
  width: 100%;
  height: 50px;
  color: #fff;
  background: rgb(3, 167, 116);
  border-bottom: 1px solid rgb(3, 167, 116);
  position: relative;
}
#header h1 {
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
}
#header i {
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -13px;
  font-size: 26px;
}
</style>