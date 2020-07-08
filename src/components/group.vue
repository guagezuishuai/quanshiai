<template>
  <div class="group">
    <div class="groupTitle">{{ info.title }}</div>
    <div class="content">
      <!-- 正常的 -->
      <div class="normal contentBox" v-for="(item, index1) in info.normal" :key="`normal${index1}`">
        <div class="row">
          <div class="img">
            <el-image :src="item.image"></el-image>
          </div>
          <div class="inputBigBox">
            <template v-for="(key, index) in item.content">
              <div class="inputBox" :key="`CONTENT${index}`">
                <div class="label">{{ key.label }}</div>
                <el-input size="small" v-model="key.value"></el-input>
                <div class="company">{{ key.company }}</div>
                <el-button class="btn" v-if="index%2 === 0">  修改 </el-button>
                <el-button class="btn" v-else> 保存 </el-button>
              </div>
            </template>
          </div>
        </div>
      </div>
      <!-- 警告 -->
      <div class="war contentBox" v-for="(item, index1) in info.warning" :key="`war${index1}`">
        <div class="row">
          <div class="img">
            <el-image :src="item.image"></el-image>
          </div>
          <div class="inputBigBox" >
            <div class="inputBox" v-for="(key, index) in item.content" :key="`warCONTENT${index}`">
              <div class="label">{{ key.label }}</div>
              <el-input v-model="key.value"></el-input>
              <div class="company">{{ key.company }}</div>
              <el-button class="btn" v-if="index%2 === 0">  修改 </el-button>
              <el-button class="btn" v-else> 保存 </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
.group {
  .groupTitle {
    background-color: #d8f0fb;
    padding: 5px 20px;
    margin-bottom: 20px;
  }
  .row {
    display: flex;
    align-items: center;
    padding-left: 40px;
    .img {
      width: 60px;
      margin-right: 70px;
    }
    .inputBigBox{
      flex: 1;
      .inputBox{
        display: flex;
        align-items: center;
        margin: 10px 0;
        .label{
          width: 150px;
        }
        .company{
          width: 100px;
        }
        .btn{
          margin-right: 180px;
          margin-left: 100px;
        }
        /deep/.el-input{
          width: auto;
          margin-right: 40px;
        }
      }
    }
  }
}
</style>