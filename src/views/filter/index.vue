<template>
  <div class="filter_box">
    <group>
      <cell title="城市" is-link link="/city" :value="'不限'"></cell>
      <popup-picker title="借款额度" :data="list" v-model="form.money" placeholder="不限"></popup-picker>
      <popup-picker title="年龄区间" :data="list2" v-model="form.age" placeholder="不限"></popup-picker>
      <popup-picker title="客户类型" :data="list3" v-model="form.category" placeholder="不限"></popup-picker>
      <popup-picker title="是否有房" :data="list4" v-model="form.house" placeholder="不限"></popup-picker>
      <popup-picker title="是否有车" :data="list5" v-model="form.car" placeholder="不限"></popup-picker>
      <popup-picker title="是否有保单" :data="list6" v-model="form.baodan" placeholder="不限"></popup-picker>
    </group>
  </div>
</template>
<script>
import { Group, PopupPicker, Cell } from 'vux'
export default {
  components: {
    Group,
    PopupPicker,
    Cell
  },
  data () {
    return {
      list: [ ['5000元以下', '5000元-2万元', '2万-5万', '5万-10万', '10万-20万'] ],
      list2: [ ['22岁以下', '22-29岁', '30-39岁', '40-49岁', '50岁以上'] ],
      list3: [ ['私企员工', '公务员', '事业单位员工', '企业主', '个体会', '自由职业者', '学生', '退休员工'] ],
      list4: [ ['无房产', '按揭房', '全款房'] ],
      list5: [ ['无车产', '按揭车', '全款车'] ],
      list6: [ ['有', '无'] ],
      form: {
        city: [],
        money: [],
        age: [],
        category: [],
        house: [],
        car: [],
        baodan: []

      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
