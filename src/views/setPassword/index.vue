<template>
  <div class="register">
    <svg-icon icon-class="close" class="close" @click.native="GoBack"></svg-icon>
    <h1 class="title">设置登录密码</h1>
    <div class="form_box">
      <div class="passsword_box">
        <my-input :type="inputType" v-model="form.password" @validateFun="passValidate" @resetValidate="resetPassValidate" :errorMessages="passErrorMsg" :maxlength="16">
        请输入6-16位数字或字母
        </my-input>
        <svg-icon :icon-class="iconType" class="eye" @click.native="showPassword"></svg-icon>
      </div>
      <my-input type="text" v-model="form.inviteCode">
        请输入邀请人的邀请码 (选填)
      </my-input>
    </div>
    <div class="xieyi">
      <check-icon :value.sync="ischeck">阅读并同意</check-icon>
      <router-link to="/xieyi">《接单宝用户协议》</router-link>
      <p class="error" v-if="showCheckError">请勾选《接单宝用户协议》</p>
    </div>
    <x-button class="submit" action-type="button" :show-loading="loading" @click.native="submit" :disabled="isdisable">注册</x-button>
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
        password: '',
        inviteCode: null
      },
      passErrorMsg: '',
      inputType: 'password',
      iconType: 'closeEye',
      ischeck: true,
      loading: false,
      showCheckError: false,
      isSubmit: '',
      isdisable: false
    }
  },
  methods: {
    passValidate () {
      if (this.form.password.length !== 0) {
        let passRegex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
        if (!passRegex.test(this.form.password)) {
          this.passErrorMsg = '请输入6-16位数字与字母组合'
          this.isSubmit = false
        } else {
          this.isSubmit = true
        }
      } else {
        this.passErrorMsg = '请设置密码'
        this.isSubmit = false
      }
    },
    resetPassValidate () {
      this.passErrorMsg = ''
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
          if (!this.ischeck) {
            this.showCheckError = true
          } else {
            // 提交
            this.isdisable = true
            this.loading = true
          }
        }
      } else {
        this.passValidate()
      }
    },
    GoBack () {
      history.back(-1)
    }
  },
  watch: {
    ischeck: {
      handler () {
        if (this.ischeck) {
          this.showCheckError = false
        }
      }
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
        margin-bottom: 45px;
        .eye{
          position: absolute;
          top: 50%;
          right: 2px;
          transform: translate(0,-50%);
          color:#EEEEEE;
        }
      }
    }
    .xieyi{
      position: relative;
      margin-top: 20px;
      a{
        color: #1F7CF0;
        font-size: 14px;
        line-height: 18px;
      }
      .error{
        position: absolute;
        font-size: 12px;
        color: #FF5136;
        bottom: 0;
        left: 0;
        transform: translate(0,100%)
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
