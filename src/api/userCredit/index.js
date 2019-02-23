import request from '@/utils/request'

/**
 * 检查身份证是否注册
 */
const validateIdCard = async (obj) => {
  return request({
    url: '/userCredit/existIDCard',
    method: 'post',
    data: obj
  })
}

const certification = async (obj) => {
  return request({
    url: '/userCredit/save',
    method: 'post',
    data: obj
  })
}

export default { validateIdCard, certification }
