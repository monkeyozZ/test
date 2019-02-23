import request from '@/utils/request'

/**
 * 微信config权限验证
 */
const getConfig = async (obj) => {
  return request({
    url: '/recharge/config',
    method: 'post',
    data: obj
  })
}

/**
 * 微信share config权限验证
 */
const getShareConfig = async (obj) => {
  return request({
    url: '/share/config',
    method: 'post',
    data: obj
  })
}
/**
 * 新建订单
 */
const builtRecharge = async (obj) => {
  return request({
    url: '/recharge/add',
    method: 'post',
    data: obj
  })
}

/**
 * 充值成功通知
 */
const rechargeSuccess = async (obj) => {
  return request({
    url: '/recharge/orderQuery',
    method: 'post',
    data: obj
  })
}
export default { getConfig, getShareConfig, builtRecharge, rechargeSuccess }
