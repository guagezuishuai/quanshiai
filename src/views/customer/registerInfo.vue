<template>
  <div class="add">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="基本信息" name="baseInfo">
        <baseInfo></baseInfo>
      </el-tab-pane>
      <el-tab-pane label="病史习惯" name="diseaseHistory">
        <divInfo></divInfo>
      </el-tab-pane>
      <el-tab-pane v-if="isEdit" label="能力评估" name="addAbility">
        <assTable></assTable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import baseInfo from './compontent/baseInfo';
import divInfo from './compontent/divInfo';
import assTable from './compontent/assTable'
export default {
  components: {
    baseInfo,
    divInfo,
    assTable
  },
  data() {
    return {
      activeName: 'baseInfo', // baseInfo diseaseHistory
      isEdit: false
    }
  },
  methods: {
    handleClick() {

    },
    
  }
}
</script>

<style lang="scss">
.rowContent{
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  .item{
    display: flex;
    align-items: center;
    margin: 10px 15px 10px 0;
    .label{
      width: 100px;
    }
  }
  .checkBoxItem{
    display: flex;
    width: 100%;
    .left, .right{
      display: flex;
      justify-content: space-between;
      width: 50%;
      padding-right: 20px;
      .checkbox-group{
        width: 100%;
      }
      .checkBox{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
    }
  }
}
.avatar-uploader{
    /deep/.el-upload {
        border: 1px dashed #000;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        max-width: 178px;
        display: block;
    }
}
/deep/ .el-form-item__content, .el-date-editor{
  width: 192px;
}
.right{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>