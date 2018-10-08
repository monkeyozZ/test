import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import AuthLogin from './modules/login'
import header from './modules/headerText'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    AuthLogin,
    header
  }
})
