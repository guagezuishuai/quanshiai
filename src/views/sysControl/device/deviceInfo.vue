<template>
  <tableGroup :groupInfo="groupInfo[1]">
    <div class="rowContent" slot="设备标识号">
      <el-form-item label="设备IMEI或ID号" class="item">
        <el-input size="small" v-model="model.IMEI"></el-input>
      </el-form-item>
      <el-button>检查设备</el-button>
    </div>
    <div class="rowContent" slot="设备电话号">
      <el-form-item label="设备电话号码" class="item">
        <el-input size="small" v-model="model.deviceTel"></el-input>
      </el-form-item>
      <span>注：装有SIM卡或者物联网卡的设备有设备电话号</span>
    </div>
    <div class="rowContent" slot="设备类别">
      <el-form-item label="设备类别" class="item">
        <el-select size="small" v-model="model.deviceType.value">
          <el-option
            v-for="(key, index) in model.deviceType.options"
            :label="key.lable"
            :value="key.value"
            :key="`deviceType${index}`"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="设备型号" class="item">
        <el-select size="small" v-model="model.deviceModel.value">
          <el-option
            v-for="(key, index) in model.deviceModel.options"
            :label="key.lable"
            :value="key.value"
            :key="`deviceModel${index}`"
          ></el-option>
        </el-select>
      </el-form-item>
    </div>
    <div class="rowContent" slot="开通时间">
      <el-form-item label="开通时间" class="item">
        <el-input size="small" v-model="model.openTime">
          <template slot="append">CM</template>
        </el-input>
      </el-form-item>
    </div>
  </tableGroup>
</template>

<script>
import tableGroupMixins from "@/minxins/tableGroup";
export default {
  mixins: [tableGroupMixins],
  props: {
    groupInfo: Array
  },
  computed: {
    model() {
      return this.$parent.model;
    }
  }
};
</script>