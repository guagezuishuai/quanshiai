<template>
  <div class="device">
    <div class="topbox">
      <el-button size="small" @click="$router.push('/sysControl/addDevice')">新增设备</el-button>
      <app-form ref="form" :dataInfo="dataInfo">
        <div class="topboxBtn" slot="footer">
          <el-button>搜索</el-button>
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
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    >
      <el-table-column label="操作" align="center" width="300" slot="operation">
        <template slot-scope="scope">
          <div class="tableBtns">
            <el-button class="btn_link btnSee" @click="see(scope)">查看</el-button>
            <el-button class="btn_link btnEdit" @click="edit(scope)">修改</el-button>
            <el-button class="btn_link btnSee" @click="refresh(scope)">刷新</el-button>
            <el-button class="btn_link btndel" @click="del(scope)">删除</el-button>
          </div>
          <div class="tableBtns">
            <el-button
              class="btn_link btnSee"
              @click="binding(scope, '/sysControl/bindingDevice')"
            >绑定</el-button>
            <el-button class="btn_link btnEdit" @click="unbundling(scope, )">解绑</el-button>
            <el-button class="btn_link btnSee" @click="activation(scope, '0')">激活</el-button>
            <el-button class="btn_link btndel" @click="activation(scope, '1')">冻结</el-button>
          </div>
        </template>
      </el-table-column>
    </cusTomTable>
  </div>
</template>

<script>
import cusTomTable from "@/minxins/customTable.js";
import {
  listDevices,
  deviceUpdate,
  deviceUpdateStatus,
  deviceExecUnbind,
  deviceExecBinding
} from "@/api/sys.js";
export default {
  mixins: [cusTomTable],
  provide() {
    return {
      parentPage: this
    };
  },
  data() {
    return {
      dataInfo: {
        inline: true, // 表单组件的排列方式
        labelPosition: "left", // top  left 表单label的位置
        labelWidth: "100px",
        components: [
          {
            type: "input",
            prop: "name",
            placeholder: "请输入客户姓名",
            label: "客户姓名",
            size: "small",
            auther: {
              see: true,
              write: true
            },
            value: ""
          },
          {
            type: "input",
            prop: "idcard",
            placeholder: "请输入客户身份证号",
            label: "客户身份证号",
            size: "small",
            auther: {
              see: true,
              write: true
            },
            value: ""
          },
          {
            type: "input",
            prop: "phone",
            placeholder: "请输入客户电话",
            label: "客户电话",
            size: "small",
            auther: {
              see: true,
              write: true
            },
            value: ""
          },
          {
            type: "input",
            prop: "imie",
            placeholder: "请输入设备标识",
            label: "客户标识",
            size: "small",
            auther: {
              see: true,
              write: true
            },
            value: ""
          },
          {
            type: "select",
            prop: "type",
            placeholder: "请选择设备类别",
            label: "设备类别",
            size: "small",
            options: [
              {
                label: "男",
                value: 0
              },
              {
                label: "女",
                value: 1
              }
            ],
            contentWidth: "176px",
            auther: {
              see: true,
              write: true
            },
            value: ""
          },
          {
            type: "select",
            prop: "DeviceModelId",
            placeholder: "请选择设备型号",
            label: "设备型号",
            size: "small",
            options: [
              {
                label: "男",
                value: 0
              },
              {
                label: "女",
                value: 1
              }
            ],
            contentWidth: "176px",
            auther: {
              see: true,
              write: true
            },
            value: ""
          },
          {
            type: "datePicker",
            prop: "openStartTime",
            label: "开通时间",
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
            dataPickerType: "datetimerange", // year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange
            clearable: true, // 是否展示清除按钮
            placeholder: "请选择时间",
            // defaulTtime: '["00:00:00", "08:00:00"]',
            value: [],
            auther: {
              see: true, // 可见
              write: true, // 可写
              read: true // 可读
            }
          },
          {
            type: "select",
            prop: "onLine",
            placeholder: "请选择在线状态",
            label: "在线状态",
            size: "small",
            options: [
              {
                label: "全部",
                value: 0
              },
              {
                label: "在线",
                value: 1
              },
              {
                label: "离线",
                value: 1
              }
            ],
            contentWidth: "176px",
            auther: {
              see: true,
              write: true
            },
            value: ""
          },
          {
            type: "select",
            prop: "status",
            placeholder: "请选择激活状态",
            label: "激活状态",
            size: "small",
            options: [
              {
                label: "全部",
                value: 0
              },
              {
                label: "冻结",
                value: 1
              },
              {
                label: "激活",
                value: 1
              }
            ],
            contentWidth: "176px",
            auther: {
              see: true,
              write: true
            },
            value: ""
          }
        ]
      },
      tableData: [],
      tableInfo: [
        {
          label: "设备IMEI或ID号",
          prop: "imie",
          width: ""
        },
        {
          label: "设备类别",
          prop: "type",
          width: ""
        },
        {
          label: "设备型号",
          prop: "equipmentType",
          width: ""
        },
        {
          label: "客户姓名",
          prop: "customerName",
          width: ""
        },
        {
          label: "客户身份证号",
          prop: "idcard",
          width: ""
        },
        {
          label: "客户电话",
          prop: "phone",
          width: ""
        },
        {
          label: "开通时间",
          prop: "openTime",
          width: ""
        },
        {
          label: "在线状态",
          prop: "onLineName", // 0:在线 ;1:离线）
          width: ""
        },
        {
          label: "佩戴状态",
          prop: "wearingStatusName", //（0:未佩戴 ;1:已佩戴）
          width: ""
        },
        {
          label: "电量",
          prop: "electricQuantity",
          width: ""
        },
        {
          label: "激活状态",
          prop: "statusName", //  状态 0 激活 1 冻结；空：全部
          width: ""
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      this.$refs.form.getFromValue(params => {
        const onLine = {
          0: "在线",
          1: "离线"
        };
        const wearingStatus = {
          0: "未佩戴",
          1: "已佩戴）"
        };
        const status = {
          0: "激活",
          1: "冻结"
        };
        params["current"] = this.page;
        params["size"] = this.pageSize;
        listDevices(params).then(res => {
          console.log(res);
          this.tableData = res.data.records.map(item => {
            return {
              onLineName: onLine[item.onLine],
              wearingStatusName: wearingStatus[item.wearingStatus],
              statusName: status?.[item.wearingStatus] ?? "全部",
              ...item
            };
          });
          this.count = res.data.total;
        });
      });
    },
    see(info) {
      this.$router.push({
        path: "/sysControl/addDevice",
        query: {
          id: info.row.id,
          type: "see"
        }
      });
    },
    edit(info) {
      this.$router.push({
        path: "/sysControl/addDevice",
        query: {
          id: info.row.id,
          type: "edit"
        }
      });
    },
    refresh() {},
    // 删除调用修改的接口，del参数0 未删除 1 已删除
    del() {
      this.$confirm('确认要删除吗？', '删除', {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        deviceUpdate({del: 1}).then(res => {
          this.$message.success('删除成功');
        })
      })
    },
    binding(info) {
      deviceExecBinding({ id: info.row.id, customerId: info.row.customerId });
    },
    unbundling(info) {
      this.$confirm("确定要和客户解绑吗？", "解绑", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await deviceExecUnbind({ id: info.row.id });
        console.log(res);
      })
    },
    // 设备状体 0 激活 1 冻结
    activation(info, status) {
      deviceUpdateStatus({ id: info.row.id, status });
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  background-color: #fff;
  padding: 10px 20px;
  margin-bottom: 20px;
}
/deep/.el-input--small {
  width: 175px;
}
</style>