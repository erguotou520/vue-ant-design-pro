import Vue from 'vue'
import App from './App'
import router from './router'
import './components'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: 'app',
  router,
  render: h => h(App)
})
if (process.env.NODE_ENV === 'production') {
  window.Raven.config('https://your@sentry.io/id').install()
}
