<template>
  <tableGroup :groupInfo="groupInfo[2]">
        <div class="rowContent" slot="开关设置">
          <el-form-item label="GPS开关" class="item">
            <el-switch
              style="display: block"
              v-model="model.GPSswitch"
              :active-color="SWITCHONCOLOR"
              :inactive-color="SWITCHOFFCOLOR"
              active-text
              inactive-text
            ></el-switch>
          </el-form-item>
          <el-form-item label="白名单开关" class="item">
            <el-switch
              style="display: block"
              v-model="model.GPSswitch"
              :active-color="SWITCHONCOLOR"
              :inactive-color="SWITCHOFFCOLOR"
              active-text
              inactive-text
            ></el-switch>
          </el-form-item>
          <el-form-item label="红键短信开关" class="item">
            <el-switch
              style="display: block"
              v-model="model.GPSswitch"
              :active-color="SWITCHONCOLOR"
              :inactive-color="SWITCHOFFCOLOR"
              active-text
              inactive-text
            ></el-switch>
          </el-form-item>
          <el-form-item label="黄键短信开关" class="item">
            <el-switch
              style="display: block"
              v-model="model.GPSswitch"
              :active-color="SWITCHONCOLOR"
              :inactive-color="SWITCHOFFCOLOR"
              active-text
              inactive-text
            ></el-switch>
          </el-form-item>
        </div>
        <!-- 数据周期设置 -->
        <div slot="数据周期设置" class="rowContent">
          <el-form-item label="GPS周期" class="item">
            <el-select size="small" v-model="model.GPScycle.value">
              <el-option
                v-for="(key, index) in model.GPScycle.options"
                :label="key.lable"
                :value="key.value"
                :key="`GPScycle${index}`"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="心率周期" class="item">
            <el-select size="small" v-model="model.heartcycle.value">
              <el-option
                v-for="(key, index) in model.heartcycle.options"
                :label="key.lable"
                :value="key.value"
                :key="`heartcycle${index}`"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="血压周期" class="item">
            <el-select size="small" v-model="model.bloodcycle.value">
              <el-option
                v-for="(key, index) in model.bloodcycle.options"
                :label="key.lable"
                :value="key.value"
                :key="`bloodcycle${index}`"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="体温周期" class="item">
            <el-select size="small" v-model="model.temperatureCycle.value">
              <el-option
                v-for="(key, index) in model.temperatureCycle.options"
                :label="key.lable"
                :value="key.value"
                :key="`temperatureCycle${index}`"
              ></el-option>
            </el-select>
          </el-form-item>
        </div>
        <!-- 时间段设置 -->
        <div slot="时间段设置" class="rowContent">
          <el-form-item label="GPS静默时间" class="item">
            <el-time-select
              placeholder="起始时间"
              v-model="model.GPSstartTime"
              :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00'
              }"
            ></el-time-select>
            <span class="timeLine"></span>
            <el-time-select
              placeholder="结束时间"
              v-model="model.GPSendTime"
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
              v-model="model.powerLowStartTime"
              :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00'
              }"
            ></el-time-select>
            <span class="timeLine"></span>
            <el-time-select
              placeholder="结束时间"
              v-model="model.powerLowEndtTime"
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
              v-model="model.balanceStartTime"
              :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00'
              }"
            ></el-time-select>
            <span class="timeLine"></span>
            <el-time-select
              placeholder="结束时间"
              v-model="model.balanceEndTime"
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
              v-model="model.measureStartTime"
              :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00'
              }"
            ></el-time-select>
            <span class="timeLine"></span>
            <el-time-select
              placeholder="结束时间"
              v-model="model.measureEndTime"
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
              v-model="model.temperatureStartTime"
              :picker-options="{
                start: '00:00',
                step: '00:01',
                end: '24:00'
              }"
            ></el-time-select>
            <span class="timeLine"></span>
            <el-time-select
              placeholder="结束时间"
              v-model="model.temperatureEndTime"
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
          <el-form-item label="体温周期" class="item">
            <el-select size="small" v-model="model.timeZone.value">
              <el-option
                v-for="(key, index) in model.timeZone.options"
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
            v-for="(key, index) in model.whiteList"
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
              <el-select size="small" v-model="model.heartRateMaxValueType.value">
                <el-option
                  v-for="(key, index) in model.heartRateMaxValueType.options"
                  :label="key.lable"
                  :value="key.value"
                  :key="`heartRateMaxValueType${index}`"
                ></el-option>
              </el-select>
              <el-input
                v-model="model.heartRateMax"
                :placeholder="model.heartRateMaxValueType.value == 0 ? '' : '请输入心率最大值'"
                :disabled="model.heartRateMaxValueType.value == 0"
              >
                <template slot="append">bpm</template>
              </el-input>
            </div>
          </el-form-item>
          <el-form-item label="心率最小值" class="item">
            <div style="display:flex">
              <el-select size="small" v-model="model.heartRateMinValueType.value">
                <el-option
                  v-for="(key, index) in model.heartRateMinValueType.options"
                  :label="key.lable"
                  :value="key.value"
                  :key="`heartRateMinValueType${index}`"
                ></el-option>
              </el-select>
              <el-input
                v-model="model.heartRateMax"
                :placeholder="model.heartRateMinValueType.value == 0 ? '' : '请输入心率最小值'"
                :disabled="model.heartRateMinValueType.value == 0"
              >
                <template slot="append">bpm</template>
              </el-input>
            </div>
          </el-form-item>
        </div>
        <div slot="血压报警">
          <el-form-item label="高压最大值" class="item">
            <div style="display:flex">
              <el-select size="small" v-model="model.highPressureMaxValueType.value">
                <el-option
                  v-for="(key, index) in model.highPressureMaxValueType.options"
                  :label="key.lable"
                  :value="key.value"
                  :key="`highPressureMaxValueType${index}`"
                ></el-option>
              </el-select>
              <el-input
                v-model="model.highPressureMax"
                :placeholder="model.highPressureMaxValueType.value == 0 ? '' : '请输入心率最大值'"
                :disabled="model.highPressureMaxValueType.value == 0"
              >
                <template slot="append">mmHg</template>
              </el-input>
            </div>
          </el-form-item>
          <el-form-item label="高压最小值" class="item">
            <div style="display:flex">
              <el-select size="small" v-model="model.highPressureMixValueType.value">
                <el-option
                  v-for="(key, index) in model.highPressureMixValueType.options"
                  :label="key.lable"
                  :value="key.value"
                  :key="`highPressureMixValueType${index}`"
                ></el-option>
              </el-select>
              <el-input
                v-model="model.highPressureMix"
                :placeholder="model.highPressureMixValueType.value == 0 ? '' : '请输入心率最小值'"
                :disabled="model.highPressureMixValueType.value == 0"
              >
                <template slot="append">mmHg</template>
              </el-input>
            </div>
          </el-form-item>
          <el-form-item label="低压最大值" class="item">
            <div style="display:flex">
              <el-select size="small" v-model="model.lowPressureMaxValueType.value">
                <el-option
                  v-for="(key, index) in model.lowPressureMaxValueType.options"
                  :label="key.lable"
                  :value="key.value"
                  :key="`lowPressureMaxValueType${index}`"
                ></el-option>
              </el-select>
              <el-input
                v-model="model.lowPressureMax"
                :placeholder="model.lowPressureMaxValueType.value == 0 ? '' : '请输入心率最大值'"
                :disabled="model.lowPressureMaxValueType.value == 0"
              >
                <template slot="append">mmHg</template>
              </el-input>
            </div>
          </el-form-item>
          <el-form-item label="低压最小值" class="item">
            <div style="display:flex">
              <el-select size="small" v-model="model.lowPressureMaxValueType.value">
                <el-option
                  v-for="(key, index) in model.lowPressureMaxValueType.options"
                  :label="key.lable"
                  :value="key.value"
                  :key="`lowPressureMaxValueType${index}`"
                ></el-option>
              </el-select>
              <el-input
                v-model="model.lowPressureMax"
                :placeholder="model.lowPressureMaxValueType.value == 0 ? '' : '请输入心率最小值'"
                :disabled="model.lowPressureMaxValueType.value == 0"
              >
                <template slot="append">mmHg</template>
              </el-input>
            </div>
          </el-form-item>
        </div>
        <div slot="号码设置" class="rowContent">
          <el-form-item label="红键号码" prop="telRedKey" class="item">
            <el-input v-model="model.telRedKey"></el-input>
          </el-form-item>
          <el-form-item label="黄键号码" prop="telYellowKey" class="item">
            <el-input v-model="model.telYellowKey"></el-input>
          </el-form-item>
          <el-form-item label="绿键号码" prop="telGreenKey" class="item">
            <el-input v-model="model.telGreenKey"></el-input>
          </el-form-item>
        </div>
        <div slot="吃药提醒">
          <div
            class="timeContent"
            v-for="(item, index1) in model.eatDrug"
            :key="`eatDrug${index1}`"
          >
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
                <el-checkbox-group v-model="item.repeatWay">
                  <el-checkbox
                    v-for="(key, index) in item.checkboxOptions"
                    :key="`checkboxOptions${index}`"
                    :label="key.label"
                    :value="key.value"
                  ></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </div>
            <div class="timeSitch">
              <el-form-item>
                <el-switch v-model="item.switch"></el-switch>
              </el-form-item>
            </div>
          </div>
          <el-button @click="addAlarmClock('eatDrug')">新增闹钟</el-button>
        </div>
        <div slot="喝水提醒">
          <div
            class="timeContent"
            v-for="(item, index1) in model.drinkWater"
            :key="`drinkWater${index1}`"
          >
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
                <el-checkbox-group v-model="item.repeatWay">
                  <el-checkbox
                    v-for="(key, index) in item.checkboxOptions"
                    :key="`checkboxOptions${index}`"
                    :label="key.label"
                    :value="key.value"
                  ></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </div>
            <div class="timeSitch">
              <el-form-item>
                <el-switch v-model="item.switch"></el-switch>
              </el-form-item>
            </div>
          </div>
          <el-button @click="addAlarmClock('drinkWater')">新增闹钟</el-button>
        </div>
        <div slot="运动提醒">
          <div class="timeContent" v-for="(item, index1) in model.sport" :key="`sport${index1}`">
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
                <el-checkbox-group v-model="item.repeatWay">
                  <el-checkbox
                    v-for="(key, index) in item.checkboxOptions"
                    :key="`checkboxOptions${index}`"
                    :label="key.label"
                    :value="key.value"
                  ></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </div>
            <div class="timeSitch">
              <el-form-item>
                <el-switch v-model="item.switch"></el-switch>
              </el-form-item>
            </div>
          </div>
          <el-button @click="addAlarmClock('sport')">新增闹钟</el-button>
        </div>
        <div slot="音量调整" class="rowContent">
          <div class="volume">
            <el-slider :marks="marks" v-model="model.volume" show-input></el-slider>
          </div>
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
  },
  data() {
    return {
      marks: {
        0: "0%",
        20: "20%",
        40: "40%",
        60: "60%",
        80: "80%",
        100: "100%"
      }
    }
  },
  methods: {
    addAlarmClock(key) {
      this.$parent.addAlarmClock(key)
    },
    addWhiteList() {
      this.$parent.addWhiteList();
    },
  }
}
</script>