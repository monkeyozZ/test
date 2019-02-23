import request from '@/utils/request'

/**
 * 签到
 */
const sign = async (obj) => {
  return request({
    url: '/user/sign',
    method: 'get',
    params: obj
  })
}

export default { sign }
