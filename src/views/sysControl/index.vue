<template>
  <card :cardInfo="cardInfo"></card>
</template>

<script>
import card from '@/components/indexCard.vue'
export default {
  components:{
    card
  },
  data() {
    return {
      cardInfo: [
        {
          img: require('../../assets/imgs/dataDic/computedStep.png'),
          enName: ['sysControl','list'],
          chName: '设备管理',
          path: '/sysControl/device',
          index: 2,
        },
        {
          img: require('../../assets/imgs/dataDic/computedStep.png'),
          enName: ['Information','Registration'],
          chName: '我的账号',
          path: '/sysControl/myCount',
          index: 3
        },
        {
          img: require('../../assets/imgs/dataDic/computedStep.png'),
          enName: ['Competency ','Assessment'],
          chName: '员工管理',
          path: '/sysControl/staff',
          index: 4
        },
        {
          img: require('../../assets/imgs/dataDic/computedStep.png'),
          enName: ['Competency ','Assessment'],
          chName: '机构管理',
          path: '/sysControl/mechanism',
          index: 5
        },
        {
          img: require('../../assets/imgs/dataDic/computedStep.png'),
          enName: ['Competency ','Assessment'],
          chName: '角色管理',
          path: '/sysControl/role',
          index: 6
        },
        {
          img: require('../../assets/imgs/dataDic/computedStep.png'),
          enName: ['Competency ','Assessment'],
          chName: '权限管理',
          path: '/sysControl/jurisdiction',
          index: 7
        },
        {
          img: require('../../assets/imgs/dataDic/computedStep.png'),
          enName: ['Competency ','Assessment'],
          chName: '数据字典管理',
          path: '/sysControl/dataDictionaries',
          index: 8
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>