import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/registerAndLogin')
    },
    {
      path: '/setpassword',
      component: () => import('@/views/setPassword')
    },
    {
      path: '/passlogin',
      component: () => import('@/views/passLogin')
    },
    {
      path: '/findpassword',
      component: () => import('@/views/findPassword')
    },
    {
      path: '/resetpassword',
      component: () => import('@/views/resetPassword')
    },
    {
      path: '/xieyi',
      component: () => import('@/views/xieyi'),
      meta: { title: '用户协议' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
    next()
  }
  next()
})

export default router
