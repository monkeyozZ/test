<template>
  <div class="register">
    <svg-icon icon-class="close" class="close" @click.native="GoBack"></svg-icon>
    <h1 class="title">密码登录</h1>
    <div class="form_box">
      <my-input type="tel" v-model="form.mobile" @validateFun="mobileValidate" @resetValidate="resetMobileValidate" class="mobile" :errorMessages="mobileErrorMsg" :maxlength="11">
        请输入手机号
      </my-input>
      <div class="passsword_box">
        <my-input :type="inputType" v-model="form.password" @validateFun="passValidate" @resetValidate="resetPassValidate" :errorMessages="passErrorMsg" :maxlength="16">
        请输入密码
        </my-input>
        <svg-icon :icon-class="iconType" class="eye" @click.native="showPassword"></svg-icon>
      </div>
    </div>
    <div class="panel">
      <router-link to="/findpassword" class="redirect">忘记密码</router-link>
      <router-link to="/" class="redirect">验证码注册/登录</router-link>
    </div>
    <x-button class="submit" action-type="button" :show-loading="loading" @click.native="submit" :disabled="isdisable">登录</x-button>
  </div>
</template>

<script>
import MyInput from '@/components/input'
import { XButton, CheckIcon } from 'vux'
export default {
  components: {
    MyInput,
    XButton,
    CheckIcon
  },
  data () {
    return {
      form: {
        mobile: '',
        password: ''
      },
      mobileErrorMsg: '',
      passErrorMsg: '',
      inputType: 'password',
      iconType: 'closeEye',
      loading: false,
      isSubmit: '',
      isdisable: false
    }
  },
  methods: {
    mobileValidate () {
      if (this.form.mobile.length !== 0) {
        this.mobileErrorMsg = ''
        let reg = /^(13[0-9]|14[5|7]|15[0-9]|17[0-9]|18[0-9])\d{8}$/
        if (!reg.test(this.form.mobile)) {
          this.mobileErrorMsg = '手机格式不正确'
          this.isSubmit = false
        } else {
          this.mobileErrorMsg = ''
          this.isSubmit = true
          if (this.form.code.length !== 0) {
            this.$vux.toast.text('调皮了噢', 'top')
          }
        }
      } else {
        this.mobileErrorMsg = '请输入手机号'
        this.isSubmit = false
      }
    },
    passValidate () {
      if (this.form.password.length !== 0) {
        let passRegex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
        if (!passRegex.test(this.form.password)) {
          this.passErrorMsg = '密码错误'
          this.isSubmit = false
        } else {
          this.isSubmit = true
        }
      } else {
        this.passErrorMsg = '请输入密码'
        this.isSubmit = false
      }
    },
    resetPassValidate () {
      this.passErrorMsg = ''
    },
    resetMobileValidate () {
      this.mobileErrorMsg = ''
    },
    showPassword () {
      if (this.iconType === 'closeEye') {
        this.iconType = 'eye'
        this.inputType = 'text'
      } else {
        this.iconType = 'closeEye'
        this.inputType = 'password'
      }
    },
    submit () {
      if (this.isSubmit.length !== 0) {
        if (this.isSubmit) {
          // 提交
          this.isdisable = true
          this.loading = true
        }
      } else {
        this.mobileValidate()
        this.passValidate()
      }
    },
    GoBack () {
      history.back(-1)
    }
  }
}
</script>

<style lang="less" scoped>
  .register{
    padding: 0 28px;
    .close{
      margin-top: 30px;
      font-size: 15px;
      width: 15px;
      height: 15px;
      color: #444444;
    }
    .title{
      margin: 21px 0 14px 0;
      font-size: 24px;
      line-height: 33px;
      font-family:PingFangSC-Medium;
    }
    .form_box{
      margin-top: 90px;
      .passsword_box{
        position: relative;
        margin-top: 45px;
        .eye{
          position: absolute;
          top: 50%;
          right: 2px;
          transform: translate(0,-50%);
          color:#EEEEEE;
        }
      }
    }
    .panel{
      margin-top: 20px;
      overflow: hidden;
      a{
        color: #1F7CF0;
        font-size: 14px;
        line-height: 18px;
        &:first-child{
          float: left;
        }
        &:last-child{
          float: right;
        }
      }
    }
    .submit{
      margin-top: 35px;
      background:linear-gradient(151deg,rgba(66,179,249,1) 0%,rgba(31,124,240,1) 100%);
      border-radius:4px;
      color: #fff;
      line-height: 47px;
    }
  }
</style>
