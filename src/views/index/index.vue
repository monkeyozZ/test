<template>
  <div class="containaer">
    <div class="tools">
      <flexbox :gutter="0" justify="space-between">
      <flexbox-item :span="2.8">
        <div class="left">
          <svg-icon icon-class="address"></svg-icon>
          <span>{{city}}</span>
        </div>
      </flexbox-item>
      <flexbox-item :span="2.8">
        <div class="right" @click="qiandao">
          <svg-icon icon-class="qiandao"></svg-icon>
          <span>签到</span>
        </div>
      </flexbox-item>
    </flexbox>
    </div>

    <div class="banner">
      <img src="@/assets/img/banner.png" alt="">
    </div>

    <div class="tab_nav">
      <tab :line-width=2 active-color='#1F7CF0' :custom-bar-width="getBarWidth" v-model="index" :scroll-threshold="5">
          <tab-item class="vux-center" :selected="selected === item" v-for="(item, index) in list" @click="selected = item" :key="index">{{item}}</tab-item>
          <!-- <tab-item class="vux-center">
            筛选
            <svg-icon icon-class="filter" class="filter"></svg-icon>
          </tab-item> -->
      </tab>
      <div class="filter" @click="routeTo">
        <p>筛选<svg-icon icon-class="filter"></svg-icon></p>
      </div>
    </div>

      <swiper v-model="index" :show-dots="false" :threshold="150" height="100%">
        <swiper-item>
          <div class="tab-swiper vux-center">
            <scroll ref="scroll1" class="wrapper"
                  :data="alldata"
                  :pullDownRefresh="pullDownRefreshObj"
                  :pullUpLoad="pullUpLoadObj"
                  @pullingDown="onPullingDown"
                  @pullingUp="onPullingUp">
                <list-card></list-card>
            </scroll>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="tab-swiper vux-center">
            <scroll ref="scroll1" class="wrapper"
                  :data="alldata"
                  :pullDownRefresh="pullDownRefreshObj"
                  :pullUpLoad="pullUpLoadObj"
                  @pullingDown="onPullingDown"
                  @pullingUp="onPullingUp">
                <list-card></list-card>
            </scroll>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="tab-swiper vux-center">
            <scroll ref="scroll1" class="wrapper"
                  :data="alldata"
                  :pullDownRefresh="pullDownRefreshObj"
                  :pullUpLoad="pullUpLoadObj"
                  @pullingDown="onPullingDown"
                  @pullingUp="onPullingUp">
                <list-card></list-card>
            </scroll>
          </div>
        </swiper-item>
      </swiper>

      <x-dialog v-model="show" :dialog-style="{'max-width': '100%', width: '90.6%', 'background-color': 'transparent'}">
        <div class="qd_box">
          <div class="integral_box">
            <flexbox :gutter="0" wrap="wrap">
              <flexbox-item :span="4">
                <div class="item">
                  <div class="had">
                    5积分
                    <span>第一天</span>
                  </div>
                </div>
              </flexbox-item>
              <flexbox-item :span="4">
                <div class="item">
                  <div>
                    5积分
                    <span>第二天</span>
                  </div>
                </div>
              </flexbox-item>
              <flexbox-item :span="4">
                <div class="item">
                  <div>
                    5积分
                    <span>第三天</span>
                  </div>
                </div>
              </flexbox-item>
              <flexbox-item :span="4">
                <div class="item">
                  <div>
                    5积分
                    <span>第四天</span>
                  </div>
                </div>
              </flexbox-item>
              <flexbox-item :span="4">
                <div class="item">
                  <div>
                    5积分
                    <span>第五天</span>
                  </div>
                </div>
              </flexbox-item>
              <flexbox-item :span="4">
                <div class="item">
                  <div>
                    5积分
                    <span>第六天</span>
                  </div>
                </div>
              </flexbox-item>
            </flexbox>
          </div>
          <div class="share">
            <p class="last_day">
              <span>第七天</span>
              连续签到7天30积分
            </p>
            <button class="share_btn">分享领积分</button>
          </div>
          <p class="tip">每日分享，凭您的手气，最高获得50积分的</p>
        </div>
        <x-icon type="ios-close-outline" class="close" @click.native="closeDialog"></x-icon>
      </x-dialog>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Tab, TabItem, Swiper, SwiperItem, XDialog } from 'vux'
import ListCard from '@/components/listCard'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    ListCard,
    XDialog
  },
  data () {
    return {
      show: false,
      list: ['全部可抢', '优选', '淘单'],
      selected: '全部可抢',
      index: 0,
      city: '上海',
      getBarWidth: function (index) {
        if (index === 0) {
          return 56 + 'px'
        } else {
          return 28 + 'px'
        }
        // return (index + 1) * 22 + 'px'
      },
      alldata: [],
      pullDownRefresh: true,
      pullDownRefreshTxt: '刷新成功',
      pullDownRefreshThreshold: 65,
      pullDownRefreshStop: 40,
      pullUpLoad: true,
      pullUpLoadThreshold: 0,
      pullUpLoadMoreTxt: '数据加载中',
      pullUpLoadNoMoreTxt: '没有更多数据了',
      limitQuery: {
        pageSize: 6,
        pageNumber: 1
      }
    }
  },
  computed: {
    pullDownRefreshObj: function () {
      return this.pullDownRefresh ? {
        threshold: parseInt(this.pullDownRefreshThreshold),
        stop: parseInt(this.pullDownRefreshStop),
        txt: this.pullDownRefreshTxt
      } : false
    },
    pullUpLoadObj: function () {
      return this.pullUpLoad ? {
        threshold: parseInt(this.pullUpLoadThreshold),
        txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
      } : false
    }
  },
  methods: {
    routeTo () {
      this.$router.push('/filter')
    },
    onPullingDown () { // 下拉刷新
      this.limitQuery.pageNumber = 1
      /* let obj = {
        category: this.index + 2,
        pageSize: this.limitQuery.pageSize,
        pageNumber: this.limitQuery.pageNumber
      } */
      /* productApi.getlist(obj).then((res) => {
        // console.log(res)
        if (res.data.code === 0) {
          this.arr1 = res.data.data
        } else {
          this.$refs.scroll1.forceUpdate()
        }
      }) */
    },
    onPullingUp () { // 上拉加载
      // 更新数据
      this.limitQuery.pageNumber += 1
      /* let obj = {
        category: this.index + 2,
        pageSize: this.limitQuery.pageSize,
        pageNumber: this.limitQuery.pageNumber
      } */
      /* productApi.getlist(obj).then((res) => {
        if (res.data.data.length !== 0) {
          res.data.data.map((item) => {
            this.arr1 = this.arr1.concat(item)
          })
        } else {
          this.$refs.scroll1.forceUpdate()
        }
      }) */
    },
    qiandao () {
      this.show = true
    },
    closeDialog () {
      this.show = false
    }
  }
}
</script>

<style lang="less" scoped>
.containaer{
  height: calc(100vh - 100px);
  background-color: #f7f7f7;
  overflow-y: hidden;
  .tools{
    background-color: #fff;
    padding: 6px 0;
    .left,.right{
      padding: 0 15px;
      text-align: center;
      box-sizing: border-box;
      span{
        color:#333333;
      }
    }
    .left{
      .svg-icon{
        color: #cecece;
      }
    }
    .right{
      .svg-icon{
        color: #fab843;
      }
    }
  }
  .banner{
    margin-bottom: 5px;
    img{
      display: inline-block;
      max-width: 100%;
      width: 100%;
    }
  }
  .tab_nav{
    position: relative;
    border-bottom: 1px solid #e5e5e5;
    .vux-tab-wrap{
      width: 75%;
      .vux-tab-item{
        background: #fff;
        height: 44px;
      }
    }
    .filter{
      position: absolute;
      top: 0;
      right: 0;
      width: 25%;
      height: 44px;
      background: #fff;
      line-height: 44px;
      p{
        text-align: center;
        color: #666;
        .svg-icon{
          width: 14px;
          height: 14px;
        }
      }
    }
  }
  .wrapper{
    height: calc(100vh - 273px);
  }
  .qd_box{
    padding: 18px 0 20px 0;
    background: #fff;
    border-radius: 3px;
    margin-bottom: 20px;
    .integral_box{
      padding: 11px 11px 0 11px;
      .vux-flexbox-item{
        margin-top: 18px!important;
        .item{
          margin: 0 9px;
          >div{
            position: relative;
            height: 60px;
            background: url('./img/qdbg.png') center center no-repeat;
            background-size: 100% 100%;
            line-height: 60px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            span{
              position: absolute;
              top: 4px;
              left: 2px;
              line-height: 14px;
              transform:scale(0.72);
              font-size: 12px;
            }
          }
          >div.had{
             background: url('./img/had.png') center center no-repeat;
             background-size: 100% 100%;
          }
        }
      }
    }
    .share{
      height: 160px;
      background: url('./img/bg.png') center center no-repeat;
      background-size: 100% 100%;
      overflow: hidden;
      .last_day{
        position: relative;
        width: 73%;
        margin: 0 auto;
        margin-top: 19px;
        color: #FBEBE0;
        font-size: 14px;
        font-weight: 400;
        line-height: 46px;
        text-align: center;
        background:linear-gradient(19deg,rgba(251,210,73,1) 0%,rgba(245,166,35,1) 100%);
        box-shadow:0px 2px 6px 0px rgba(255,226,178,1);/* no */
        border-radius:4px;/* no */
        span{
          position: absolute;
          top: 0;
          left: 0;
          padding: 0 2px;
          background:linear-gradient(129deg,rgba(253,179,244,1) 0%,rgba(26,131,213,1) 100%);
          border-radius:2px;
          line-height: 18px;
          font-size: 12px;
        }
      }
      .share_btn{
        display: block;
        width: 73%;
        margin: 0 auto;
        margin-top: 32px;
        line-height: 46px;
        background:rgba(255,212,56,1);
        box-shadow:0px 2px 4px 0px rgba(255,234,156,1);
        border-radius:21px;
        outline: none;
        border: none;
        color: #A96106;
        font-size: 16px;
        text-align: center;
      }
    }
    .tip{
      font-size: 12px;
      color: #333333;
      line-height: 18px;
      font-weight: 400;
    }
  }
  .close{
    fill:#fff;
    width: 40px;
    height: 40px;
    font-size: 40px;
  }
}

  @media (max-width: 320px) {
    .containaer .qd_box .integral_box .vux-flexbox-item .item > div span{
      transform: scale(0.62);
      left: 0;
    }
  }

</style>
