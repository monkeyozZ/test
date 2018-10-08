<template>
  <div class="main">
    <my-header></my-header>
    <router-view></router-view>
    <my-tabbar v-if="$route.path === '/'|| $route.path === '/customer'"></my-tabbar>
  </div>
</template>

<script>
import MyHeader from '@/components/header'
import MyTabbar from '@/components/tabbar'
export default {
  components: {
    MyHeader,
    MyTabbar
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>

</style>
