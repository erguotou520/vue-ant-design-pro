<template>
  <div class="page-auth px-4 py-4 mt-4 bg-white">
    <h3 class="weight-400">注册</h3>
    <i-form ref="form" :rules="rules" :model="form" @submit.prevent.native="submit">
      <i-form-item prop="email">
        <i-input v-model="form.email" autofocus placeholder="请输入用户名" icon="android-person"/>
      </i-form-item>
      <i-form-item prop="password">
        <i-input v-model="form.password" type="password" placeholder="请输入至少6位密码，区分大小写" icon="android-lock"/>
      </i-form-item>
      <i-form-item prop="rePassword">
        <i-input v-model="form.rePassword" type="password" placeholder="请输入密码" icon="android-lock"/>
      </i-form-item>
      <i-form-item prop="phone">
        <i-input v-model="form.phone" placeholder="请输入11位手机号" icon="android-phone-portrait">
          <i-select v-model="form.phonePrefix">
            <i-option value="86">+86</i-option>
            <i-option value="87">+87</i-option>
          </i-select>
        </i-input>
      </i-form-item>
      <i-form-item prop="code">
        <i-row type="flex">
          <i-col span="15"><i-input v-model="form.code" type="password" placeholder="验证码" icon="android-hangout"/></i-col>
          <i-col span="8" push="1"><i-button>获取验证码</i-button></i-col>
        </i-row>
      </i-form-item>
      <i-form-item>
        <i-row type="flex">
          <i-col span="12"><i-button type="primary" long html-type="submit">登录</i-button></i-col>
          <i-col span="12" class="text-right"><router-link to="/auth/login">使用已有账户登录</router-link></i-col>
        </i-row>
      </i-form-item>
    </i-form>
  </div>
</template>
<script>
import { PHONE_REGEX } from '@/patterns'
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        rePassword: '',
        phone: '',
        phonePrefix: '+86',
        code: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        password: {
          validator: (rule, value, callback) => {
            if (!value || value.length < 6) {
              callback(new Error('请输入至少6位的密码，区分大小写'))
            } else {
              if (this.form.rePassword) {
                this.$refs.form.validateField('rePassword')
              }
              callback()
            }
          }, trigger: 'blur'
        },
        rePassword: {
          validator: (rule, value, callback) => {
            if (!value) {
              callback('请再次输入密码')
            } else if (value === this.form.password) {
              callback()
            } else {
              callback(new Error('2次密码不一致'))
            }
          }, trigger: 'blur'
        },
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
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$router.push('/auth/register-result')
        }
      })
    }
  }
}
</script>
<style lang="stylus" src="./auth.styl"></style>
