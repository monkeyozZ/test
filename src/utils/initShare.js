import wechatApi from '@/api/wechatPay'
const wx = require('weixin-js-sdk')

const initShare = function (url) {
  let obj = {
    url: encodeURIComponent(url)
  }
  wechatApi.getShareConfig(obj).then((res) => {
    if (res.data.code === 0) {
      let apiConfig = res.data.data
      // console.log(apiConfig)
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: apiConfig.appId, // 必填，公众号的唯一标识
        timestamp: apiConfig.timestamp, // 必填，生成签名的时间戳
        nonceStr: apiConfig.nonceStr, // 必填，生成签名的随机串
        signature: apiConfig.signature, // 必填，签名
        jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表
      })
      wx.ready(function () {
      /* wx.updateAppMessageShareData({ // 需在用户可能点击分享按钮前就先调用
        title: '快来免费抢5单啦！', // 分享标题
        desc: '我在淘单宝又成一单，每天10000+优质用户实时推送', // 分享描述
        link: 'http://tdb.baojeah.com/taodb/share', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://tdb.baojeah.com/taodb/static/img/thumb.jpg', // 分享图标
        success: function (res) {
          // 设置成功
          console.log('res1:ok')
          console.log(res)
        },
        error: function (err) {
          console.log('err1:ok')
          console.log(err)
        }
      })
      wx.updateTimelineShareData({
        title: '快来免费抢5单啦！', // 分享标题
        link: 'http://tdb.baojeah.com/taodb/share', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://tdb.baojeah.com/taodb/static/img/thumb.jpg', // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        success: function (res) {
          // 设置成功
          console.log('res2:ok')
          console.log(res)
        },
        error: function (err) {
          console.log('err2:ok')
          console.log(err)
        }
      }) */
        wx.onMenuShareAppMessage({ // 分享给朋友
          title: '快来免费抢5单啦！', // 分享标题
          desc: '我在淘单宝又成一单，每天10000+优质用户实时推送', // 分享描述
          link: `${process.env.BASE_SHAREURL}/share`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: `${process.env.BASE_SHAREURL}/static/img/thumb.jpg`, // 分享图标
          type: 'link', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function (res) {
          // 用户点击了分享后执行的回调函数
          }
        })

        wx.onMenuShareTimeline({
          title: '快来免费抢5单啦！', // 分享标题
          link: `${process.env.BASE_SHAREURL}/share`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: `${process.env.BASE_SHAREURL}/static/img/thumb.jpg`, // 分享图标
          success: function (res) {
          // 用户点击了分享后执行的回调函数
          }
        })

        wx.onMenuShareQQ({
          title: '快来免费抢5单啦！', // 分享标题
          desc: '我在淘单宝又成一单，每天10000+优质用户实时推送', // 分享描述
          link: `${process.env.BASE_SHAREURL}/share`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: `${process.env.BASE_SHAREURL}/static/img/thumb.jpg`, // 分享图标
          success: function (res) {
          // 用户点击了分享后执行的回调函数
          }
        })

        wx.onMenuShareWeibo({
          title: '快来免费抢5单啦！', // 分享标题
          desc: '我在淘单宝又成一单，每天10000+优质用户实时推送', // 分享描述
          link: `${process.env.BASE_SHAREURL}/share`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: `${process.env.BASE_SHAREURL}/static/img/thumb.jpg`, // 分享图标
          success: function (res) {
          // 用户点击了分享后执行的回调函数
          }
        })

        wx.onMenuShareQZone({
          title: '快来免费抢5单啦！', // 分享标题
          desc: '我在淘单宝又成一单，每天10000+优质用户实时推送', // 分享描述
          link: `${process.env.BASE_SHAREURL}/share`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: `${process.env.BASE_SHAREURL}/static/img/thumb.jpg`, // 分享图标
          success: function (res) {
          // 用户点击了分享后执行的回调函数
          }
        })
      })
      wx.error(function (res) {
        console.log('error:' + res)
      })
    }
  }).catch((err) => {
    console.log(err)
  })
}

export default initShare
