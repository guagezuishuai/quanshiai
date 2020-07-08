<template>
  <div class="assTable">
    <div class="btnBox">
      <el-button class="mainbgcolor" size="small" type="primary" icon="el-icon-edit" @click="add">新增能力评估</el-button>
      <el-button class="mainbgcolor" size="small" type="primary" icon="el-icon-edit">查询</el-button>
    </div>
    <div class="searchBox">
      <app-form ref="form" :dataInfo="dataInfo" :formType="formType" ></app-form>
    </div>
    <cusTomTable :tableInfo="tableInfo" :tableData="tableData" :sortNumIsShow="true">
      <el-table-column width="250px" slot="operation" label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="toSee(scope.$index, scope.row)"
              style="margin-bottom: 10px"
            >查看</el-button>
            <el-button
              size="mini"
              type="primary"
              @click="toEdit(scope.$index, scope.row)"
            >修改</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="toDelet(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
    </cusTomTable>
  </div>
</template>

<script>
import cusTomTable from '@/components/cusTomTable.vue'
export default {
  components: {
    cusTomTable
  },
  provide() {
    return {
      parentPage: this
    }
  },
  data() {
    return {
      formType: '',
      dataInfo: {
        inline: true, // 表单组件的排列方式
        labelPosition: 'left', // top  left 表单label的位置
        labelWidth: '100px',
        components: [
          {
            type: 'input',
            props: 'number',
            placeholder: '请输入评估编号',
            label: '评估编号',
            size: 'small',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'datePicker', 
            prop: 'datePicker',
            label: '评估基准日期',
            size: 'small',
            valueFormat: "",
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
            dataPickerType: 'datetimerange', // year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange
            clearable: true, // 是否展示清除按钮
            placeholder: '请选择时间',
            value:'',
            auther: {
              see: true, // 可见
              write: true, // 可写 
              read: true // 可读
            }
          },
          {
            type: 'select',
            prop: 'select',
            label: '评估结果',
            size: 'small',
            options: [
              {
                label: '下拉框1',
                value: 1
              },
              {
                label: '下拉框2',
                value: 2
              },
              {
                label: '下拉框3',
                value: 3
              },
              {
                label: '下拉框4',
                value: 4
              },
            ],
            valueChange: this.handler, // 选择的值改变的回调
            // 读写权限
            auther: {
              see: true, // 可见
              write: true, // 可写
              read: true // 可读
            },
            value: ''
          },
          {
            type: 'select',
            prop: 'select',
            label: '完成状态',
            size: 'small',
            options: [
              {
                label: '下拉框1',
                value: 1
              },
              {
                label: '下拉框2',
                value: 2
              },
              {
                label: '下拉框3',
                value: 3
              },
              {
                label: '下拉框4',
                value: 4
              },
            ],
            valueChange: this.handler, // 选择的值改变的回调
            // 读写权限
            auther: {
              see: true, // 可见
              write: true, // 可写
              read: true // 可读
            },
            value: ''
          }
        ]
      },
      tableInfo: [
        {
          label: "被评估人",
          prop: "orgName",
          width: ""
        },
        {
          label: "评估编号",
          prop: "orgType",
          width: ""
        },
        {
          label: "评估基准日期",
          prop: "orgLevel",
          width: ""
        },
        {
          label: "评估原因",
          prop: "preOrg",
          width: ""
        },
        {
          label: "评估员",
          prop: "assuser",
          width: ""
        },
        {
          label: "评估结果",
          prop: "resrult",
          width: ""
        },
        {
          label: "完成状态",
          prop: "state",
          width: ""
        }
      ],
      tableData: [
        {
          state: 1
        }
      ]
    }
  },
  methods: {
    add() {
      this.$router.push('/customer/assAbility');
    },
    toSee() {
      this.$router.push({
        path: '/customer/assAbility',
        query: {
          id: '12'
        }
      });
    },
    toEdit() {

    },
    toDelet() {

    },
  }
}
</script>

<style lang="scss" scoped>

</style>