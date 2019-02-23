import request from '@/utils/request'

/**
 * 获取用户是否需要引导的状态
 */
const leadStatus = async (obj) => {
  return request({
    url: '/user/setting/status',
    method: 'get',
    params: obj
  })
}

const updateLeadStatus = async (obj) => {
  return request({
    url: '/user/setting/update',
    method: 'get',
    params: obj
  })
}

export default { leadStatus, updateLeadStatus }
