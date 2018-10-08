<template>
  <div class="details_box">
    <div class="base_info_box">
      <ul>
        <li>
          <p>
            <span class="name_box">
              <svg-icon icon-class="you"></svg-icon>
              张先生
            </span>
            <span class="money">50万</span>
          </p>
        </li>
        <li>
          <p class="time">申请时间：2018-09-03 13:5</p>
        </li>
        <li>
          <p class="detail_info">
            <span>
              <svg-icon icon-class="age"></svg-icon>
              20岁
            </span>
            <span>
              <svg-icon icon-class="address"></svg-icon>
              西双版纳
            </span>
            <span>
              <svg-icon icon-class="profession"></svg-icon>
              自由职业者
            </span>
          </p>
        </li>
      </ul>
    </div>
    <div class="mobile_tip_box">
      <div class="mobile_box">
        <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="4">
          <div class="mobile_detail">
            <svg-icon icon-class="mobile"></svg-icon>
            <span>137****4758</span>
          </div>
        </flexbox-item>
        <flexbox-item :span="4">
            <p class="tip">抢单后可沟通</p>
        </flexbox-item>
        <flexbox-item :span="4">
          <button>立即沟通</button>
        </flexbox-item>
        </flexbox>
      </div>
      <div class="tip_box">
        <p>
         备注：这个电话号码没打通，需要再次联系；这个号码是空号，找 客服咨询；这个客户在忙，有待进一步沟通
        </p>
      </div>
    </div>

    <div class="base_info_list">
      <h2 class="title">
        <svg-icon icon-class="baseinfo"></svg-icon>
        基本信息
      </h2>
      <ul class="item_box">
        <li>
          <p>性别<span>男</span></p>
        </li>
        <li>
          <p>职业<span>自由职业者</span></p>
        </li>
        <li>
          <p>社保<span>有</span></p>
        </li>
        <li>
          <p>公积金<span>有</span></p>
        </li>
      </ul>
    </div>

    <div class="asset_info_list">
      <h2 class="title">
        <svg-icon icon-class="asset"></svg-icon>
        资产信息
      </h2>
      <ul class="item_box">
        <li>
          <p>信用卡<span>有</span></p>
        </li>
        <li>
          <p>微粒贷<span>无</span></p>
        </li>
        <li>
          <p>名下房产<span>贷款房</span></p>
        </li>
        <li>
          <p>名下车产<span>按揭车</span></p>
        </li>
        <li>
          <p>个人保险<span>≥2400</span></p>
        </li>
      </ul>
    </div>
    <div class="button_box">
      <button class="button">立即抢单</button>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, XButton } from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    XButton
  },
  data () {
    return {
      id: 1
    }
  },
  computed: {
    /* id () {
      return this.$route.params.id
    } */
  },
  methods: {
    getdata () {
      console.log(this.$route.params.id)
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>

<style lang="less" scoped>
  .details_box{
    padding-bottom: 15px;
    background: #FCFCFC;
    .base_info_box{
      padding: 15px 15px 0 15px;
      overflow: hidden;
      border-bottom: 1px solid #F7F7F7;
      background: #fff;
      ul{
        li{
          list-style: none;
          margin-bottom: 10px;
          p{
            font-size: 18px;
            line-height: 25px;
            .name_box{
            color: #333;
            .svg-icon{
                font-size: 16px;
              }
            }
            .money{
              margin-left: 37px;
              color: #F7912F
            }
          }
          .time{
            font-size: 12px;
            color: #999;
            line-height: 18px;
          }
          .detail_info{
            font-size: 12px;
            line-height: 18px;
            color: #999999;
            span{
              &:not(:first-child){
                margin-left: 27px
              }
              .svg-icon{
                color: #F9D79D;
              }
            }
          }
        }
      }
    }
    .mobile_tip_box{
      padding: 15px 15px 10px;
      background: #fff;
      margin-bottom: 8px;
      .mobile_box{
        .mobile_detail{
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
        .tip{
          font-size: 12px;
          line-height: 18px;
          color: #4AA7F8;
        }
        button{
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
      }
      .tip_box{
        margin-top: 30px;
        p{
          font-size: 12px;
          color: #666666;
          line-height: 18px;
          font-weight: 500;
        }
      }
    }
    .base_info_list,.asset_info_list{
      overflow: hidden;
      background: #fff;
      padding: 15px 15px 0 15px;
      margin-bottom: 8px;
      .title{
        margin-bottom: 8px;
        font-size: 14px;
        line-height: 20px;
        color: #333;
        font-weight: 500;
        .svg-icon{
          width: 20px;
          height: 20px;
          color: #CECECE;
          margin-right: 5px;
        }
      }
      .item_box{
        li{
          padding: 8px 0;
          list-style: none;
          font-size: 14px;
          color: #666666;
          font-weight: 500;
          line-height: 18px;
          p{
            text-align: left;
            span{
              float: right;
            }
          }
        }
      }
    }
    .asset_info_list{
      margin-bottom: 0;
      border-bottom: 1px solid #F7F7F7;
    }
    .button_box{
      background: #fff;
      overflow: hidden;
      .button{
        margin: 52px auto 42px auto;
        display: block;
        width: 91.5%;
        height: 45px;
        border: none;
        color: #fff;
        font-size: 18px;
        line-height: 45px;
        background:linear-gradient(151deg,rgba(66,179,249,1) 0%,rgba(31,124,240,1) 100%);
        border-radius:4px; /* no */
      }
    }
  }
</style>
