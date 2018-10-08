import * as types from '../mutation-type'

const state = {
  text: '',
  rightText: {
    text: '',
    color: '#333'
  }
}

const getters = {
  headerText: () => state.text,
  rightText: () => state.rightText
}

const mutations = {
  [types.SETHEADERTEXT] (state, params) {
    state.text = params
  },
  [types.SETHEADERRIGHTTEXT] (state, params) {
    state.rightText = params
  }
}

export default {
  state, mutations, getters
}
