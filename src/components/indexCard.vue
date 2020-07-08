<template>
  <div class="indexCard">
    <div class="card"  v-for="(key, index) in cardInfo" :key="index">
      <div class="content" @click="cardClick(key.path, key.index)" :style="`background-color: ${cardBgArr[index%2]}`">
        <!-- 左边图片区域 -->
        <div class="left">
          <el-image class="leftImg" :src="key.img"></el-image>
        </div>
        <!-- 右边内容区域 -->
        <div class="right">
          <div class="enName">
            <div v-for="(item, nameIndex) in key.enName" :key="`enName${nameIndex}`">{{ item }}</div>
          </div>
          <div class="chName">{{ key.chName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardInfo: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      cardBgArr: ['#35D1CF', '#2BB2E7'],
    }
  },
  methods: {
    cardClick(path, index) {
      this.$router.push(path);
      this.$store.commit('menuActiveChange', String(index))
    }
  }
}
</script>

<style lang="scss" scoped>
.indexCard{
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  .card{
    width: 33.33%;
    padding: 20px;
    box-sizing: border-box;
    .content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-radius: 15px;
      .leftImg{
        width: 90px;
        height: 105px;
      }
      .right{
        color: #273359;
        font-size: 26px;
        .enName{
          color: #fff;
          font-size: 14px;
          text-align: right;
        }
      }
    }
    :hover{
      cursor: pointer;
    }
  }
}
</style>