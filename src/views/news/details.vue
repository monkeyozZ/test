<template>
  <div class="details_box">
    <h2 class="title">{{newsData.title}}</h2>
    <p class="time">{{newsData.time | transformDate2}}</p>
    <div v-html="newsData.content" class="container">
    </div>
  </div>
</template>

<script>
import detailsApi from '@/api/details'
export default {
  data () {
    return {
      newsData: []
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    getDetails () {
      let obj = {
        messId: this.id
      }
      this.$vux.loading.show({
        text: '加载中...'
      })
      detailsApi.getNewsDetails(obj).then((res) => {
        if (res.data.code === 0) {
          this.newsData = res.data.data
          this.$vux.loading.hide()
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getDetails()
  }
}
</script>

<style lang="less" scoped>
.details_box{
  padding: 12px 15px 0;
  overflow: hidden;
  .title{
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }
  .time{
    margin: 3px 0 15px;
    font-size: 12px;
    color: #666;
  }
  .container{
    word-break: break-all;
    word-wrap: break-word;
  }
}
</style>
