import * as types from '../mutation-type'

const state = {
  personalAllReadyStatus: false,
  systemAllReadyStatus: false,
  type: 'PERSONAL',
  selected: '用户消息'
}

const getters = {
  personalAllReadyStatus: () => state.personalAllReadyStatus,
  systemAllReadyStatus: () => state.systemAllReadyStatus,
  newsType: () => state.type,
  selected: () => state.selected
}

const mutations = {
  [types.SETALLREADY] (state, params) {
    if (params.status === 'PERSONAL') {
      state.personalAllReadyStatus = params.val
    }
    if (params.status === 'SYSTEM') {
      state.systemAllReadyStatus = params.val
    }
  },
  [types.SETNEWSTYPE] (state, params) {
    state.type = params
  }
}

export default {
  state, mutations, getters
}
