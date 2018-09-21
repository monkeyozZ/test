// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible' // 屏幕适配
import './icons' // icon
import { ToastPlugin } from 'vux'
const FastClick = require('fastclick')
FastClick.attach(document.body)
Vue.use(ToastPlugin, { position: 'top' })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})