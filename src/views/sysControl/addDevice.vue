<template>
  <div class="adddevice">
    <el-form label-width="100px" :rules="rules" :model="model" inline>
      <!-- 客户信息 -->
      <deviceUserInfo :groupInfo="groupInfo"></deviceUserInfo>
      <!-- 设备信息 -->
      <deviceInfo :groupInfo="groupInfo"></deviceInfo>
      <!-- 设置信息 -->
      <setInfo :groupInfo="groupInfo"></setInfo>
    </el-form>
    <div class="bottom">
      <div class="title">电子围栏设置</div>
      <div class="bottomContent">
        <div class="bottomLeft">
          <div class="subTitle">电子围栏地图</div>
          <amap></amap>
        </div>
        <div class="right">
          <div class="subTitle">当前电子围栏</div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" align="center" width="50"></el-table-column>
            <el-table-column align="center" prop="name" label="围栏名称"></el-table-column>
            <el-table-column prop="apply" align="center" label="启用" width="50">
              <template slot-scope="scope">
                <!-- <span style="margin-left: 10px">{{ scope.row.date }}</span> -->
                <div @click="selcectChange(scope.row)">
                  <el-checkbox v-model="scope.row.apply"></el-checkbox>
                </div>
              </template>
            </el-table-column>
            <el-table-column align="center" width="230" label="操作">
              <template slot-scope="scope">
                <el-button class="btnSee" @click="toSee(scope.row)">查看</el-button>
                <el-button class="btnEdit" @click="toEdit(scope.row)">编辑</el-button>
                <el-button class="btndel" @click="toEdit(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tableGroupMixins from "@/minxins/tableGroup";
import amap from "@/components/amap";
import deviceUserInfo from './device/deviceUserInfo';
import deviceInfo from './device/deviceInfo';
import setInfo from './device/setInfo';
export default {
  name: "adddevice",
  mixins: [tableGroupMixins],
  components: {
    amap,
    deviceUserInfo,
    deviceInfo,
    setInfo
  },
  data() {
    return {
      rules: {
        telRedKey: [
          { required: true, message: "请输入红键号码", trigger: "blur" }
        ],
        telYellowKey: [
          { required: true, message: "请输入黄键号码", trigger: "blur" }
        ],
        telGreenKey: [
          { required: true, message: "请输入绿键号码", trigger: "blur" }
        ]
      },
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
        GPSswitch: true,
        GPScycle: {
          value: [],
          detail: "",
          options: [
            {
              value: 0,
              lable: "10分钟"
            },
            {
              value: 1,
              lable: "20分钟"
            },
            {
              value: 2,
              lable: "30分钟"
            },
            {
              value: 3,
              lable: "40分钟"
            }
          ]
        },
        heartcycle: {
          value: [],
          detail: "",
          options: [
            {
              value: 0,
              lable: "10分钟"
            },
            {
              value: 1,
              lable: "20分钟"
            },
            {
              value: 2,
              lable: "30分钟"
            },
            {
              value: 3,
              lable: "40分钟"
            }
          ]
        },
        bloodcycle: {
          value: [],
          detail: "",
          options: [
            {
              value: 0,
              lable: "10分钟"
            },
            {
              value: 1,
              lable: "20分钟"
            },
            {
              value: 2,
              lable: "30分钟"
            },
            {
              value: 3,
              lable: "40分钟"
            }
          ]
        },
        temperatureCycle: {
          value: [],
          detail: "",
          options: [
            {
              value: 0,
              lable: "10分钟"
            },
            {
              value: 1,
              lable: "20分钟"
            },
            {
              value: 2,
              lable: "30分钟"
            },
            {
              value: 3,
              lable: "40分钟"
            }
          ]
        },
        GPSstartTime: "",
        GPSendTime: "",
        powerLowStartTime: "",
        powerLowEndtTime: "",
        balanceStartTime: "",
        balanceEndTime: "",
        measureStartTime: "",
        measureEndTime: "",
        temperatureStartTime: "",
        temperatureEndTime: "",
        timeZone: "",
        whiteList: [
          {
            name: "",
            tel: ""
          }
        ],
        heartRateMax: "",
        heartRateMaxValueType: {
          value: "0",
          options: [
            {
              lable: "默认值",
              value: "0"
            },
            {
              lable: "自定义",
              value: "1"
            }
          ]
        },
        heartRateMin: "",
        heartRateMinValueType: {
          value: "0",
          options: [
            {
              lable: "默认值",
              value: "0"
            },
            {
              lable: "自定义",
              value: "1"
            }
          ]
        },
        highPressureMax: "",
        highPressureMaxValueType: {
          value: "0",
          options: [
            {
              lable: "默认值",
              value: "0"
            },
            {
              lable: "自定义",
              value: "1"
            }
          ]
        },
        highPressureMix: "",
        highPressureMixValueType: {
          value: "0",
          options: [
            {
              lable: "默认值",
              value: "0"
            },
            {
              lable: "自定义",
              value: "1"
            }
          ]
        },
        lowPressureMax: "",
        lowPressureMaxValueType: {
          value: "0",
          options: [
            {
              lable: "默认值",
              value: "0"
            },
            {
              lable: "自定义",
              value: "1"
            }
          ]
        },
        lowPressureMax: "",
        lowPressureMaxValueType: {
          value: "0",
          options: [
            {
              lable: "默认值",
              value: "0"
            },
            {
              lable: "自定义",
              value: "1"
            }
          ]
        },
        telRedKey: "",
        telYellowKey: "",
        telGreenKey: "",
        eatDrug: [
          {
            time: "",
            repeatWay: [],
            switch: true,
            checkboxOptions: [
              {
                label: "周一",
                value: "0"
              },
              {
                label: "周二",
                value: "1"
              },
              {
                label: "周三",
                value: "2"
              },
              {
                label: "周四",
                value: "3"
              },
              {
                label: "周五",
                value: "4"
              },
              {
                label: "周六",
                value: "5"
              },
              {
                label: "周日",
                value: "6"
              }
            ]
          }
        ],
        drinkWater: [
          {
            time: "",
            repeatWay: [],
            switch: true,
            checkboxOptions: [
              {
                label: "周一",
                value: "0"
              },
              {
                label: "周二",
                value: "1"
              },
              {
                label: "周三",
                value: "2"
              },
              {
                label: "周四",
                value: "3"
              },
              {
                label: "周五",
                value: "4"
              },
              {
                label: "周六",
                value: "5"
              },
              {
                label: "周日",
                value: "6"
              }
            ]
          }
        ],
        sport: [
          {
            time: "",
            repeatWay: [],
            switch: true,
            checkboxOptions: [
              {
                label: "周一",
                value: "0"
              },
              {
                label: "周二",
                value: "1"
              },
              {
                label: "周三",
                value: "2"
              },
              {
                label: "周四",
                value: "3"
              },
              {
                label: "周五",
                value: "4"
              },
              {
                label: "周六",
                value: "5"
              },
              {
                label: "周日",
                value: "6"
              }
            ]
          }
        ],
        volume: 0
      },
      groupInfo: [
        {
          title: "设备用户信息",
          info: ["客户信息"]
        },
        {
          title: "设备信息",
          info: ["设备标识号", "设备电话号", "设备类别", "开通时间"]
        },
        {
          title: "设置信息",
          info: [
            "开关设置",
            "数据周期设置",
            "时间段设置",
            "时区设置",
            "白名单设置",
            { title: "告警阈值设置", subInfo: ["心率报警", "血压报警"] },
            "号码设置",
            {
              title: "提醒设置",
              subInfo: ["吃药提醒", "喝水提醒", "运动提醒"]
            },
            "音量调整"
          ]
        }
      ],
      tableData: [
        {
          name: "家",
          apply: "你好"
        }
      ]
    };
  },
  methods: {
    addWhiteList() {
      this.model.whiteList.push({
        name: "",
        tel: ""
      });
    },
    addAlarmClock(key) {
      let template = JSON.parse(JSON.stringify(this.model[key][0]));
      template.time = "";
      template.repeatWay = [];
      template.switch = true;
      this.model[key].push(template);
    },
    selcectChange() {
      console.log(arguments);
    }
  }
};
</script>

<style lang="scss">
.timeLine {
  border-top: 1px solid #bdc3c7;
  width: 50px;
  height: 1px;
  display: inline-block;
  margin: 0 5px;
  vertical-align: middle;
}
.timeContent {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.timeSitch {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eff3f3;
  height: 100px;
}
.volume {
  width: 100%;
}
.bottom {
  .title {
    background-color: #caedfd;
    padding: 5px 10px;
    color: #273359;
  }
  .bottomContent {
    display: flex;
    background-color: #fff;
    .subTitle {
      text-align: center;
      padding: 10px 0;
    }
    .bottomLeft {
      flex: 1;
    }
    .right {
      width: 450px;
      padding-left: 15px;
    }
  }
}
</style>