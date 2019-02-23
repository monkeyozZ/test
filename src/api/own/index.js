import request from '@/utils/request'

/**
 * 获取用户基本信息
 */
const getUserInfo = async (obj) => {
  return request({
    url: '/user/get',
    method: 'get',
    params: obj
  })
}

/**
 * 我的实名认证
 */
const ownCertificationStatus = async (obj) => {
  return request({
    url: '/userCredit/get',
    method: 'get',
    params: obj
  })
}

/**
 * 意见反馈
 */
const feedBack = async (obj) => {
  return request({
    url: '/sys/feedback',
    method: 'post',
    data: obj
  })
}

/**
 * 积分||资金明细
 */
const financialDetails = async (obj) => {
  return request({
    url: '/capital/detail',
    method: 'post',
    data: obj
  })
}

/**
 * 修改密码
 */
const updatePassword = async (obj) => {
  return request({
    url: '/user/resetPass',
    method: 'post',
    data: obj
  })
}

/**
 * 忘记密码获取图片验证码
 */
const getVerifyCode = async (obj) => {
  return request({
    url: '/user/reg/verifyCode',
    method: 'get',
    params: obj
  })
}

/**
 * 忘记密码获取短信验证码并验证图片验证码
 */
const getMessageCode = async (obj) => {
  return request({
    url: '/user/reset/sendMessage',
    method: 'post',
    data: obj
  })
}

/**
 * 忘记密码验证短信验证码
 */
const checkMessageCode = async (obj) => {
  return request({
    url: '/user/reset/smsCheck',
    method: 'post',
    data: obj
  })
}

/**
 * 忘记密码重置
 */
const resetPassword = async (obj) => {
  return request({
    url: '/user/reset/password',
    method: 'post',
    data: obj
  })
}
export default { getUserInfo, ownCertificationStatus, feedBack, financialDetails, updatePassword, getVerifyCode, getMessageCode, checkMessageCode, resetPassword }
