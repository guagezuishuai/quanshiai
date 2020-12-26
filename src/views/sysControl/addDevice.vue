<template>
  <div class="adddevice">
    <el-form label-width="130px" ref="form" :rules="rules" :disabled="disabled" :model="model" inline>
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
          <el-button @click="addEnclosure">新增围栏</el-button>
        </div>
      </div>
    </div>
    <bottomBtn @submit="submit"></bottomBtn>
    <!-- 电子围栏的弹窗 -->
    <addEnclosure ref="addEnclosure" ></addEnclosure>
  </div>
</template>

<script>
import tableGroupMixins from "@/minxins/tableGroup";
import amap from "@/components/amap";
import bottomBtn from "@/components/bottomBtn";
import deviceUserInfo from "./device/deviceUserInfo";
import deviceInfo from "./device/deviceInfo";
import setInfo from "./device/setInfo";
import { deviceInsert, exceptionValueList, deviceSelectById } from "@/api/sys";
export default {
  name: "adddevice",
  mixins: [tableGroupMixins],
  components: {
    amap,
    deviceUserInfo,
    deviceInfo,
    setInfo,
    bottomBtn,
    addEnclosure: () => import("@/components/addEnclosure")
  },
  data() {
    const setDay = [
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
    ];
    const maxValueType = [
      {
        lable: "默认值",
        value: "0"
      },
      {
        lable: "自定义",
        value: "1"
      }
    ];
    return {
      disabled: false,
      setDay,
      rules: {
        imie: [
          { required: true, message: "请输入设备IMEI或ID号", trigger: "blur" }
        ],
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
        customerId: "",
        customerName: "",
        customerCard: "",
        customerPhpone: "",
        age: "",
        height: "",
        weight: "",
        buzhang: "",
        imie: "",
        phone: "",
        type: "",
        equipmentType: "",
        openTime: "",
        gpsSwitch: "1",
        whiteListSwitch: "1",
        redKeyMessageSwitch: "1",
        yellowKeyMessageSwitch: "1",
        gpsCycle: "",
        heartRateCycle: "",
        bloodPressureCycle: "",
        measurementCycle: "",
        gpsSilenceStartTime: "",
        gpsSilenceEndTime: "",
        lowPowerReminderStartTime: "",
        lowPowerReminderEndTime: "",
        balanceStartTime: "",
        balanceEndTime: "",
        measureStartTime: "",
        measureEndTime: "",
        temperatureStartTime: "",
        temperatureEndTime: "",
        timeZone: "",
        whiteListList: [
          {
            name: "",
            phone: ""
          }
        ],
        heartRateMax: "",
        heartRateMin: "",
        bloodPressureHighMax: "",
        bloodPressureHighMin: "",
        bloodPressureLowMax: "",
        bloodPressureLowMin: "",
        redKeyPhone: "",
        yellowKeyPhone: "",
        greenKeyPhone: "",
        reminderSettingsList: {
          吃药提醒: [
            {
              code: "0",
              name: "吃药提醒",
              time: "",
              repetMode: [],
              open: true,
              checkboxOptions: setDay
            }
          ],
          喝水提醒: [
            {
              code: "1",
              name: "喝水提醒",
              time: "",
              repetMode: [],
              open: true,
              checkboxOptions: setDay
            }
          ],
          运动提醒: [
            {
              code: "2",
              name: "运动提醒",
              time: "",
              repetMode: [],
              open: true,
              checkboxOptions: setDay
            }
          ]
        },
        volume: 0,
        // 电子围栏
        fenceList: []
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
              subInfo: ["吃药提醒", "喝水提醒", "运动提醒"],
              addItemBtn: true,
              slotKey: "remindSet"
            },
            "音量调整"
          ]
        }
      ],
      tableData: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const {deviceId, type} = this.$route.query;
      // see 查看 edit 修改
      this.disabled = (type == 'see'); 
      if(deviceId) {
        deviceSelectById({id: deviceId}).then(res => {
          const data = res.data;
          // this.model.type = data.type;
          // this.model.equipmentType = data.equipmentType;
          // this.model.gpsCycle = data.gpsCycle;
          // this.model.heartRateCycle = data.heartRateCycle;
          // this.model.bloodPressureCycle = data.bloodPressureCycle;
          // this.model.measurementCycle = data.measurementCycle;
          // this.model.timeZone = data.timeZone;
          Object.assign(this.model, data)
          let temp = {};
          data.reminderSettingsList.forEach(item => {
            item = {
              ...item,
              checkboxOptions: this.setDay
            }
            if(temp[item.name]) {
              temp[item.name].push(item)
            } else {
              temp[item.name] = [item]
              // 添加对应的插槽
              this.groupInfo[2].info[7].subInfo.push(item.name);
            }
          })
          this.model.reminderSettingsList = temp;
        })
      } else {
        // 获取告警阈值设置默认值
        exceptionValueList().then(res => {
          const obj = {
            1: ["heartRateMax", "heartRateMin"], // 心率报警
            4: ["bloodPressureHighMax", "bloodPressureHighMin"], // 高压报警
            5: ["bloodPressureLowMax", "bloodPressureLowMin"] // 低压报警
          };
          res.data.forEach(item => {
            if (obj[item.type]) {
              this.model[obj[item.type][0]] = item.limitValue;
              this.model[obj[item.type][1]] = item.upperLower;
            }
          });
        });
      }
    },
    addWhiteList() {
      this.model.whiteList.push({
        name: "",
        tel: ""
      });
    },
    addAlarmClock(key) {
      //  0：吃药提醒 1：喝水提醒 2：运动提醒 3：自定义
      let template = JSON.parse(
        JSON.stringify(this.model.reminderSettingsList[key][0])
      );
      template.time = "";
      template.repetMode = [];
      template.open = true;
      this.model.reminderSettingsList[key].push(template);
    },
    // 新增电子围栏
    addEnclosure() {
      this.$refs.addEnclosure.show()
    },
    selcectChange() {
      console.log(arguments);
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          let params = Object.assign(
            {},
            JSON.parse(JSON.stringify(this.model))
          );
          let temp = [];
          Object.values(params.reminderSettingsList).forEach(val => {
            temp.push(
              ...val.map(item => {
                return {
                  time: item.time != '' && item.time != 'null' && item.time != 'undefind' ? item.time + ":00" : '',
                  code: item.code,
                  name: item.name,
                  open: item.open,
                  repetMode: item.repetMode
                };
              })
            );
          });
          params.reminderSettingsList = temp;
          Object.keys(params).forEach(item => {
            if (typeof params[item] === "string" && params[item].length === 0)
              delete params[item];
            if (typeof params[item] === "number")
              params[item] = String(params[item]);
            // 所有时间相关的参数添加默认的秒00
            if (
              item.toLowerCase().indexOf("time") != -1 &&
              params[item] &&
              params[item] != "" &&
              params[item] != "undefind" &&
              params[item] != "null"
            )
              params[item] = params[item] + ":00";
          });
          deviceInsert(params).then(res => {
            this.$message.success('操作成功');
            this.$router.push('/sysControl/device')
          });
        } else {
          this.$message.warning("表单内容有误，请检查");
        }
      });
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