import Vue from 'vue'
import VueRouter from 'vue-router'
import CommonNavView from '@/views/CommonNavView'
import { param2Pascal } from 'vtc'
import store from '../store'
import menus from '../menus'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard/analysis',
    component: CommonNavView,
    children: []
  }, {
    path: '/auth',
    component: resolve => import('@/views/AuthView').then(resolve),
    children: [{
      path: 'login',
      component: resolve => import('@/views/auth/Login').then(resolve),
      meta: { skipAuth: true }
    }, {
      path: 'register',
      component: resolve => import('@/views/auth/Register').then(resolve),
      meta: { skipAuth: true }
    }, {
      path: 'register-result',
      component: resolve => import('@/views/auth/RegisterResult').then(resolve),
      meta: { skipAuth: true }
    }]
  }, {
    path: '*',
    redirect: '/exception/404'
  }
]

menus.forEach(menu => {
  if (menu.name) {
    if (menu.children) {
      menu.children.forEach(subMenu => {
        routes[0].children.push({
          path: `/${menu.name}/${subMenu.name}`,
          // /views/{menu.name}/index.vue
          component: resolve => {
            // 文件名符合PascalCase风格，路由符合param-case风格
            const File = param2Pascal(subMenu.name)
            console.log('Load views/' + menu.name + '/' + File)
            import('@/views/' + menu.name + '/' + File).then(resolve)
          }
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

if (process.env.NODE !== 'production') {
  console.log('已加载的路由', routes)
}

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  store.updateRouterLoading(true)
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

router.afterEach((to, from) => {
  store.updateRouterLoading(false)
})

export default router
