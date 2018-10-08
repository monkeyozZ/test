<template>
  <div class="footer">
    <tabbar>
      <tabbar-item :selected="$route.path == '/'" link="/">
          <svg-icon slot="icon" icon-class="order"></svg-icon>
          <span slot="label">抢单</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path == '/customer'" link="/customer">
        <svg-icon slot="icon" icon-class="customer"></svg-icon>
        <span slot="label">客户</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path == '/person/own'" link="/person/own">
        <svg-icon slot="icon" icon-class="own"></svg-icon>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.footer{
  .svg-icon{
    width: 24px;
    height: 24px
  }
  .weui-tabbar{
    background-color: #fff;
    &::before{
      border-top: none;
    }
  }
}
</style>
