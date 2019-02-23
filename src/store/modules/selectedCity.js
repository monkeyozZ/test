import * as types from '../mutation-type'

const state = {
  city: [],
  currentCity: ''
}

const getters = {
  city: () => state.city,
  currentCity: () => state.currentCity
}

const mutations = {
  [types.SETCITY] (state, params) {
    state.city = params
  },
  [types.CURRENTCITY] (state, params) {
    state.currentCity = params
  }
}

export default {
  state, mutations, getters
}
