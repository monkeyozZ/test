<template>
  <div class="error">
    <svg-icon icon-class="error"></svg-icon>
    <p>sorry,页面好像飘走了～</p>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.error{
  text-align: center;
  .svg-icon{
    margin-top: 80px;
    width: 157px;
    height: 157px;
  }
  p{
    margin-top: 32px;
    font-size: 18px;
    color: #999;
  }
}
</style>
