import request from '@/utils/request'

/**
 * 获取图片验证码
 */
const getVerifyCode = async (obj) => {
  return request({
    url: '/user/reg/verifyCode',
    method: 'get',
    params: obj
  })
}

/**
 * 获取短信验证码并验证图片验证码
 */
const getMessageCode = async (obj) => {
  return request({
    url: '/share/sendMessage',
    method: 'post',
    data: obj
  })
}

/**
 * 验证短信验证码
 */
const checkMessageCode = async (obj) => {
  return request({
    url: '/share/insertUser',
    method: 'post',
    data: obj
  })
}

/**
 * 分享任务领取
 */
const share = async (obj) => {
  return request({
    url: '/task/share',
    method: 'get',
    params: obj
  })
}

/**
 * 用户邀请统计
 */
const inviteStatistics = async (obj) => {
  return request({
    url: '/invite/statis',
    method: 'get',
    params: obj
  })
}

/**
 * 用户邀请统计详情
 */
const inviteStatisticsDetails = async (obj) => {
  return request({
    url: '/invite/detail',
    method: 'post',
    data: obj
  })
}

export default { getVerifyCode, getMessageCode, checkMessageCode, share, inviteStatistics, inviteStatisticsDetails }
