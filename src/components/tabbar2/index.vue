<template>
  <div class="footer" :style="{bottom: bottom}">
    <tabbar>
      <tabbar-item :selected="$route.path === '/'" link="/" v-waves>
        <!-- <img slot="icon" src="./img/order.png" v-if="$route.path !== '/'"> -->
        <svg-icon slot="icon" icon-class="order" v-if="$route.path !== '/'"></svg-icon>
        <svg-icon slot="icon" class="selected" icon-class="orderSelected" v-if="$route.path === '/'"></svg-icon>
        <!-- <img slot="icon" class="selected" src="./img/selectedOrder.png" v-if="$route.path === '/'"> -->
          <span slot="label">抢单</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path === '/customer'" link="/customer" v-waves>
        <!-- <img slot="icon" src="./img/customer.png" v-if="$route.path !== '/customer'"> -->
        <svg-icon slot="icon" icon-class="customer" v-if="$route.path !== '/customer'"></svg-icon>
        <svg-icon slot="icon" class="selected" icon-class="customerSelected" v-if="$route.path === '/customer'"></svg-icon>
        <!-- <img slot="icon" class="selected" src="./img/selectedCustomer.png" v-if="$route.path === '/customer'"> -->
        <span slot="label">客户</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path === '/own'" link="/own" v-waves>
        <!-- <img slot="icon" src="./img/own.png" v-if="$route.path !== '/own'"> -->
        <svg-icon slot="icon" icon-class="own" v-if="$route.path !== '/own'"></svg-icon>
        <svg-icon slot="icon" class="selected" icon-class="ownSelected" v-if="$route.path === '/own'"></svg-icon>
        <!-- <img slot="icon" class="selected" src="./img/selectedOwn.png" v-if="$route.path === '/own'"> -->
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
import bus from '@/utils/eventBus'
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      bottom: 0
    }
  },
  methods: {
    resetIphonexPosition (path) {
      let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      if (h === 724) {
        if (path === undefined) {
          this.bottom = '34px'
        } else {
          this.bottom = 0 // 路由变化执行时h仍为724 ps:iphoneX
        }
      } else {
        this.bottom = 0
      }
    }
  },
  mounted () {
    this.resetIphonexPosition()
    bus.$on('resetIphonexPosition', (path) => {
      this.resetIphonexPosition(path)
    })
    setTimeout(() => {
      localStorage.setItem('tabbarHeight', JSON.stringify(document.getElementsByClassName('weui-tabbar')[0].offsetHeight))
      // bus.$emit('tabbarHeight', document.getElementsByClassName('weui-tabbar')[0].offsetHeight)
    }, 20)
  }
}
</script>

<style lang="less" scoped>
.footer{
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 997;
  .weui-tabbar{
    background: url('./img/bg.png') no-repeat center center;
    background-size: 120% 100%;
    background-color: #fff;
    &::before{
      border-top: none;
    }
    a{
      /* &:last-child{
        img{
          width: 18px;
        }
      } */
      .svg-icon{
        position: absolute;
        display: inline-block;
        width: 30px;
        height: 30px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        &.selected{
          width: 65px;
          height: 65px;
          top: 30%;
        }
      }
    }
  }
}
</style>
