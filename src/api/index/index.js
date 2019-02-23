import request from '@/utils/request'
/**
 * 获取当前城市
 */
const getCurrentCity = async () => {
  return request({
    url: 'https://elm.cangdu.org/v1/cities?type=guess',
    method: 'get'
  })
}

/**
 * 获取banner数据
 */
const getBanner = async () => {
  return request({
    url: '/sys/banners',
    method: 'get'
  })
}

/**
 * 获取列表数据
 */
const getlist = async (obj) => {
  return request({
    url: '/customer/query',
    method: 'post',
    data: obj
  })
}

/**
 * 设置常驻城市
 */
const setCity = async (obj) => {
  return request({
    url: '/user/city/update',
    method: 'get',
    params: obj
  })
}

/**
 * 获取常驻城市
 */
const getCity = async () => {
  return request({
    url: '/user/city',
    method: 'get'
  })
}
export default { getCurrentCity, getBanner, getlist, setCity, getCity }
