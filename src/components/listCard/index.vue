<template>
  <div class="list_box">
    <div class="list_item" v-for="(item, index) in 5" :key="index" @click="Godetails(1)">
          <div class="list_header">
      <flexbox :gutter="0">
        <flexbox-item :span="3" class="name_box">
          <svg-icon icon-class="tao"  v-if="false"></svg-icon>
          <svg-icon icon-class="you" style="vertical-align: inherit"></svg-icon>
          <span>黄先生</span>
        </flexbox-item>
        <flexbox-item class="money_box">
          <span>1~2万</span>
        </flexbox-item>
        <flexbox-item :span="3" class="time_box">
          <span>10小时前</span>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="list_body">
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="4">
          <div>
            <svg-icon icon-class="address" :class="{active: true}"></svg-icon>
            <span>城市</span>
          </div>
        </flexbox-item>
        <flexbox-item :span="4">
         <div>
            <svg-icon icon-class="profession"></svg-icon>
            <span>职业</span>
          </div>
        </flexbox-item>
        <flexbox-item :span="4">
          <div>
            <svg-icon icon-class="card"></svg-icon>
            <span>信用卡</span>
          </div>
        </flexbox-item>
        <flexbox-item :span="4">
          <div>
            <svg-icon icon-class="car"></svg-icon>
            <span>有车</span>
          </div>
        </flexbox-item>
        <flexbox-item :span="4">
          <div>
            <svg-icon icon-class="house"></svg-icon>
            <span>有房</span>
          </div>
        </flexbox-item>
        <flexbox-item :span="4">
          <div>
            <svg-icon icon-class="baodan"></svg-icon>
            <span>有保单</span>
          </div>
        </flexbox-item>
      </flexbox>
      <div class="customer_tools" v-if="$route.path === '/customer'">
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="6">
            <div class="mobile_detail">
              <svg-icon icon-class="mobile"></svg-icon>
              <span>137****4758</span>
            </div>
          </flexbox-item>
          <flexbox-item :span="6">
            <button class="comm">立即沟通</button>
            <button class="remarks">备注</button>
          </flexbox-item>
        </flexbox>
        <p>备注：<span>未接通</span></p>
      </div>
      <div v-if="$route.path === '/'">
        <button class="button">400积分立即抢</button>
        <button class="button2" v-if="false">已被抢</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {}
  },
  methods: {
    Godetails (id) {
      this.$router.push({name: 'orderdetails', params: { id: id }})
    }
  }
}
</script>

<style lang="less" scoped>
.list_item{
  margin-bottom: 5px;
}
.list_header{
  padding: 15px 20px;
  background-color: #fff;
  border-bottom: 1px solid #979797;/* px */
  .name_box,.time_box{
    text-align: center;
  }
  .name_box{
    font-size: 18px
  }
  .money_box{
    padding-left: 10px;
    color: #F7912F;
    font-size: 18px
  }
  .time_box{
    color: #9B9B9B;
  }
}
.list_body{
  padding: 15px 27px;
  background-color: #fff;
  .vux-flexbox-item{
    padding: 0 5px;
    box-sizing: border-box;
    .svg-icon{
      color: #d8d8d8;
    }
    .svg-icon.active{
      color: #FFD79B;
    }
    div{
      background-color: #DDF2FE;
      text-align: center;
      font-size: 14px;
      padding: 8px 0
    }
    &:nth-child(1) {
      margin-bottom: 10px;
    }
    &:nth-child(2) {
      margin-bottom: 10px;
    }
    &:nth-child(3) {
      margin-bottom: 10px;
    }
  }
  .button{
    display: block;
    width: 77%;
    height: 32px;
    margin: 0 auto;
    margin-top: 15px;
    border: none;
    color: #fff;
    font-size: 16px;
    line-height: 32px;
    background:linear-gradient(154deg,rgba(98,192,251,1) 0%,rgba(51,140,245,1) 100%);
    box-shadow:0px 2px 4px 0px rgba(206,234,255,1);/* no */
    border-radius:4px; /* no */
  }
  .button2{
    display: block;
    width: 77%;
    height: 32px;
    margin: 0 auto;
    margin-top: 15px;
    border: none;
    color: #fff;
    font-size: 16px;
    line-height: 32px;
    background:rgba(216,216,216,1);
    box-shadow:0px 3px 4px 0px rgba(206,206,206,0.5); /* no */
    border-radius:4px; /* no */
  }
  .customer_tools{
    margin-top: 10px;
    .vux-flexbox-item{
      margin-bottom: 5px;
    }
    .mobile_detail{
      background: #fff;
      text-align: left;
      .svg-icon{
        color: #D8D8D8;
      }
      span{
        margin-left: 3px;
        font-size: 14px;
        color: #333;
        line-height: 20px;
        font-weight: 500;
      }
    }
    .remarks{
      display: block;
      float: right;
      padding: 0 15px;
      margin-right: 10px;
      line-height: 26px;
      background:linear-gradient(138deg,rgba(0,207,196,1) 0%,rgba(0,159,221,1) 100%);
      color: #fff;
      outline: none;
      border: none;
      font-size: 12px;
      text-align: center
    }
    .comm{
      display: block;
      float: right;
      padding: 0 4px;
      line-height: 26px;
      background:linear-gradient(154deg,rgba(98,192,251,1) 0%,rgba(51,140,245,1) 100%);
      color: #fff;
      outline: none;
      border: none;
      font-size: 12px;
      text-align: center
    }
    p{
      padding-left: 5px;
      color: #4AA7F8;
    }
  }
}
</style>
