<template>
  <div class="card">
    <el-card v-if="personInfo.status" :style="`background-color: ${bgc(personInfo.status)}`">
      <div class="status">{{ personInfo.status }}</div>
      <div class="avatar">
        <el-image :src="personInfo.avatar"></el-image>
      </div>
      <div class="info">
        <div class="name">{{ personInfo.name }}</div>
        <div class="sex">{{ personInfo.sex }}</div>
        <div class="age">{{ personInfo.age }}</div>
      </div>
      <div class="btn" v-if="personInfo.status != '处理完成'">
        <el-button>转为{{ btnMsg }}</el-button>
      </div>
    </el-card>
    <el-card style="background-color: #35D1CF;height: 100%;" v-else>
      <el-image :src="noPerson"></el-image>
      <div>无报警事件</div>
    </el-card>
  </div>
</template>

<script>
import noPerson from '@/assets/imgs/safeAssistance/noPerson.png'
export default {
  name: 'card',
  props: {
    personInfo: {
      type: Object,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      noPerson
    }
  },
  computed: {
    btnMsg() {
      const obj = {
        '报警中': '处理中',
        '处理中': '处理完成'
      }
      return obj[this.personInfo.status];
    }
  },
  methods: {
    bgc(status) {
      const obj = {
        '报警中': '#F57254',
        '处理中': '#2BB3E6',
        '处理完成': '#35D1CF'
      }
      return obj[status]
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  text-align: center;
  .status{
    color: #fff;
  }
  .avatar{
    width: 100px;
  }
  .info{
    color: #fff;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
}
</style>