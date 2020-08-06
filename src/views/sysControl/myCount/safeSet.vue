<template>
  <div class="safeSet">
    <div class="top">
      <sysCard :cardInfo="telLogin"></sysCard>
      <sysCard :cardInfo="passwordEdit"></sysCard>
    </div>
  </div>
</template>

<script>

import sysCard from '@/components/sysCard.vue'
export default {
  name: 'safeSet',
  components: {
    sysCard
  },
  data() {
    return {
      telLogin: {
        img: 'loginTel',
        enName: {
          before: 'Cell-phone',
          after: 'Number'
        },
        chName: '登录手机号',
        subTile: '158****9876',
        btnText: '修改登录手机号',
        btnParam: 1
      },
      passwordEdit: {
        img: 'password',
        enName: {
          before: 'Login',
          after: 'Password'
        },
        chName: '登录密码',
        subTile: '定期更换密码有助于账号安全',
        btnText: '修改登录密码',
        btnParam: 2
      },
    }
  },
  computed: {
    
  }
}
</script>

<style lang="scss" scoped>
.top{
  display: flex;
  justify-content: space-around;
}
</style>