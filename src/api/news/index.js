import request from '@/utils/request'

/**
 * 获取消息列表数据
 */
const getlist = async (obj) => {
  return request({
    url: '/msg/my',
    method: 'post',
    data: obj
  })
}
/**
 * 全部已读
 */
const allReady = async (obj) => {
  return request({
    url: '/msg/read',
    method: 'get',
    params: obj
  })
}
export default { getlist, allReady }
