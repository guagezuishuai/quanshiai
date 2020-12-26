<template>
  <div>
    <card :cardInfo="cardInfo"></card>
  </div>
</template>

<script>
import card from '@/components/indexCard.vue'
export default {
  components: {
    card
  },
  data() {
    return {
      cardInfo: [
        {
          img: require('../../assets/imgs/heathyCtrol/139@2x.png'),
          enName: ['Health','Monitoring'],
          chName: '健康监测',
          path: '/healthyCtrol/monitor',
          index: 2,
        },
        // {
        //   img: require('../../assets/imgs/heathyCtrol/140@2x.png'),
        //   enName: ['Health','Report'],
        //   chName: '健康报告',
        //   path: '/customer/registerInfo',
        //   index: 3
        // },
        {
          img: require('../../assets/imgs/heathyCtrol/141@2x.png'),
          enName: ['Health ','Records'],
          chName: '健康档案',
          path: '/healthyCtrol/archives',
          index: 4
        },
        // {
        //   img: require('../../assets/imgs/heathyCtrol/142@2x.png'),
        //   enName: ['Organizational ','Management'],
        //   chName: '远程问诊',
        //   path: '/customer/assAbility',
        //   index: 5
        // },
        // {
        //   img: require('../../assets/imgs/heathyCtrol/143@2x.png'),
        //   enName: ['Corner ','Management'],
        //   chName: '健康设备',
        //   path: '/customer/assAbility',
        //   index: 6
        // }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>