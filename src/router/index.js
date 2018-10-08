import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import layout from '@/views/layout/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/taodb/',
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '',
          component: () => import('@/views/index/index'),
          meta: { title: '抢单' }
        }
      ]
    },
    {
      path: '/orderdetails/:id',
      component: layout,
      children: [
        {
          path: '',
          name: 'orderdetails',
          component: () => import('@/views/orderDetails/index'),
          meta: { title: '订单详情' }
        }
      ]
    },
    {
      path: '/customer',
      component: layout,
      children: [
        {
          path: '',
          component: () => import('@/views/customer/index'),
          meta: { title: '客户' }
        }
      ]
    },
    {
      path: '/filter',
      component: layout,
      children: [
        {
          path: '',
          component: () => import('@/views/filter/index'),
          meta: { title: '自定义筛选' }
        }
      ]
    },
    {
      path: '/city',
      component: layout,
      children: [
        {
          path: '',
          component: () => import('@/views/city/index'),
          meta: { title: '选择城市' }
        }
      ]
    },
    {
      path: '/login',
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
    store.dispatch('setHeaderText', to.meta.title)
    next()
  }
  /* if (to.path === '/') {
    router.push({ path: '/login' })
  } */
  if (to.path === '/city') {
    store.dispatch('setRightText', { text: '完成', color: '#1F7CF0' })
  } else {
    store.dispatch('setRightText', { text: '', color: '#1F7CF0' })
    next()
  }
  next()
})

export default router
