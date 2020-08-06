<template>
  <tableGroup :groupInfo="groupInfo[0]">
    <div class="deviceUserInfo" slot="客户信息">
    <div class="rowContent" >
      <el-form-item label="客户姓名" class="item">
        <div @click="showTable">
          <el-input size="small" v-model="model.userName"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="客户身份证号" class="item">
        <div>
          <el-input size="small" disabled v-model="model.idNumber"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="客户电话" class="item">
        <div>
          <el-input size="small" disabled v-model="model.userTel"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="客户年龄" class="item">
        <div>
          <el-input size="small" disabled v-model="model.age">
            <template slot="append">岁</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="客户身高" class="item">
        <div>
          <el-input size="small" disabled v-model="model.height">
            <template slot="append">CM</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="客户体重" class="item">
        <div>
          <el-input size="small" disabled v-model="model.weight">
            <template slot="append">KG</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="客户步长" class="item">
        <div>
          <el-input size="small" v-model="model.stepWidth">
            <template slot="append">CM</template>
          </el-input>
        </div>
      </el-form-item>
    </div>
  </div>
  </tableGroup>
</template>

<script>
import tableGroupMixins from "@/minxins/tableGroup";
export default {
  name: "deviceUserInfo",
  mixins: [tableGroupMixins],
  props: {
    groupInfo: Array
  },
  computed: {
    model() {
      return this.$parent.model;
    }
  },
  methods: {
    showTable() {},
  }
};
</script>