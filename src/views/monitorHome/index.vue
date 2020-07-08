<template>
  <div class="home">
    <div class="health">
      <div class="title">健康监测</div>
      <health></health>
    </div>
    <div class="personInfo">
      <div class="title">个人信息</div>
      <personInfo></personInfo>
    </div>
    <div class="positionInfo">
      <div class="title">定位监测</div>
      <div class="content">
        <amap></amap>
      </div>
    </div>
    <div class="safe">
      <div class="title">安防监控</div>
    </div>
  </div>
</template>

<script>
import health from './com/health';
import personInfo from './com/personInfo';
import amap from '../../components/amap'
export default {
  components: {
    health,
    personInfo,
    amap
  }
}
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  flex-wrap: wrap;
  .title{
    font-size: 24px;
    padding: 10px 0;
    text-align: center;
    background-color: #C9EDFD;
  }
  .health{
    width: calc(65% - 20px);
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .personInfo{
    width: 35%;
  }
  .positionInfo{
    width: calc(60% - 10px);
    margin-right: 20px;
    .content{
      background-color: #fff;
      padding: 10px 20px;
    }
  }
  .safe{
    width: calc(40% - 10px);
  }
}
</style>