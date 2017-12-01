import Vue from 'vue'
import { merge } from '../utils'
const bus = new Vue({
  data: {
    toast: {
      show: false,
      message: ''
    },
    confirm: {
      show: false,
      title: '',
      content: ''
    },
    user: {
      id: '',
      name: '',
      username: '',
      nickname: '',
      gender: ''
    }
  },
  methods: {
    updateToast (toastConfig) {
      merge(this.toast, toastConfig)
    },
    updateConfirm (confirmConfig) {
      merge(this.confirm, confirmConfig)
    }
  }
})

export default bus
