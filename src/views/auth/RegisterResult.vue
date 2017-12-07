<template>
  <div class="text-center">
    <i-icon class="mt-4" size="64" color="#52c41a" type="checkmark-circled"></i-icon>
    <p class="font-20 mt-2 weight-700">你的账户：{{email}} 注册成功</p>
    <p class="mt-2">
      激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。
    </p>
    <div class="mt-4">
      <i-button @click="toMailbox" type="primary">查看邮箱</i-button>
      <i-button class="ml-1" @click="$router.push('/')">返回首页</i-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      email: 'erguotou525@gmail.com'
    }
  },
  methods: {
    toMailbox () {
      window.open('http://mail.163.com')
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
