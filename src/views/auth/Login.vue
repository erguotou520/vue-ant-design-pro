<template>
  <i-tabs>
    <i-tab-pane label="账号密码登录">
      <i-form>
        <i-form-item>
          <i-input v-model="form1.username" placeholder="请输入用户名"/>
        </i-form-item>
        <i-form-item>
          <i-input v-model="form1.password" type="password" placeholder="请输入密码"/>
        </i-form-item>
        <i-form-item>
          <div class="flex flex-jc-between">
            <i-checkbox v-model="form1.rember">自动登录</i-checkbox>
            <router-link to="/auth/register">忘记密码</router-link>
          </div>
        </i-form-item>
        <i-form-item>
          <i-button html-type="submit">登录</i-button>
        </i-form-item>
      </i-form>
    </i-tab-pane>
    <i-tab-pane label="手机号登录">
      2
    </i-tab-pane>
  </i-tabs>
</template>
<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      form1: {
        username: '',
        password: ''
      },
      form2: {
        phone: '',
        code: ''
      }
    }
  },
  methods: {

  }
}
</script>
<style lang="stylus" scoped>

</style>
