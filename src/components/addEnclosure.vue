<template>
  <div class="addEnclosure">
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="30%">
      <div class="content">
        <el-form>
          <el-form-item label="围栏名称">
            <el-input v-model="name" placeholder="请输入电子围栏名称"></el-input>
          </el-form-item>
          <el-form-item label="围栏类型">
            <el-select>
              <template v-for="(key, index) in options">
                <el-option :key="index" :label="key.label" :value="key.value"></el-option>
              </template>
            </el-select>
          </el-form-item>
          <el-form-item label="设置方式">
            <el-select>
              <template v-for="(key, index) in options">
                <el-option :key="index" :label="key.label" :value="key.value"></el-option>
              </template>
            </el-select>
          </el-form-item>
          <el-form-item label="禁止时间">
            <el-time-picker
              v-model="value1"
              placeholder="任意时间点"
            ></el-time-picker>
            <el-time-picker
              arrow-control
              v-model="value2"
              placeholder="任意时间点"
            ></el-time-picker>
          </el-form-item>
          <el-form-item label="启用围栏">
             <el-checkbox v-model="checked"></el-checkbox>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 新增电子围栏
export default {
  name: "addEnclosure",
  data() {
    return {
      dialogTitle: "新增电子围栏",
      options: [
        {
          label: "禁止离开",
          value: 1
        },
        {
          label: "活动范围",
          value: 2
        },
        {
          label: "可以离开",
          value: 3
        }
      ],
      setType: [
        {
          label: "圆形",
          value: 3
        }
      ]
    };
  },
  methods: {
    show() {

    }
  }
};
</script>

<style lang="less" scoped>
</style>