<template>
  <div>
    <tableGroup :groupInfo="groupInfo[2]">
      <div class="rowContent" slot="开关设置">
        <el-form-item label="GPS开关" class="item">
          <el-switch
            style="display: block"
            v-model="model.gpsSwitch"
            :active-color="SWITCHONCOLOR"
            :inactive-color="SWITCHOFFCOLOR"
            active-value="1"
            inactive-value="0"
            active-text
            inactive-text
          ></el-switch>
        </el-form-item>
        <el-form-item label="白名单开关" class="item">
          <el-switch
            style="display: block"
            v-model="model.whiteListSwitch"
            :active-color="SWITCHONCOLOR"
            :inactive-color="SWITCHOFFCOLOR"
            active-value="1"
            inactive-value="0"
            active-text
            inactive-text
          ></el-switch>
        </el-form-item>
        <el-form-item label="红键短信开关" class="item">
          <el-switch
            style="display: block"
            v-model="model.redKeyMessageSwitch"
            :active-color="SWITCHONCOLOR"
            :inactive-color="SWITCHOFFCOLOR"
            active-value="1"
            inactive-value="0"
            active-text
            inactive-text
          ></el-switch>
        </el-form-item>
        <el-form-item label="黄键短信开关" class="item">
          <el-switch
            style="display: block"
            v-model="model.yellowKeyMessageSwitch"
            :active-color="SWITCHONCOLOR"
            :inactive-color="SWITCHOFFCOLOR"
            active-value="1"
            inactive-value="0"
            active-text
            inactive-text
          ></el-switch>
        </el-form-item>
      </div>
      <!-- 数据周期设置 -->
      <div slot="数据周期设置" class="rowContent">
        <el-form-item label="GPS周期" class="item">
          <el-select size="small" v-model="model.gpsCycle">
            <el-option
              v-for="(key, index) in gpsCycle"
              :label="key.lable"
              :value="key.value"
              :key="`gpsCycle${index}`"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="心率周期" class="item">
          <el-select size="small" v-model="model.heartRateCycle">
            <el-option
              v-for="(key, index) in heartRateCycle"
              :label="key.lable"
              :value="key.value"
              :key="`heartRateCycle${index}`"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="血压周期" class="item">
          <el-select size="small" v-model="model.bloodPressureCycle">
            <el-option
              v-for="(key, index) in bloodPressureCycle"
              :label="key.lable"
              :value="key.value"
              :key="`bloodPressureCycle${index}`"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="体温周期" class="item">
          <el-select size="small" v-model="model.measurementCycle">
            <el-option
              v-for="(key, index) in measurementCycle"
              :label="key.lable"
              :value="key.value"
              :key="`measurementCycle${index}`"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <!-- 时间段设置 -->
      <div slot="时间段设置" class="rowContent">
        <el-form-item label="GPS静默时间" class="item">
          <el-time-select
            placeholder="起始时间"
            v-model="model.gpsSilenceStartTime"
            :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00'
              }"
          ></el-time-select>
          <span class="timeLine"></span>
          <el-time-select
            placeholder="结束时间"
            v-model="model.gpsSilenceEndTime"
            :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00',
                minTime: model.GPSstartTime
              }"
          ></el-time-select>
        </el-form-item>
        <el-form-item label="低电提醒时间" class="item">
          <el-time-select
            placeholder="起始时间"
            v-model="model.lowPowerReminderStartTime"
            :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00'
              }"
          ></el-time-select>
          <span class="timeLine"></span>
          <el-time-select
            placeholder="结束时间"
            v-model="model.lowPowerReminderEndTime"
            :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00',
                minTime: model.powerLowStartTime
              }"
          ></el-time-select>
        </el-form-item>
        <el-form-item label="余额不足提醒时间" class="item">
          <el-time-select
            placeholder="起始时间"
            v-model="model.insufficientBalanceReminderEndTime"
            :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00'
              }"
          ></el-time-select>
          <span class="timeLine"></span>
          <el-time-select
            placeholder="结束时间"
            v-model="model.insufficientBalanceReminderStartTime"
            :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00',
                minTime: model.balanceStartTime
              }"
          ></el-time-select>
        </el-form-item>
        <el-form-item label="测量心率血压时间" class="item">
          <el-time-select
            placeholder="起始时间"
            v-model="model.measuringHeartTateBoodPressureStartTime"
            :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00'
              }"
          ></el-time-select>
          <span class="timeLine"></span>
          <el-time-select
            placeholder="结束时间"
            v-model="model.measuringHeartTateBoodPressureEndTime"
            :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00',
                minTime: model.measureStartTime
              }"
          ></el-time-select>
        </el-form-item>
        <el-form-item label="测量体温时间" class="item">
          <el-time-select
            placeholder="起始时间"
            v-model="model.temperatureMeasurementStartTime"
            :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00'
              }"
          ></el-time-select>
          <span class="timeLine"></span>
          <el-time-select
            placeholder="结束时间"
            v-model="model.temperatureMeasurementEndTime"
            :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00',
                minTime: model.temperatureStartTime
              }"
          ></el-time-select>
        </el-form-item>
      </div>
      <!-- 时区设置 -->
      <div slot="时区设置" class="rowContent">
        <el-form-item label="选择时区" class="item">
          <el-select size="small" v-model="model.timeZone">
            <el-option
              v-for="(key, index) in timeZone"
              :label="key.lable"
              :value="key.value"
              :key="`timeZone${index}`"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <!-- 白名单设置 -->
      <div slot="白名单设置">
        <div
          style="display: flex;"
          v-for="(key, index) in model.whiteListList"
          :key="`whiteList${index}`"
        >
          <el-form-item label="姓名" class="item">
            <el-input v-model="key.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="电话号码" class="item">
            <el-input v-model="key.tel" placeholder="请输入电话号码"></el-input>
          </el-form-item>
        </div>
        <el-button @click="addWhiteList">新增白名单</el-button>
      </div>
      <!-- 告警阈值设置 -->
      <div slot="心率报警">
        <el-form-item label="心率最大值" class="item">
          <div style="display:flex">
            <el-select size="small" v-model="heartRateMaxValueType">
              <el-option
                v-for="(key, index) in maxOrMinType"
                :label="key.lable"
                :value="key.value"
                :key="`heartRateMaxValueType${index}`"
              ></el-option>
            </el-select>
            <el-input
              v-model="model.heartRateMax"
              :placeholder="heartRateMaxValueType == 0 ? '' : '请输入心率最大值'"
              :disabled="heartRateMaxValueType == 0"
            >
              <template slot="append">bpm</template>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item label="心率最小值" class="item">
          <div style="display:flex">
            <el-select size="small" v-model="heartRateMinValueType">
              <el-option
                v-for="(key, index) in maxOrMinType"
                :label="key.lable"
                :value="key.value"
                :key="`heartRateMinValueType${index}`"
              ></el-option>
            </el-select>
            <el-input
              v-model="model.heartRateMin"
              :placeholder="heartRateMinValueType == 0 ? '' : '请输入心率最小值'"
              :disabled="heartRateMinValueType == 0"
            >
              <template slot="append">bpm</template>
            </el-input>
          </div>
        </el-form-item>
      </div>
      <div slot="血压报警">
        <el-form-item label="高压最大值" class="item">
          <div style="display:flex">
            <el-select size="small" v-model="highPressureMaxValueType">
              <el-option
                v-for="(key, index) in maxOrMinType"
                :label="key.lable"
                :value="key.value"
                :key="`highPressureMaxValueType${index}`"
              ></el-option>
            </el-select>
            <el-input
              v-model="model.bloodPressureHighMax"
              :placeholder="highPressureMaxValueType == 0 ? '' : '请输入心率最大值'"
              :disabled="highPressureMaxValueType == 0"
            >
              <template slot="append">mmHg</template>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item label="高压最小值" class="item">
          <div style="display:flex">
            <el-select size="small" v-model="highPressureMixValueType">
              <el-option
                v-for="(key, index) in maxOrMinType"
                :label="key.lable"
                :value="key.value"
                :key="`highPressureMixValueType${index}`"
              ></el-option>
            </el-select>
            <el-input
              v-model="model.bloodPressureHighMin"
              :placeholder="highPressureMixValueType == 0 ? '' : '请输入心率最小值'"
              :disabled="highPressureMixValueType == 0"
            >
              <template slot="append">mmHg</template>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item label="低压最大值" class="item">
          <div style="display:flex">
            <el-select size="small" v-model="bloodPressureLowMax">
              <el-option
                v-for="(key, index) in maxOrMinType"
                :label="key.lable"
                :value="key.value"
                :key="`bloodPressureLowMax${index}`"
              ></el-option>
            </el-select>
            <el-input
              v-model="model.bloodPressureLowMax"
              :placeholder="bloodPressureLowMax == 0 ? '' : '请输入心率最大值'"
              :disabled="bloodPressureLowMax == 0"
            >
              <template slot="append">mmHg</template>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item label="低压最小值" class="item">
          <div style="display:flex">
            <el-select size="small" v-model="bloodPressureLowMin">
              <el-option
                v-for="(key, index) in maxOrMinType"
                :label="key.lable"
                :value="key.value"
                :key="`bloodPressureLowMin${index}`"
              ></el-option>
            </el-select>
            <el-input
              v-model="model.bloodPressureLowMin"
              :placeholder="bloodPressureLowMin == 0 ? '' : '请输入心率最小值'"
              :disabled="bloodPressureLowMin == 0"
            >
              <template slot="append">mmHg</template>
            </el-input>
          </div>
        </el-form-item>
      </div>
      <div slot="号码设置" class="rowContent">
        <el-form-item label="红键号码" prop="redKeyPhone" class="item">
          <el-input v-model="model.redKeyPhone"></el-input>
        </el-form-item>
        <el-form-item label="黄键号码" prop="yellowKeyPhone" class="item">
          <el-input v-model="model.yellowKeyPhone"></el-input>
        </el-form-item>
        <el-form-item label="绿键号码" prop="greenKeyPhone" class="item">
          <el-input v-model="model.greenKeyPhone"></el-input>
        </el-form-item>
      </div>

      <!-- 提醒设置相关 -->
      <div v-for="(key, val) in model.reminderSettingsList" :slot="val" :key="`group${val}`">
        <div class="timeContent" v-for="(item, index1) in key" :key="`eatDrug${index1}`">
          <div>
            <el-form-item label="提醒时间" class="item">
              <el-time-select
                v-model="item.time"
                :picker-options="{
                    start: '08:00',
                    step: '00:15',
                    end: '22:30'
                  }"
                placeholder="选择时间"
              ></el-time-select>
            </el-form-item>
            <el-form-item label="重复方式" class="item">
              <el-checkbox-group v-model="item.repetMode">
                <el-checkbox
                  v-for="(key, index) in item.checkboxOptions"
                  :key="`checkboxOptions${index}`"
                  :label="key.value"
                >{{ key.label }}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>
          <div class="timeSitch">
            <el-form-item>
              <el-switch v-model="item.open"></el-switch>
            </el-form-item>
          </div>
        </div>
        <el-button @click="addAlarmClock(val)">新增闹钟</el-button>
      </div>
      <div slot="remindSet" style="width: 100%;text-align: center;">
        <el-divider></el-divider>
        <el-button @click="addSet">新增提醒</el-button>
      </div>
      <div slot="音量调整" class="rowContent">
        <div class="volume">
          <el-slider :marks="marks" v-model="model.volume" show-input></el-slider>
        </div>
      </div>
    </tableGroup>
    <el-dialog v-if="dialogVisible" title="新增提醒" :visible.sync="dialogVisible" width="30%">
      <div>
        提醒名称
        <el-input v-model="addSetName"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmAddSet">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import tableGroupMixins from "@/minxins/tableGroup";
export default {
  mixins: [tableGroupMixins],
  props: {
    groupInfo: Array
  },
  filters: {
    changeBoolean(val) {
      if (val == 1) return true;
      if (val == 0) return false;
    }
  },
  computed: {
    model() {
      return this.$parent.model;
    }
  },
  data() {
    const timeArr = [
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
        },
        {
          value: 4,
          lable: "50分钟"
        },
        {
          value: 5,
          lable: "60分钟"
        }
    ]
    return {
      dialogVisible: false,
      gpsCycle: timeArr,
      heartRateCycle: timeArr,
      bloodPressureCycle: timeArr,
      measurementCycle: timeArr,
      timeZone: [
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
      ],
      heartRateMaxValueType: '0',
      heartRateMinValueType: '0',
      highPressureMaxValueType: '0',
      highPressureMixValueType: '0',
      bloodPressureLowMax: '0',
      bloodPressureLowMin: '0',
      maxOrMinType: [
        {
          lable: "默认值",
          value: "0"
        },
        {
          lable: "自定义",
          value: "1"
        }
      ],
      addSetName: "",
      marks: {
        0: "0%",
        20: "20%",
        40: "40%",
        60: "60%",
        80: "80%",
        100: "100%"
      }
    };
  },
  methods: {
    addAlarmClock(key) {
      this.$parent.$parent.addAlarmClock(key);
    },
    addWhiteList() {
      this.$parent.$parent.addWhiteList();
    },
    addSet() {
      this.dialogVisible = true;
    },
    confirmAddSet() {
      let tempArr = [
        {
          code: "3",
          name: this.addSetName,
          time: "",
          repetMode: [],
          open: true,
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
      ];
      this.$parent.$parent.$set(this.$parent.$parent.model.reminderSettingsList, this.addSetName, tempArr);
      this.$parent.$parent.groupInfo[2].info[7].subInfo.push(this.addSetName)
      this.dialogVisible = false;
    }
  }
};
</script>