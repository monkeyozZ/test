<template>
  <div class="filter_box">
    <group class="vux-1px-b">
      <cell title="城市" is-link link="/city" :value="selectedCity"></cell>
      <popup-picker title="借款额度" :data="list" v-model="form.money" placeholder="不限" @on-hide="onHideMoney"></popup-picker>
      <popup-picker title="年龄区间" :data="list2" v-model="form.age" placeholder="不限" @on-hide="onHideAge"></popup-picker>
      <!-- <popup-picker title="客户类型" :data="list3" v-model="form.category" placeholder="不限" @on-hide="onHideCate"></popup-picker> -->
      <popup-picker title="是否有房" :data="list4" v-model="form.house" placeholder="不限" @on-hide="onHideHouse"></popup-picker>
      <popup-picker title="是否有车" :data="list5" v-model="form.car" placeholder="不限" @on-hide="onHideCar"></popup-picker>
      <popup-picker title="是否有保单" :data="list6" v-model="form.baodan" placeholder="不限" @on-hide="onHidebao"></popup-picker>
    </group>
    <button class="btn" @click="setFilter">确定</button>
  </div>
</template>
<script>
import { Group, PopupPicker, Cell } from 'vux'
import { mapGetters, mapActions } from 'vuex'
import filterApi from '@/api/filter'
import bus from '@/utils/eventBus'
export default {
  name: 'filters',
  components: {
    Group,
    PopupPicker,
    Cell
  },
  data () {
    return {
      selectedCity: '不限',
      list: [],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      list6: [],
      form: {
        money: [],
        age: [],
        category: [],
        house: [],
        car: [],
        baodan: []
      },
      skipUrl: '',
      orignOrder: false,
      orignCustomer: false
    }
  },
  computed: {
    ...mapGetters({
      city: 'city'
    })
  },
  methods: {
    ...mapActions({
      setOrderCondition: 'setOrderCondition',
      setCustomerCondition: 'setCustomerCondition'
    }),
    setFilter () {
      let obj = {
        citys: this.city.join(','),
        loanMoney: this.form.money.join(','),
        age: this.form.age.join(','),
        occupation: this.form.category.join(','),
        house: this.form.house.join(','),
        car: this.form.car.join(','),
        hasPolicy: this.form.baodan.join(',')
      }
      if (this.orignOrder) {
        let itemArr = []
        for (const key in obj) {
          itemArr.push(obj[key])
        }
        let status = itemArr.every((item) => {
          return item === ''
        })
        if (!status) {
          this.setOrderCondition(obj)
        } else {
          this.setOrderCondition({})
        }
        this.$router.push(this.skipUrl)
      }
      if (this.orignCustomer) {
        let itemArr = []
        for (const key in obj) {
          itemArr.push(obj[key])
        }
        let status = itemArr.every((item) => {
          return item === ''
        })
        if (!status) {
          this.setCustomerCondition(obj)
        } else {
          this.setCustomerCondition({})
        }
        this.$router.push(this.skipUrl)
      }
    },
    getFilter () {
      filterApi.getFilterList().then((res) => {
        if (res.data.code === 0) {
          this.list = new Array(res.data.data.LoanMoney)
          this.list2 = new Array(res.data.data.Age)
          this.list3 = new Array(res.data.data.Customer)
          this.list4 = new Array(res.data.data.House)
          this.list5 = new Array(res.data.data.Car)
          this.list6 = new Array(res.data.data.Policy)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    onHideMoney (type) {
      if (!type) {
        this.form.money = []
      }
    },
    onHideAge (type) {
      if (!type) {
        this.form.age = []
      }
    },
    onHideCate (type) {
      if (!type) {
        this.form.category = []
      }
    },
    onHideHouse (type) {
      if (!type) {
        this.form.house = []
      }
    },
    onHideCar (type) {
      if (!type) {
        this.form.car = []
      }
    },
    onHidebao (type) {
      if (!type) {
        this.form.baodan = []
      }
    }
  },
  watch: {
    city: {
      handler () {
        if (this.city.length === 0) {
          this.selectedCity = '不限'
        } else {
          if (this.city.length > 3) {
            this.selectedCity = `${this.city.slice(0, 3).join(',')}...`
          } else {
            this.selectedCity = this.city.join(',')
          }
        }
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
    // 通过 `vm` 访问组件实例
      if (from.fullPath !== '/city') {
        vm.skipUrl = from.fullPath
      }

      if (from.fullPath === '/') {
        vm.orignOrder = true
      } else {
        if (from.fullPath !== '/city') {
          vm.orignOrder = false
        }
      }

      if (from.fullPath === '/customer') {
        vm.orignCustomer = true
      } else {
        if (from.fullPath !== '/city') {
          vm.orignCustomer = false
        }
      }
    })
  },
  mounted () {
    bus.$on('back', () => {
      if (this.skipUrl) {
        this.$router.push(this.skipUrl)
      } else {
        this.$router.push('/')
      }
    })
    this.getFilter()
  }
}
</script>

<style lang="less" scoped>
.filter_box{
  .weui-cell{
    height: 52px;
    box-sizing: border-box;
  }
  .btn{
      display: block;
      width: 91.5%;
      margin: 52px auto 100px;
      border: none;
      outline: none;
      line-height: 45px;
      color: #fff;
      text-align: center;
      font-size: 18px;
      background:linear-gradient(151deg,rgba(66,179,249,1) 0%,rgba(31,124,240,1) 100%);
      border-radius:4px;
    }
}
</style>
