<template>
  <div class="ciyt_box">
    <div class="current_city_box">
      <h2 class="title">当前城市</h2>
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="4" class="current_city">
            <svg-icon icon-class="address"></svg-icon>
            <span>上海</span>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="has_select_box">
      <h2 class="title">最多可选五个城市</h2>
        <flexbox :gutter="0" wrap="wrap">
          <transition-group name="list" tag="div" class="animate_box">
            <flexbox-item :span="4" class="selected_city" v-for="(item, index) in selected" :key="index">
              <div>
                {{item}}
                <svg-icon icon-class="cancel" @click.native="removeData"></svg-icon>
              </div>
            </flexbox-item>
            </transition-group>
        </flexbox>
    </div>

    <div class="hot_city_box">
      <h2 class="title">热门城市</h2>
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="4" class="hot_city" v-for="(item, index) in hot_city" :key="index">
          <div @click="setData">
            {{item}}
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="all_city">
      <ul class="city_box">
          <li v-for="(value, key, index) in sortgroupcity" :key="index"  class="letter_item">
              <h4 class="city_title">{{key}}</h4>
              <ul class="letter_city_box">
                  <li v-for="item in value" :key="item.id" class="city_item" @click="setData">
                      {{item.name}}
                  </li>
              </ul>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
import groupcity from '@/../static/city.json'
export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      selected: ['上海'],
      hot_city: ['上海', '北京', '广州', '深圳', '南京', '杭州', '天津', '武汉', '重庆'],
      arr: []
    }
  },
  computed: {
    // 将获取的数据按照A-Z字母开头排序
    sortgroupcity () {
      let sortobj = {}
      for (let i = 65; i <= 90; i++) {
        if (groupcity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = groupcity[String.fromCharCode(i)]
        }
      }
      return sortobj
    }
  },
  methods: {
    indexOf (arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
          return i
        }
      }

      return -1
    },
    remove (arr, val) {
      var index = this.indexOf(arr, val)
      if (index > -1) {
        arr.splice(index, 1)
      }
    },
    setData (e) {
      if (this.selected.length === 5) {
        this.$vux.toast.text('最多只能选择五个城市', 'middle')
      } else {
        let city = e.target.innerText
        if (this.selected.length === 0) {
          this.arr.push(city)
        } else {
          for (let index = 0; index < this.selected.length; index++) {
            if (this.selected[index] === city) {
              this.$vux.toast.text('已选择该城市', 'middle')
            } else {
              this.arr.push(city)
              // console.log(this.arr)
              // this.arr = new Set(this.arr)
            }
          }
        }
        let newArr = new Set(this.arr)
        this.arr = [...newArr]
        let newSelected = new Set(this.selected.concat(this.arr))
        this.selected = [...newSelected]
      }
    },
    removeData (e) {
      this.remove(this.selected, e.path[2].innerText)
      this.remove(this.arr, e.path[2].innerText)
      // console.log(e.path[2].innerText)
    }
  },
  mounted () {
    // console.log(this.sortgroupcity)
  }
}
</script>

<style lang="less" scoped>
.ciyt_box{
  .title{
    font-size: 14px;
    line-height: 18px;
    color: #999;
    font-weight: normal;
    margin: 8px 0;
  }
  .current_city_box{
    padding: 0 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #d9d9d9;
    .current_city{
      background:#eee;
      padding: 8px 0;
      text-align: center;
      color: #333;
      .svg-icon{
        color: #CECECE;
      }
    }
  }
  .has_select_box{
    padding: 0 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #d9d9d9;
    .animate_box{
      width: 100%;
      text-align: left;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      display: -webkit-flex;
      box-align: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      box-direction: row;
      box-orient: horizontal;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .list-enter-active{
      transition: all .5s ease-in-out
    }
    .list-leave-active{
      transition: all .2s ease;
      opacity: 0
    }
    .list-enter{
      transform: translateY(20px);
      opacity: 0
    }
    .list-move {
      transition: all .5s
    }
    .selected_city{
      margin-top: 15px!important;
      div{
        position: relative;
        padding: 8px 0;
        margin: 0 7px;
        text-align: center;
        color: #4AA7F8;
        border: 1px solid #4AA7F8;
        border-radius: 4px;/* no */
        .svg-icon{
          position: absolute;
          top: -9px;
          right: -13px;
          color: #FF6969;
        }
      }
    }
  }
  .hot_city_box{
    padding: 0 15px;
    .hot_city{
      margin-bottom: 15px!important;
       div{
        padding: 8px 0;
        margin: 0 7px;
        text-align: center;
        background:rgba(238,238,238,1);
        color: #333;
        border-radius: 4px;/* no */
       }
    }
  }
  .all_city{
    .city_box{
      .letter_item{
        list-style: none;
        .city_title{
          padding-left: 15px;
          font-weight: normal;
          background: #EEEEEE;
          color: #333;
          font-size: 14px;
          line-height: 26px;
        }
        .letter_city_box{
          padding: 0 15px;
          .city_item{
            list-style: none;
            padding: 13px 0;
            &:not(:last-child){
              border-bottom: 1px solid #EFEDED;
            }
          }
        }
      }
    }
  }
}
</style>
