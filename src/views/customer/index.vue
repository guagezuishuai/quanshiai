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
          img: require('../../assets/imgs/dataDic/computedStep.png'),
          enName: ['Customer','list'],
          chName: '客户列表',
          path: '/customer/list',
          index: 2,
        },
        {
          img: require('../../assets/imgs/dataDic/computedStep.png'),
          enName: ['Information','Registration'],
          chName: '信息登记',
          path: '/customer/registerInfo',
          index: 3
        },
        {
          img: require('../../assets/imgs/dataDic/computedStep.png'),
          enName: ['Competency ','Assessment'],
          chName: '能力评估',
          path: '/customer/assAbility',
          index: 4
        }
      ]
    }
  }
}
</script>