import Vue from 'vue'
import { merge } from 'vtc'
const bus = new Vue({
  data: {
    routerLoading: false,
    user: {
      id: '',
      name: '',
      username: '',
      nickname: '',
      gender: ''
    }
  },
  methods: {
    updateRouterLoading (show) {
      this.routerLoading = show
    },
    updateUser (user) {
      merge(this.user, user)
    }
  }
})

export default bus
