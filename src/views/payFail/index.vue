<template>
<scroll ref="scroll" class="wrapper">
  <div class="payFail">
    <svg-icon icon-class="payFail"></svg-icon>
    <p>充值失败！</p>
    <div class="btn_box">
      <div>
        <button class="active">稍后再试</button>
      </div>
    </div>
  </div>
</scroll>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.wrapper{
    height: calc(100vh - 46px);
  }
  .payFail{
    padding: 28px 32px 36px;
    .svg-icon{
      display: block;
      margin: 0 auto;
      width: 56px;
      height: 56px;
      color: #FF6969;
    }
    p{
      margin-top: 24px;
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;
    }
    .btn_box{
      margin-top: 46px;
      div{
        width: 50%;
        margin: 0 auto;
        button{
          display: block;
          width: 86.8%;
          margin: 0 auto;
          line-height: 40px;
          text-align: center;
          border: none;
          outline: none;
          background: #fff;
          border-radius:4px;
          color: #1F7CF0;
        }
        .active{
          background:linear-gradient(154deg,rgba(98,192,251,1) 0%,rgba(51,140,245,1) 100%);
          box-shadow:0px 2px 4px 0px rgba(206,234,255,1);
          color: #fff;
        }
      }
    }
  }
</style>
