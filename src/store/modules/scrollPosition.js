import * as types from '../mutation-type'

const state = {
  positionY: 0
}

const getters = {
  positionY: () => state.positionY
}

const mutations = {
  [types.SETPOSITIONY] (state, params) {
    state.positionY = params
  }
}

export default {
  state, mutations, getters
}
