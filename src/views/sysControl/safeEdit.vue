<template>
  <div class="safeEdit">
    <mySteps :stepsMsg="stepsMsg" :steps="steps" :active="active"></mySteps>
    <div class="content">
      <authentication :active="active" :config="config"></authentication>
    </div>
  </div>
</template>

<script>
import mySteps from '@/components/mySteps.vue';
import authentication from './safeEditCom/authentication';
export default {
  name: 'safeEdit',
  components: {
    mySteps,
    authentication,
  },
  data() {
    return {
      active: 1,
      steps: 3,
      stepsMsg: ['身份认证', '设置操作', '设置完成'],
      config: {
        1: {
          title: `当前手机号158xxxxx9358`,
          btnText: '提交认证'
        },
        2: {
          title: '设置绑定手机',
          options: [
            {
              label: '中国0086',
              value: 1
            },
            {
              label: '中国008',
              value: 2
            }
          ],
          btnText: '提交设置'
        },
        3: {
          title: '',
          btnText: '重新登录'
        }
      }
    }
  },
  mounted() {
    let btnParam = this.$route.query.btnParam;
    if(btnParam === 2) this.config[2].title = '设置新密码';
  },
  methods: {
    stepsPlus(num) {
      if(this.active < this.steps) this.active += 1;
    }
  }
}
</script>

<style lang="scss" scoped>
.active{
  background-color: #2BB2E7;
}
.normal{
  background-color: #ccc;
}
.safeEdit{
  padding: 70px 7%  0 7%;
  background-color: #fff;
}
.content{
  padding: 0 7%;
}
</style>