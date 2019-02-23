import request from '@/utils/request'

/**
 * 获取未抢订单详情
 */
const getOrderDetails = async (obj) => {
  return request({
    url: '/customer/get',
    method: 'get',
    params: obj
  })
}
/**
 * 获取已抢订单详情（客户详情）
 */
const getCustomerDetails = async (obj) => {
  return request({
    url: '/order/get',
    method: 'get',
    params: obj
  })
}
/**
 * 获取消息详情
 */
const getNewsDetails = async (obj) => {
  return request({
    url: '/msg/get',
    method: 'get',
    params: obj
  })
}

/**
 * 退单详情
 */
const chargebackDetails = async (obj) => {
  return request({
    url: '/order/refund/detail',
    method: 'get',
    params: obj
  })
}
export default { getOrderDetails, getCustomerDetails, getNewsDetails, chargebackDetails }
