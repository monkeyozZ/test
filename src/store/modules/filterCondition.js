import * as types from '../mutation-type'

const state = {
  orderCondition: {},
  customerCondition: {}
}

const getters = {
  orderCondition: () => state.orderCondition,
  customerCondition: () => state.customerCondition
}

const mutations = {
  [types.SETORDERCONDITION] (state, params) {
    state.orderCondition = params
  },
  [types.SETCUSTOMERCONDITION] (state, params) {
    state.customerCondition = params
  }
}

export default {
  state, mutations, getters
}
