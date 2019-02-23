import request from '@/utils/request'

/**
 * 获取筛选条件列表
 */
const getFilterList = async (obj) => {
  return request({
    url: '/sys/item/options',
    method: 'get'
  })
}

export default { getFilterList }
