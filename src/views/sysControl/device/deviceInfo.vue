<template>
  <tableGroup :groupInfo="groupInfo[1]">
    <div class="rowContent" slot="设备标识号">
      <el-form-item prop="imie" label="设备IMEI或ID号" class="item">
        <el-input size="small" v-model="model.imie"></el-input>
      </el-form-item>
      <el-button @click="checkDevice">检查设备</el-button>
    </div>
    <div class="rowContent" slot="设备电话号">
      <el-form-item label="设备电话号码" class="item">
        <el-input size="small" v-model="model.phone"></el-input>
      </el-form-item>
      <span>注：装有SIM卡或者物联网卡的设备有设备电话号</span>
    </div>
    <div class="rowContent" slot="设备类别">
      <el-form-item label="设备类别" class="item">
        <el-select size="small" @change="deviceTypeChange" v-model="model.type">
          <el-option
            v-for="(key, index) in typeOpions"
            :label="key.name"
            :value="key.id"
            :key="`type${index}`"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="设备型号" class="item">
        <el-select size="small" v-model="model.equipmentType">
          <el-option
            v-for="(key, index) in equipmentType"
            :label="key.name"
            :value="key.id"
            :key="`equipmentType${index}`"
          ></el-option>
        </el-select>
      </el-form-item>
    </div>
    <div class="rowContent" slot="开通时间">
      <el-form-item label="开通时间" class="item">
        <el-input size="small" placeholder="保存后平台自动生成" disabled v-model="model.openTime"></el-input>
      </el-form-item>
    </div>
  </tableGroup>
</template>

<script>
import tableGroupMixins from "@/minxins/tableGroup";
import {deviceCheck} from '@/api/sys';
import { deviceCtegoryList } from "@/api/Dictionaries";
export default {
  mixins: [tableGroupMixins],
  props: {
    groupInfo: Array
  },
  data() {
    return {
      typeOpions: [],
      equipmentType: []
    }
  },
  computed: {
    model() {
      return this.$parent.model;
    }
  },
  mounted() {
    // 设备列表
      deviceCtegoryList({ size: 9999999, current: 1 }).then(res => {
        this.typeOpions = res.data.records;
      });
  },
  methods: {
    // 检查设备
    checkDevice() {
      deviceCheck({imie: this.model.imei})
      this.$message.warning('请检查IMEI或ID正确性，平台无法识别设备')
    },
    deviceTypeChange(val) {
      this.typeOpions.forEach(item => {
        if(item.id === val) {
          this.equipmentType = item.deviceModelList;
        }
      });
    }
  }
};
</script>