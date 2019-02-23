import request from '@/utils/request'

/**
 * 抢单
 */
const checkOrder = async (obj) => {
  return request({
    url: '/order/checkUserBalance',
    method: 'get',
    params: obj
  })
}

/**
 * 抢单
 */
const builtOrder = async (obj) => {
  return request({
    url: '/order/order',
    method: 'post',
    data: obj
  })
}

export default { checkOrder, builtOrder }
