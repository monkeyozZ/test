<template>
  <div class="header">
    <x-header :left-options="{showBack: false,backText: ''}">
      <span class="title">{{headerText?headerText:'淘单宝'}}</span>
      <svg-icon slot="overwrite-left" class="back" icon-class="back" @click.native="GoBack" v-if="$route.path !== '/' && $route.path !== '/customer'"></svg-icon>
      <a slot="right" :style="{color: rightText.color}">{{rightText.text}}</a>
    </x-header>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import { mapGetters } from 'vuex'
export default {
  components: {
    XHeader
  },
  data () {
    return {
      options: {
        showBack: false,
        backText: ''
      },
      title: this.$route.meta.title ? this.$route.meta.title : ''
    }
  },
  computed: {
    ...mapGetters(['headerText', 'rightText'])
  },
  methods: {
    GoBack () {
      history.back(-1)
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.vux-header{
  background-color: #fff;
  border-bottom: 1PX solid #D9D9D9;
  .title{
    color: #000;
  }
  .back{
    color: #444444;
  }
}
</style>
