import * as types from '../mutation-type'

const state = {
  is_login: false,
  JDB_AUTH_TOKEN: null,
  user_info: {
    name: null,
    openId: null,
    mobile: null,
    headImgSrc: null
  }
}

const getters = {
  login_status: () => state.is_login,
  user_info: () => state.user_info,
  token: () => state.JDB_AUTH_TOKEN
}

const mutations = {
  [types.SETLOGINSTATUS] (state, params) {
    state.is_login = params
  },
  [types.SETUSERINFO] (state, params) {
    state.user_info = params
  },
  [types.SETJDBTOKEN] (state, params) {
    state.JDB_AUTH_TOKEN = params
  }
}

export default {
  state, mutations, getters
}
