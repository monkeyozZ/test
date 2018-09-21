<template>
  <div class="register">
    <svg-icon icon-class="close" class="close" @click.native="GoBack"></svg-icon>
    <h1 class="title">注册/登录</h1>
    <p class="tip"><svg-icon icon-class="jifen"></svg-icon>注册即送18888积分</p>
    <div class="form_box">
      <my-input type="tel" v-model="form.mobile" @validateFun="mobileValidate" @resetValidate="resetMobileValidate" class="mobile" :errorMessages="mobileErrorMsg" :maxlength="11">
        请输入手机号
      </my-input>

      <div class="code_box">
        <my-input type="tel" v-model="form.code"  @validateFun="codeValidate" @resetValidate="resetCodeValidate" class="code" :errorMessages="codeErrorMsg" :maxlength="4">
          请输入验证码
        </my-input>
        <x-button :class="{button: true, resetbg: resetbg}" :disabled="isdisable" @click.native="showConfirm">{{code_text}}</x-button>
      </div>
      <router-link to="/passlogin" class="redirect">密码登录</router-link>
    </div>
    <div v-transfer-dom class="codeConfirm">
      <confirm
      v-model="show"
      :close-on-confirm="false"
      title="请输入图形验证码"
      @on-confirm="onConfirm">
        <div class="pic_verify_box">
          <input type="tel" maxlength="4" v-model="pic_code" ref="pic_verify" autofocus="autofocus">
          <spinner v-if="loading" type="ripple" class="loading"></spinner>
          <img src="./code.jpg" alt="验证码">
        </div>
        <div class="error_msg">
          <p v-if="verifyErrorMsg">{{verifyErrorMsg}}</p>
        </div>
      </confirm>
    </div>
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
        mobile: '',
        code: ''
      },
      pic_code: '',
      mobileErrorMsg: '',
      codeErrorMsg: '',
      verifyErrorMsg: '',
      code_text: '获取验证码',
      resetbg: false,
      show: false,
      loading: false,
      isdisable: false,
      isSubmit: ''
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
    codeValidate () {
      if (this.form.code.length !== 0) {
        this.codeErrorMsg = ''
      } else {
        this.codeErrorMsg = '请输入验证码'
        this.isSubmit = false
      }
    },
    resetMobileValidate () {
      this.mobileErrorMsg = ''
    },
    resetCodeValidate () {
      this.codeErrorMsg = ''
    },
    showConfirm () {
      this.mobileValidate()
      if (this.mobileErrorMsg.length === 0) {
        this.show = true
        this.pic_code = ''
      }
    },
    onConfirm () {
      if (this.pic_code.length === 0) {
        this.verifyErrorMsg = '请输入图片验证码'
      } else {
        this.verifyErrorMsg = ''
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.show = false
          let n = 30
          const time = setInterval(() => {
            this.isdisable = true
            this.resetbg = true
            n -= 1
            this.code_text = `${n}s`
            if (n === 0) {
              this.isdisable = false
              this.resetbg = false
              this.code_text = '重新获取'
              clearInterval(time)
            }
          }, 1000)
        }, 500)
      }
    },
    GoBack () {
      history.back(-1)
    }
  },
  watch: {
    'form.code': {
      handler () {
        if (this.form.code.length === 4) {
          if (this.isSubmit.length !== 0) {
            if (this.isSubmit) {
              // api验证验证码是否正确
              setTimeout(() => {
                this.$router.push({path: '/setpassword'})
              }, 500)
            }
          } else {
            this.mobileValidate()
          }
        }
      }
    },
    deep: true
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
    .tip{
      font-size: 14px;
      color: #333333;
      overflow: hidden;
      .svg-icon{
        float: left;
        width: 24px;
        height: 24px;
        margin-right: 5px;
        color: #fab741;
      }
    }
    .form_box{
      margin-top: 70px;
      .mobile{
        margin-bottom: 45px
      }
      .code_box{
        position: relative;
        .code{
          input{
            padding-right: 30%;
          }
        }
        .button{
          position: absolute;
          width: 30%;
          height: 32px;
          padding: 10px;
          font-size: 12px;
          line-height: 12px;
          border-radius: 4px;
          box-sizing: border-box;
          right: 0;
          top: 50%;
          color: #fff;
          transform: translate(0, -50%);
          background:linear-gradient(143deg,rgba(98,192,251,1) 0%,rgba(51,140,245,1) 100%);
          box-shadow:0px 2px 4px 0px rgba(206,234,255,1);
        }
        .button.resetbg{
          background: #EEEEEE;
          color: #828282;
          box-shadow:none;
        }
      }
      .redirect{
        float: right;
        margin-top: 20px;
        margin-right: 5px;
        font-size: 14px;
        color: #1F7CF0;
        font-weight: 400px;
        line-height: 18px;
      }
    }
  }
  .codeConfirm{
    .pic_verify_box{
      position: relative;
      height: 40px;
      line-height: 40px;
      border:1px solid rgba(239,237,237,1);
      input{
        display: inline-block;
        float: left;
        padding-left: 8px;
        box-sizing: border-box;
        width: calc(70% - 28px);
        line-height: 40px;
        border: none;
        outline: none;
      }
      .loading{
        float: left;
        margin-top: 6px;
      }
      img{
        display: inline-block;
        float: right;
        width: 28%;
        height: 32px;
        margin-top: 4px;
      }
    }
    .error_msg{
      text-align: left;
      height: 18px;
      padding-left: 5px;
      font-size: 12px;
      color: #FF5136;
      line-height: 18px;
    }
  }

  @media (max-width:320px) {
    .register{
      .form_box{
          .code_box{
            .button{
              width: 33%;
            }
          }
        }
    }
  }
</style>
