<template>
  <div class="device">
    <div class="topbox">
      <el-button size="small" @click="$router.push('/sysControl/addDevice')">新增设备</el-button>
      <app-form :dataInfo="dataInfo">
        <div class="topboxBtn" slot="footer">
          <el-button >搜索</el-button>
        </div>
      </app-form>
    </div>
    <cusTomTable 
      :tableData="tableData" 
      :tableInfo="tableInfo"
      :page="page"
      :pageSize="pageSize"
      :count="count"
      :sortNumIsShow="true"
    >
      <el-table-column label="操作"  align="center" width="300" slot="operation">
          <template slot-scope="scope">
            <div class="tableBtns">
              <el-button class="btn_link btnSee"  @click="see(scope)">查看</el-button>
              <el-button class="btn_link btnEdit"  @click="edit(scope)">修改</el-button>
              <el-button class="btn_link btnSee"  @click="refresh(scope)">刷新</el-button>
              <el-button class="btn_link btndel"  @click="del(scope)">删除</el-button>
              
            </div>
            <div class="tableBtns">
              <el-button class="btn_link btnSee" @click="binding(scope, '/sysControl/bindingDevice')">绑定</el-button>
              <el-button class="btn_link btnEdit" @click="unbundling(scope)">解绑</el-button>
              <el-button class="btn_link btnSee" @click="activation(scope)">激活</el-button>
              <el-button class="btn_link btndel" @click="thaw(scope)">冻结</el-button>
            </div>
          </template>
        </el-table-column>
    </cusTomTable>
  </div>
</template>

<script>
import cusTomTable from '@/minxins/customTable.js'
export default {
  mixins: [cusTomTable],
  provide() {
    return {
      parentPage: this
    }
  },
  data() {
    return {
      dataInfo: {
        inline: true, // 表单组件的排列方式
        labelPosition: 'left', // top  left 表单label的位置
        labelWidth: '100px',
        components: [
          {
            type: 'input',
            props: 'name',
            placeholder: '请输入客户姓名',
            label: '客户姓名',
            size: 'small',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'input',
            props: 'idcard',
            placeholder: '请输入客户身份证号',
            label: '客户身份证号',
            size: 'small',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'input',
            props: 'phone',
            placeholder: '请输入客户电话',
            label: '客户电话',
            size: 'small',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'input',
            props: 'imie',
            placeholder: '请输入设备标识',
            label: '客户标识',
            size: 'small',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'select',
            props: 'type',
            placeholder: '请选择设备类别',
            label: '设备类别',
            size: 'small',
            options: [
              {
                label: '男',
                value: 0
              },
              {
                label: '女',
                value: 1
              }
            ],
            contentWidth: '176px',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'select',
            props: 'DeviceModelId',
            placeholder: '请选择设备型号',
            label: '设备型号',
            size: 'small',
            options: [
              {
                label: '男',
                value: 0
              },
              {
                label: '女',
                value: 1
              }
            ],
            contentWidth: '176px',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'datePicker', 
            prop: 'openStartTime',
            label: '开通时间',
            // valueFormat: "yyyy-MM-dd",
            // format: 'yyyy-MM-dd',
            
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
            // defaulTtime: '["00:00:00", "08:00:00"]',
            value:'',
            auther: {
              see: true, // 可见
              write: true, // 可写 
              read: true // 可读
            }
          },
          {
            type: 'select',
            props: 'status',
            placeholder: '请选择在线状态',
            label: '在线状态',
            size: 'small',
            options: [
              {
                label: '全部',
                value: 0
              },
              {
                label: '在线',
                value: 1
              },
              {
                label: '离线',
                value: 1
              }
            ],
            contentWidth: '176px',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'select',
            props: 'status',
            placeholder: '请选择激活状态',
            label: '激活状态',
            size: 'small',
            options: [
              {
                label: '全部',
                value: 0
              },
              {
                label: '冻结',
                value: 1
              },
              {
                label: '激活',
                value: 1
              }
            ],
            contentWidth: '176px',
            auther: {
              see: true,
              write: true
            }
          },
        ]
      },
      tableData: [
        {
          IMEI: '1',
          deviceType: '1'
        }
      ],
      tableInfo: [
        {
          label: "设备IMEI或ID号",
          prop: "IMEI",
          width: ""
        },
        {
          label: "设备类别",
          prop: "deviceType",
          width: ""
        },
        {
          label: "设备型号",
          prop: "orgName",
          width: ""
        },
        {
          label: "客户姓名",
          prop: "orgName",
          width: ""
        },
        {
          label: "客户身份证号",
          prop: "orgName",
          width: ""
        },
        {
          label: "客户电话",
          prop: "orgName",
          width: ""
        },
        {
          label: "开通时间",
          prop: "orgName",
          width: ""
        },
        {
          label: "在线状态",
          prop: "orgName",
          width: ""
        },
        {
          label: "佩戴状态",
          prop: "orgName",
          width: ""
        },
        {
          label: "电量",
          prop: "orgName",
          width: ""
        },
        {
          label: "激活状态",
          prop: "orgName",
          width: ""
        }
      ]
    };
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.search{
  background-color: #fff;
  padding: 10px 20px;
  margin-bottom: 20PX;
}
/deep/.el-input--small{
  width: 175px;
}
</style>