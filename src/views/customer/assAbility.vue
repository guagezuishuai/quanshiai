<template>
  <div class="assAbility">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="基本信息" name="baseInfo">
        <div class="info">本标准参考中华人民共和国民政行业标准《老年人能力评估》（MZ/T 039-2013）</div>
        <baseInfo></baseInfo>
        <div class="bottmBtn">
          <el-button>保存</el-button>
          <el-button @click="saveAndIntoNext">保存并下一页</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="日常生活活动" name="active">
        <div class="info">本标准参考中华人民共和国民政行业标准《老年人能力评估》（MZ/T 039-2013）</div>
        <active></active>
        <div class="bottmBtn">
          <el-button>保存</el-button>
          <el-button @click="saveAndIntoNext">保存并下一页</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="精神状态" name="spiritState">
        <div class="info">本标准参考中华人民共和国民政行业标准《老年人能力评估》（MZ/T 039-2013）</div>
        <spiritState></spiritState>
        <div class="bottmBtn">
          <el-button>保存</el-button>
          <el-button @click="saveAndIntoNext">保存并下一页</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="感知觉与沟通" name="perception">
        <div class="info">本标准参考中华人民共和国民政行业标准《老年人能力评估》（MZ/T 039-2013）</div>
        <perception></perception>
        <div class="bottmBtn">
          <el-button>保存</el-button>
          <el-button @click="saveAndIntoNext">保存并下一页</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="社会参与" name="social">
        <div class="info">本标准参考中华人民共和国民政行业标准《老年人能力评估》（MZ/T 039-2013）</div>
        <social></social>
        <div class="bottmBtn">
          <el-button>保存</el-button>
          <el-button @click="saveAndIntoNext">保存并下一页</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="能力评估报告" name="report">
        <div class="info">本标准参考中华人民共和国民政行业标准《老年人能力评估》（MZ/T 039-2013）</div>
        <report></report>
        <div class="bottmBtn">
          <el-button>保存</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  components: {
    baseInfo: () => import('./asscom/baseInfo'),
    active: () => import('./asscom/active'),
    spiritState: () => import('./asscom/spiritState'),
    perception: () => import('./asscom/perception'),
    social: () => import('./asscom/social'),
    report: () => import('./asscom/report')
  },
  data() {
    return {
      activeName: 'baseInfo',
      tabNameArr: ['baseInfo', 'active', 'spiritState', 'perception', 'social', 'report']
    }
  },
  mounted() {
    const id = this.$route.query.id;
  },
  methods: {
    handleClick() {

    },
    // 保存并进入下一步
    saveAndIntoNext() {
      const activeIndex = this.tabNameArr.indexOf(this.activeName);
      this.activeName = this.tabNameArr[activeIndex + 1];
    }
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
.bottmBtn{
  display: flex;
  justify-content: center;
  align-items: center;
}
.info{
  text-align: center;
  margin-bottom: 10px;
}
</style>