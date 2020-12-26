<template>
  <div class="diagnosisRecord">
    <div class="btn">
      <el-button>新增就诊记录</el-button>
    </div>
    <app-form ref="form" :dataInfo="dataInfo">
      <el-form-item slot="footer">
        <el-button size="small">搜索</el-button>
      </el-form-item>
    </app-form>
    <cusTomTable
      :tableData="tableData"
      :tableInfo="tableInfo"
      :pageSize="pageSize"
      :sort="true"
      :sortNumIsShow="true"
    >
      <el-table-column slot="operation" fixed="right" label="操作" align="center" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </cusTomTable>
  </div>
</template>

<script>
import customTablemixins from "@/minxins/customTable";
export default {
  name: "diagnosisRecord",
  mixins: [customTablemixins],
  provide() {
    return {
      parentPage: this
    }
  },
  data() {
    return {
      dataInfo: {
        inline: true, // 表单组件的排列方式
        labelPosition: "left", // top  left 表单label的位置
        labelWidth: "90px",
        components: [
          {
            type: "datePicker",
            prop: "datePicker",
            label: "时间选择器",
            limitTime: "", // 注意值必须为字符串 限制的时间，这里填入components的index值，例如这个时间选择受components的index为4的组件的数据所限制，这里就填入4
            limitType: true, // false 开始的日期  true  结束的日期
            valueFormat: "yyyy-MM-dd",
            format: "yyyy-MM-dd",
            separator: "", // 范围选择的时候中间分隔的字符，默认为-
            /**
             * @param year 选择年份
             * @param month 选择月份
             * @param date 正常的日历，日期单选
             * @param dates 正常的日历，日期多选
             * @param week 整选一星期
             * @param datetime 整选一星期【带时分秒】
             * @param datetimerange 范围选择【带时分秒】
             * @param daterange 范围选择【月份】
             */
            dataPickerType: "daterange", // year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange
            clearable: true, // 是否展示清除按钮
            placeholder: "请选择时间",
            value: "",
            auther: {
              see: true, // 可见
              write: true, // 可写
              read: true // 可读
            }
          },
          {
            type: "select",
            prop: "select",
            label: "就诊类型",
            size: "small",
            options: [
              {
                label: "全部",
                value: 0
              },
              {
                label: "门诊",
                value: 1
              },
              {
                label: "急诊",
                value: 2
              },
              {
                label: "住院",
                value: 3
              },
              {
                label: "其他",
                value: 4
              }
            ],
            valueChange: this.handler, // 选择的值改变的回调
            // 读写权限
            auther: {
              see: true, // 可见
              write: true, // 可写
              read: true // 可读
            },
            value: ""
          },
          {
            type: "input",
            props: "number",
            placeholder: "输入就诊原因诊断结果等关键词查询",
            label: "其他",
            size: "small",
            auther: {
              see: true,
              write: true
            }
          }
        ]
      },
      tableInfo: [
        {
          label: "就诊日期",
          prop: "orgName",
          width: ""
        },
        {
          label: "就诊医院",
          prop: "orgName",
          width: ""
        },
        {
          label: "就诊类型",
          prop: "orgName",
          width: ""
        },
        {
          label: "就诊原因",
          prop: "orgName",
          width: ""
        },
        {
          label: "诊断结果",
          prop: "orgName",
          width: ""
        },
      ]
    };
  },
  mounted() {
    this.tableData = [{orgName: 1}]
  },
  methods: {
    handleClick(rowInfo) {
      this.$emit('contentChange')
    }
  }
};
</script>