<template>
  <div class="myCount">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="基本信息" name="baseInfo">
        <el-form label-width="120px" :rules="rules" :model="model" inline>
          <baseInfo :groupInfo="groupInfo"></baseInfo>
        </el-form>
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
      groupInfo: [
        {
          title: '',
          info: ['类型名称', '登录信息', '联系信息', '机构概况']
        }
      ],
      model: {
        preOrg: '',
        preOrgLevel: '',
        preOrgType: '',
        preOrgNumber: '',
        orgType: '',
        orgLevel: '',
        orgName: '',
        orgNumber: '',
        roleType: ''
      },
      rules: {
        preOrg: [
          { required: true, message: "请输入红键号码", trigger: "blur" }
        ],
        orgType: [
          { required: true, message: "请输入红键号码", trigger: "blur" }
        ],
        orgName: [
          { required: true, message: "请输入红键号码", trigger: "blur" }
        ],
        roleType: [
          { required: true, message: "请输入红键号码", trigger: "blur" }
        ]
      }
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