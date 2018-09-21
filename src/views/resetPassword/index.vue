<template>
  <div class="register">
    <svg-icon icon-class="close" class="close" @click.native="GoBack"></svg-icon>
    <h1 class="title">重置密码</h1>
    <div class="form_box">
      <div class="passsword_box">
        <my-input :type="inputType" v-model="form.password" @validateFun="passValidate" @resetValidate="resetPassValidate" :errorMessages="passErrorMsg" :maxlength="16">
        请设置密码
        </my-input>
        <svg-icon :icon-class="iconType" class="eye" @click.native="showPassword"></svg-icon>
      </div>

      <div class="passsword_box">
        <my-input :type="inputType2" v-model="form.password2" @validateFun="passValidate2" @resetValidate="resetPassValidate2" :errorMessages="passErrorMsg2" :maxlength="16">
        请确认密码
        </my-input>
        <svg-icon :icon-class="iconType2" class="eye" @click.native="showPassword2"></svg-icon>
      </div>
    </div>
    <x-button class="submit" action-type="button" :show-loading="loading" @click.native="submit" :disabled="isdisable">重置密码</x-button>
  </div>
</template>

<script>
import MyInput from '@/components/input'
import { XButton, Confirm, TransferDomDirective as TransferDom, Spinner } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    MyInput,
    XButton,
    Confirm,
    Spinner
  },
  data () {
    return {
      form: {
        password: '',
        password2: ''
      },
      passErrorMsg: '',
      passErrorMsg2: '',
      inputType: 'password',
      iconType: 'closeEye',
      inputType2: 'password',
      iconType2: 'closeEye',
      loading: false,
      isdisable: false,
      isSubmit: ''
    }
  },
  methods: {
    passValidate () {
      if (this.form.password.length !== 0) {
        let passRegex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
        if (!passRegex.test(this.form.password)) {
          this.passErrorMsg = '请输入6-16位数字或字母'
          this.isSubmit = false
        } else {
          this.isSubmit = true
        }
      } else {
        this.passErrorMsg = '请输入密码'
        this.isSubmit = false
      }
    },
    passValidate2 () {
      if (this.form.password2.length !== 0) {
        let passRegex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
        if (!passRegex.test(this.form.password2)) {
          this.passErrorMsg2 = '请输入6-16位数字或字母'
          this.isSubmit = false
        } else {
          if (this.form.password !== this.form.password2) {
            this.passErrorMsg2 = '前后密码输入不一致'
            this.isSubmit = false
          } else {
            this.passErrorMsg2 = ''
            this.isSubmit = true
          }
        }
      } else {
        this.passErrorMsg2 = '请再次输入密码'
        this.isSubmit = false
      }
    },
    resetPassValidate () {
      this.passErrorMsg = ''
    },
    resetPassValidate2 () {
      this.passErrorMsg2 = ''
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
    showPassword2 () {
      if (this.iconType2 === 'closeEye') {
        this.iconType2 = 'eye'
        this.inputType2 = 'text'
      } else {
        this.iconType2 = 'closeEye'
        this.inputType2 = 'password'
      }
    },
    GoBack () {
      history.back(-1)
    },
    submit () {
      if (this.isSubmit.length !== 0) {
        if (this.isSubmit) {
          // 提交
          this.isdisable = true
          this.loading = true
        }
      } else {
        this.passValidate()
        this.passValidate2()
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
    .submit{
      margin-top: 95px;
      background:linear-gradient(151deg,rgba(66,179,249,1) 0%,rgba(31,124,240,1) 100%);
      border-radius:4px;
      color: #fff;
      line-height: 47px;
    }
  }
</style>
