<template>
  <div class="diagnosisDetail">
    <el-form label-width="100px" :rules="rules" :model="userInfo" inline>
      <tableGroup :groupInfo="groupInfo[0]">
        <!-- 患者信息 -->
        <div class="rowContent" slot="患者信息">
          <el-form-item label="就诊人" class="item">
              <el-input size="small" v-model="userInfo.userName"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" class="item">
              <el-input size="small" v-model="userInfo.idNumber"></el-input>
            </el-form-item>
        </div>
        <!-- 医院科室 -->
        <div class="rowContent" slot="医院科室">
          <el-form-item label="医院" class="item">
              <el-input size="small" v-model="userInfo.hospital"></el-input>
            </el-form-item>
            <el-form-item label="科室" class="item">
              <el-input size="small" v-model="userInfo.Department"></el-input>
            </el-form-item>
        </div>
        <!-- 时间信息 -->
        <div class="rowContent" slot="时间信息">
          <el-form-item label="就诊时间" class="item">
              <el-date-picker
                v-model="userInfo.time"
                type="datetime"
                placeholder="选择就诊日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="复诊时间" class="item">
              <el-date-picker
                v-model="userInfo.time1"
                type="datetime"
                placeholder="选择复诊日期">
              </el-date-picker>
            </el-form-item>
        </div>
      </tableGroup>
      <tableGroup :groupInfo="groupInfo[1]">
        <!-- 类型原因 -->
        <div class="rowContent" slot="类型原因">
          <el-form-item label="就诊类型" class="item">
            <el-select size="small" v-model="userInfo.type.value">
              <el-option v-for="(key, index) in userInfo.type.options" :label="key.lable" :value="key.value" :key="`type${index}`"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="医生姓名" class="item">
              <el-input size="small" v-model="userInfo.doctorNmae"></el-input>
          </el-form-item>
          <el-divider style="margin:0;"></el-divider>
          <div style="width: 100%;">
            <el-form-item label="医生姓名" class="item" style="width: 100%;">
              <el-input type="textarea" style="width: 700px;" rows="4" size="small" v-model="userInfo.doctorNmae"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <!-- <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog> -->
          </div>
        </div>
        <!-- 结果建议 -->
        <div class="rowContent" slot="结果建议">

        </div>
        <!-- 病历报告 -->
        <div class="rowContent" slot="病历报告">

        </div>
      </tableGroup>
    </el-form>
  </div>
</template>

<script>
import tableGroup from "@/components/tableGroup";
export default {
  name: 'diagnosisDetail',
  components: {
    tableGroup,
  },
  data() {
    return {
      groupInfo: [
        {
          title: "老人基础信息",
          info: ["患者信息", "医院科室", "时间信息"]
        },
        {
          title: "就诊信息",
          info: ["类型原因", "结果建议", "病历报告"]
        }
      ],
      userInfo: {
        userName: '',
        idNumber: '',
        hospital: '',
        Department: '',
        time: '',
        time1: '',
        type: {
          value: [],
          detail: '',
          options: [
            {
              value: 0,
              lable: '门诊'
            },
            {
              value: 1,
              lable: '急诊'
            },
            {
              value: 2,
              lable: '住院'
            },
            {
              value: 3,
              lable: '其他'
            },
          ]
        },
        doctorNmae: '',

      },
      rules: {}
    }
  },
  methods: {
    handleRemove() {

    },
    handlePictureCardPreview() {

    }
  }
}
</script>