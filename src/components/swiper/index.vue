<template>
  <div>
    <swiper v-if="isKeep" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <a :href="login_status?'javascript:;':bannerArr[0].link"
          @click="statistics('点击banner', {'bannerUrl': bannerArr[0].imgSrc?baseUrl + bannerArr[0].imgSrc: ''})
          ">
            <img :src="bannerArr[0].imgSrc?baseUrl + bannerArr[0].imgSrc: ''">
          </a>
        </swiper-slide>
        <swiper-slide>
          <a :href="bannerArr[1].link">
            <img :src="bannerArr[1].imgSrc?baseUrl + bannerArr[1].imgSrc: ''">
          </a>
        </swiper-slide> -->
        Optional controls
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'
import indexApi from '@/api/index'
export default {
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    ...mapGetters(['login_status'])
  },
  data () {
    return {
      baseUrl: process.env.BASE_API + '/resource/',
      bannerArr: [{imgSrc: '', link: ''}, {imgSrc: '', link: ''}],
      swiperOption: {
        autoplay: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        // loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      isKeep: false
    }
  },
  methods: {
    getBanner () {
      indexApi.getBanner().then((res) => {
        if (res.data.code === 0) {
          this.bannerArr = res.data.data
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  activated () {
    this.isKeep = true
  },
  deactivated () {
    this.isKeep = false
  },
  mounted () {
    this.getBanner()
  }
}
</script>

<style lang="less" scoped>
.swiper-container{
  .swiper-slide{
    img{
      display: inline-block;
      max-width: 100%;
      width: 100%;
      height: auto;
    }
  }
}
</style>
