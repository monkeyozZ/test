exports.install = function (Vue, options) {
  Vue.prototype.statistics = function (event, obj) {
    window.zhuge.track(event, obj)
  }
}
