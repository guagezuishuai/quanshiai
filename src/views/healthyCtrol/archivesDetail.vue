<template>
  <div class="archivesDetail">
    <div class="goBack">
      <el-button @click="$router.push('/healthyCtrol/archives')">返回档案列表</el-button>
    </div>
    <personInfo></personInfo>
    <div class="optionsBtns" v-if="optionsBtnsIsShow">
      <el-button>修改</el-button>
      <el-button>返回就诊列表</el-button>
    </div>
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="基本信息" name="baseInfo">
        <baseInfo></baseInfo>
      </el-tab-pane>
      <el-tab-pane label="病史习惯" name="diseaseHistory">
        <divInfo></divInfo>
      </el-tab-pane>
      <el-tab-pane label="就诊记录" name="addAbility">
        <diagnosisRecord @contentChange="diagnosisShow = false" v-if="diagnosisShow"></diagnosisRecord>
        <diagnosisDetail v-else></diagnosisDetail>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import personInfo from './com/personInfo';
import baseInfo from '../customer/compontent/baseInfo';
import divInfo from '../customer/compontent/divInfo';
import diagnosisRecord from './com/diagnosisRecord';
import diagnosisDetail from './com/diagnosisDetail';
export default {
  name: 'archivesDetail',
  components: {
    personInfo,
    baseInfo,
    divInfo,
    diagnosisRecord,
    diagnosisDetail
  },
  data() {
    return {
      activeName: 'baseInfo',
      diagnosisShow: true,
    }
  },
  computed: {
    optionsBtnsIsShow() {
      return this.activeName === 'diseaseHistory' || !this.diagnosisShow;
    }
  },
  methods: {
    handleClick() {
      
    }
  }
}
</script>

<style lang="scss">
.goBack{
  background-color: #fff;
  text-align: right;
  margin-bottom: 15px;
  padding: 10px;
}
.optionsBtns{
  padding: 10px;
  background-color: #fff;
  margin: 10px 0;
}
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
.right{
  display: flex;
  justify-content: center;
  align-items: center;
}
/deep/ .el-form-item__content, .el-date-editor{
  width: 192px;
}
</style>