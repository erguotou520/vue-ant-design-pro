import Vue from 'vue'
import VueRouter from 'vue-router'
import CommonNavView from '@/views/CommonNavView'
// import store from '../store'
import menus from '../menus'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: CommonNavView,
    children: []
  }, {
    path: '/auth',
    component: resolve => import('@/views/AuthView').then(resolve),
    children: [{
      path: 'login',
      component: resolve => import('@/views/auth/Login').then(resolve),
      extra: { skipAuth: true }
    }, {
      path: 'register',
      component: resolve => import('@/views/auth/Register').then(resolve),
      extra: { skipAuth: true }
    }, {
      path: 'register-result',
      component: resolve => import('@/views/auth/RegisterResult').then(resolve),
      extra: { skipAuth: true }
    }]
  }
]

menus.forEach(menu => {
  if (menu.name) {
    if (menu.children) {
      menu.children.forEach(subMenu => {
        routes[0].children.push({
          path: `/${menu.name}/${subMenu.name}`,
          // /views/{menu.name}/index.vue
          component: resolve => import('@/views/' + menu.name + '/' + subMenu.name).then(resolve)
        })
      })
    } else {
      routes[0].children.push({
        path: '/' + menu.name,
        // /views/{menu.name}/index.vue
        component: resolve => import('@/views/' + menu.name + '/index').then(resolve)
      })
    }
  }
})

console.log('已加载的路由', routes)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

router.beforeEach(function (to, from, next) {
  next()
  // if (to.meta.skipAuth) {
  //   next()
  // } else if (store.user.id) {
  //   // 已登录的跳转到首页
  //   if (/^\/auth/.test(to.path)) {
  //     next('/')
  //   } else {
  //     next()
  //   }
  // } else {
  //   next({
  //     path: '/auth/login'
  //   })
  // }
})

export default router
