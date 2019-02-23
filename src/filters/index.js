const pluralize = (time, label) => {
  return time + label + '前'
}
const formatTime = (time) => {
  time = time instanceof Date ? time : new Date(time)
  const between = Date.now() / 1000 - (Number(time) / 1000)
  if (between < 3600) {
    if (Object.is(~~(between / 60), 0)) return '刚刚'
    return pluralize(~~(between / 60), '分钟')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), '小时')
  } else {
    return pluralize(~~(between / 86400), '天')
  }
}

const substring = (str) => {
  let w = document.body.clientWidth
  if (str) {
    if (str.length > 58) {
      if (w > 320) {
        return str.substring(0, 58) + '...'
      } else {
        return str.substring(0, 44) + '...'
      }
    } else {
      return str
    }
  }
}

const substring4 = (str) => {
  if (str) {
    if (str.length > 4) {
      return str.substring(0, 4) + '...'
    } else {
      return str
    }
  }
}
const substring2 = (str) => {
  if (str) {
    if (str.length > 2) {
      return str.substring(0, 2)
    } else {
      return str
    }
  }
}
const substring20 = (str) => {
  let w = document.body.clientWidth
  if (str) {
    if (w === 320) {
      if (str.length > 8) {
        return `，${str.substring(0, 8)}...`
      } else {
        return `，${str}`
      }
    }
    if (w >= 320 && w <= 414) {
      if (str.length > 10) {
        return `，${str.substring(0, 10)}...`
      } else {
        return `，${str}`
      }
    }
  }
}

const transformDate = (time) => {
  if (time) {
    let d = new Date(time)
    return `${d.getFullYear()}-${(d.getMonth() + 1) >= 10 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1)}-${d.getDate() >= 10 ? d.getDate() : '0' + d.getDate()}  ${d.getHours() >= 10 ? d.getHours() : '0' + d.getHours()}:${d.getMinutes() >= 10 ? d.getMinutes() : '0' + d.getMinutes()}:${d.getSeconds() >= 10 ? d.getSeconds() : '0' + d.getSeconds()}`
  }
}

const transformDate2 = (time) => {
  if (time) {
    let d = new Date(time)
    return `${d.getFullYear()}-${(d.getMonth() + 1) >= 10 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1)}-${d.getDate() >= 10 ? d.getDate() : '0' + d.getDate()}  ${d.getHours() >= 10 ? d.getHours() : '0' + d.getHours()}:${d.getMinutes() >= 10 ? d.getMinutes() : '0' + d.getMinutes()}`
  }
}

const transformDateYear = (time) => {
  if (time) {
    let d = new Date(time)
    return `${d.getFullYear()}-${(d.getMonth() + 1) >= 10 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1)}-${d.getDate() >= 10 ? d.getDate() : '0' + d.getDate()}`
  }
}

const transformDateDay = (time) => {
  if (time) {
    let d = new Date(time)
    return `${d.getHours() >= 10 ? d.getHours() : '0' + d.getHours()}:${d.getMinutes() >= 10 ? d.getMinutes() : '0' + d.getMinutes()}:${d.getSeconds() >= 10 ? d.getSeconds() : '0' + d.getSeconds()}`
  }
}

const transformName = (gender) => {
  if (gender === '男') {
    return '先生'
  } else {
    return '女士'
  }
}
const transformUnit = (cate) => {
  if (cate) {
    if (cate === 'OPTIMIZATION') {
      return '淘单币'
    } else {
      return '积分'
    }
  }
}
const transformTypeText = (cate) => {
  if (cate) {
    if (cate === 'OPTIMIZATION') {
      return '优选'
    } else {
      return '淘单'
    }
  }
}
const transformRemark = (remarkType) => {
  if (remarkType === 'UNCONNECTED') {
    return '未接通'
  }
  if (remarkType === 'SPACENUMBER') {
    return '空号'
  }
  if (remarkType === 'FOLLOWUP') {
    return '待跟进'
  }
  if (remarkType === 'HANGUP') {
    return '秒挂'
  }
  if (remarkType === 'NOINTENTION') {
    return '无意愿'
  }
  if (remarkType === 'COMPLETE') {
    return '已成交'
  }
}

export default {
  formatTime,
  substring,
  substring2,
  substring4,
  substring20,
  transformDate,
  transformDate2,
  transformDateYear,
  transformDateDay,
  transformName,
  transformUnit,
  transformTypeText,
  transformRemark
}
