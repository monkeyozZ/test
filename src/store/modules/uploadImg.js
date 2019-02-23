import * as types from '../mutation-type'

const state = {
  idCard: null,
  aptitudes: null
}

const getters = {
  idCard: () => state.idCard,
  aptitudes: () => state.aptitudes
}

const mutations = {
  [types.SETIDCARDIMG] (state, params) {
    state.idCard = params
  },
  [types.SETAPTITUDESIMG] (state, params) {
    state.aptitudes = params
  }
}

export default {
  state, mutations, getters
}
