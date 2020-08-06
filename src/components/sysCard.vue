<template>
  <div class="sysCard">
    <div class="top">
      <div class="left">
        <el-image
          v-if="imgObj[cardInfo.img]"
          style="width: 86px; height: 115px"
          :src="imgObj[cardInfo.img]"
        ></el-image>
      </div>
      <div class="right">
        <div>
          <div class="enName">
          <div>{{ cardInfo.enName.before }}</div>
          <div> {{ cardInfo.enName.after }} </div>
        </div>
        <div class="chName">{{ cardInfo.chName }}</div>
        </div>
      </div>
    </div>
    <div class="subTitle">{{ cardInfo.subTile }}</div>
    <div class="btn">
      <el-button @click="toEdit(cardInfo.btnParam)" class="btnSee elBtn">{{ cardInfo.btnText }}</el-button>
    </div>
  </div>
</template>

<script>
import loginTel from '@/assets/imgs/mycount/loginTel.png';
import password from '@/assets/imgs/mycount/password.png';
export default {
  props: {
    cardInfo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      imgObj: {
        loginTel,
        password
      }
    }
  },
  methods: {
    toEdit(btnParam) {
      this.$router.push({
        path: '/sysControl/safeEdit',
        query: {
          btnParam
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.sysCard{
  padding: 20px;
  width: 30%;
  box-sizing: border-box;
  background-color: #caedfd4d;
  border-radius: 10px;
  text-align: center;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #35D1CF;
    padding: 10px 20px;
    border-radius: 10px;
    .right{
      color: #fff;
      .chName{
        font-size: 26px;
        color: #273359;
      }
    }
  }
  .subTitle{
    color: #616161;
    font-size: 24px;
    margin: 20px 0;
  }
  .btn{
    width: 100%;
    .elBtn{
      width: 70%;
      height: 40px;
      font-size: 16px;
    }
  }
}
</style>