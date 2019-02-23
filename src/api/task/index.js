import request from '@/utils/request'

/**
 * 获取任务列表
 */
const getTaskList = async (obj) => {
  return request({
    url: '/task/my',
    method: 'get'
  })
}

/**
 * 领取任务奖励
 */
const reward = async (obj) => {
  return request({
    url: '/task/reward',
    method: 'get',
    params: obj
  })
}

export default { getTaskList, reward }
