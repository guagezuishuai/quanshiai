<template>
  <div class="binding">
    <el-form label-width="100px" :rules="rules" :model="model" inline>
      <!-- 客户信息 -->
      <deviceUserInfo :groupInfo="groupInfo"></deviceUserInfo>
      <!-- 设备信息 -->
      <deviceInfo :groupInfo="groupInfo"></deviceInfo>
    </el-form>
    <div class="btmBtn">
      <el-button class="btn mainbgcolor">绑定</el-button>
    </div>
  </div>
</template>

<script>
import deviceUserInfo from './device/deviceUserInfo';
import deviceInfo from './device/deviceInfo';
export default {
  name: 'bindingUser',
  components: {
    deviceUserInfo,
    deviceInfo
  },
  data() {
    return {
      groupInfo: [
        {
          title: "绑定用户信息",
          info: ["客户信息"]
        },
        {
          title: "设备信息",
          info: ["设备标识号", "设备电话号", "设备类别", "开通时间"]
        }
      ],
      rules: {},
      model: {
        userName: "",
        idNumber: "",
        userTel: "",
        age: "",
        height: "",
        weight: "",
        stepWidth: "",
        IMEI: "",
        deviceTel: "",
        deviceType: {
          value: [],
          detail: "",
          options: [
            {
              value: 0,
              lable: "无"
            },
            {
              value: 1,
              lable: "高血压"
            },
            {
              value: 2,
              lable: "糖尿病"
            },
            {
              value: 3,
              lable: "冠心病"
            }
          ]
        },
        deviceModel: {
          value: [],
          detail: "",
          options: [
            {
              value: 0,
              lable: "无"
            },
            {
              value: 1,
              lable: "高血压"
            },
            {
              value: 2,
              lable: "糖尿病"
            },
            {
              value: 3,
              lable: "冠心病"
            }
          ]
        },
        openTime: '',
      }
    }
  },
  methods: {
    bindding() {

    }
  }
}
</script>