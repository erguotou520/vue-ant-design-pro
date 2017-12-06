<template>
  <div class="page-auth px-4 py-4 mt-4 bg-white">
    <i-tabs :animated="false">
      <i-tab-pane label="账号密码登录">
        <i-form ref="form1" :rules="rules1" :model="form1" @submit.prevent.native="submit1">
          <i-form-item prop="username">
            <i-input v-model="form1.username" autofocus placeholder="请输入用户名" icon="android-person"/>
          </i-form-item>
          <i-form-item prop="password">
            <i-input v-model="form1.password" type="password" placeholder="请输入密码" icon="android-lock"/>
          </i-form-item>
          <i-form-item>
            <div class="flex flex-jc-between">
              <i-checkbox v-model="form1.remember">自动登录</i-checkbox>
              <router-link to="/auth/register">忘记密码</router-link>
            </div>
          </i-form-item>
          <i-form-item>
            <i-button type="primary" long html-type="submit">登录</i-button>
          </i-form-item>
        </i-form>
      </i-tab-pane>
      <i-tab-pane label="手机号登录">
        <i-form ref="form2" :rules="rules2" :model="form2" @submit.prevent.native="submit2">
          <i-form-item prop="phone">
            <i-input v-model="form2.phone" placeholder="请输入手机号" icon="android-phone-portrait"/>
          </i-form-item>
          <i-form-item prop="code">
            <i-row type="flex">
              <i-col span="15"><i-input v-model="form2.code" type="password" placeholder="验证码" icon="android-hangout"/></i-col>
              <i-col span="8" push="1"><i-button>获取验证码</i-button></i-col>
            </i-row>
          </i-form-item>
          <i-form-item>
            <div class="flex flex-jc-between">
              <i-checkbox v-model="form2.remember">自动登录</i-checkbox>
              <router-link to="/auth/register">忘记密码</router-link>
            </div>
          </i-form-item>
          <i-form-item>
            <i-button type="primary" long html-type="submit">登录</i-button>
          </i-form-item>
        </i-form>
      </i-tab-pane>
    </i-tabs>
    <div class="flex flex-row flex-ai-center flex-jc-between">
      <div class="flex flex-row flex-ai-center text-secondary">
        其它登录方式
        <a class="ml-2 text-secondary" href="/"><i-icon size="22" type="social-github"></i-icon></a>
        <a class="ml-2 text-secondary" href="/"><i-icon size="22" type="social-google"></i-icon></a>
        <a class="ml-2 text-secondary" href="/"><i-icon size="22" type="social-twitter"></i-icon></a>
      </div>
      <router-link to="/auth/register">注册账户</router-link>
    </div>
  </div>
</template>
<script>
import { PHONE_REGEX } from '@/patterns'
export default {
  data () {
    return {
      form1: {
        username: '',
        password: '',
        remember: false
      },
      form2: {
        phone: '',
        code: '',
        remember: false
      },
      rules1: {
        username: { required: true, message: '请输入用户名' },
        password: { required: true, message: '请输入密码' }
      },
      rules2: {
        phone: [
          { required: true, message: '请输入手机号' },
          { pattern: PHONE_REGEX, message: '请输入正确的手机号码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^[0-9]{4}$/, message: '请输入正确的验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit1 () {
      this.$refs.form1.validate(valid => {
        if (valid) {
          console.log('login 1')
        }
      })
    },
    submit2 () {
      this.$refs.form2.validate(valid => {
        if (valid) {
          console.log('login 2')
        }
      })
    }
  }
}
</script>
<style lang="stylus" src="./auth.styl"></style>
