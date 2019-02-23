import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import AuthLogin from './modules/login'
import header from './modules/headerText'
import uploadImg from './modules/uploadImg'
import selectedCity from './modules/selectedCity'
import filterCondition from './modules/filterCondition'
import scrollPosition from './modules/scrollPosition'
import news from './modules/news'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    AuthLogin,
    header,
    uploadImg,
    selectedCity,
    filterCondition,
    news,
    scrollPosition
  }
})
