<template>
  <div class="containaer">
    <div class="tab_nav">
      <div class="filter_time" @click="filterTime">
        <p>抢单时间<svg-icon :icon-class="status"></svg-icon></p>
      </div>
      <tab :line-width=2 active-color='#1F7CF0' :custom-bar-width="'56px'" v-model="index" :scroll-threshold="5">
          <tab-item class="vux-center" :selected="selected === item" v-for="(item, index) in list" @click="selected = item" :key="index">{{item}}</tab-item>
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
<!--         <swiper-item>
          <div class="tab-swiper vux-center">4</div>
        </swiper-item> -->
      </swiper>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Tab, TabItem, Swiper, SwiperItem } from 'vux'
import ListCard from '@/components/listCard'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    ListCard
  },
  data () {
    return {
      list: ['优选客户', '淘单客户'],
      selected: '优选客户',
      status: 'down',
      index: 0,
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
    filterTime () {
      if (this.status === 'down') { // 正序
        this.status = 'up'
      } else {
        this.status = 'down'
      }
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
    }
  }
}
</script>

<style lang="less" scoped>
.containaer{
  height: calc(100vh - 100px);
  background-color: #f7f7f7;
  overflow-y: hidden;
  .tab_nav{
    position: relative;
    margin-bottom: 5px;
    .vux-tab-wrap{
      width: 50%;
      margin: 0 auto;
      .vux-tab-item{
        background: #fff;
        height: 44px;
      }
    }
    .filter,.filter_time{
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
          margin-left: 2px;
          width: 14px;
          height: 14px;
        }
      }
    }
    .filter_time{
      left: 0;
    }
  }
  .wrapper{
    height: calc(100vh - 148px);
  }
}

</style>
