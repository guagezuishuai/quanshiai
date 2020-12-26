<template>
  <div class="myCount">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="基本信息" name="baseInfo">
        <baseInfo></baseInfo>
      </el-tab-pane>
      <el-tab-pane label="安全设置" name="safeSet">
        <safeSet></safeSet>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import baseInfo from './myCount/baseInfo';
import safeSet from './myCount/safeSet';
export default {
  name: 'myCount',
  components: {
    baseInfo,
    safeSet
  },
  data() {
    return {
      activeName: 'baseInfo',
    }
  },
  
  methods: {
    
    handleClick() {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>