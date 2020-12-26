<template>
  <div class="mechanism">
    <div class="topbox">
      <div class="btnBox">
        <el-button
          class="mainbgcolor"
          size="small"
          type="primary"
          @click="$router.push('/sysControl/mechanismAdd')"
          icon="el-icon-edit"
        >新增机构</el-button>
      </div>
      <app-form ref="form" :dataInfo="dataInfo">
        <el-form-item class="btn" slot="footer">
          <el-button class="mainbgcolor" size="small" type="primary" icon="el-icon-edit">查询</el-button>
        </el-form-item>
      </app-form>
    </div>
    <cusTomTable
      :tableData="tableData"
      :tableInfo="tableInfo"
      :sortNumIsShow="true"
      :pageSize="pageSize"
      :page="page"
      :count="count"
    >
      <el-table-column width="250px" slot="operation" label="操作">
        <template slot-scope="scope">
          <div class="tableBtns">
            <el-button class="btn_link btnSee" @click="see(scope)">查看</el-button>
            <el-button class="btn_link btnEdit" @click="edit(scope)">修改</el-button>
            <el-button class="btn_link btndel" @click="del(scope)">删除</el-button>
          </div>
          <div class="tableBtns">
            <el-button
              class="btn_link btnSee"
              :disabled="scope.row.status == '0'"
              @click="activation(scope)"
            >激活</el-button>
            <el-button
              class="btn_link btndel"
              :disabled="scope.row.status == '1'"
              @click="thaw(scope)"
            >冻结</el-button>
          </div>
        </template>
      </el-table-column>
    </cusTomTable>
  </div>
</template>

<script>
import customTablemixins from "@/minxins/customTable";
import { listPage, orgModifyStatus, orgDelete } from "@/api/sys";
export default {
  name: "mechanism",
  mixins: [customTablemixins],
  data() {
    return {
      dataInfo: {
        inline: true, // 表单组件的排列方式
        labelPosition: "left", // top  left 表单label的位置
        labelWidth: "100px",
        components: [
          {
            type: "input",
            props: "code",
            placeholder: "请输入机构编号",
            label: "机构编号",
            size: "small",
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: "input",
            props: "acountName",
            placeholder: "请输入登录账号",
            label: "登录账号",
            size: "small",
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: "input",
            props: "name",
            placeholder: "请输入机构名称",
            label: "机构名称",
            size: "small",
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: "select",
            props: "type",
            placeholder: "请选择机构类型",
            label: "机构类型",
            size: "small",
            options: [
              {
                label: "全部",
                value: 0
              },
              {
                label: "健康设备",
                value: 1
              }
            ],
            contentWidth: "176px",
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: "select",
            props: "level",
            placeholder: "请选择机构等级",
            label: "机构等级",
            size: "small",
            options: [
              {
                label: "一级",
                value: 0
              },
              {
                label: "二级",
                value: 1
              }
            ],
            contentWidth: "176px",
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: "select",
            props: "address",
            placeholder: "请选择所属区域",
            label: "所属区域",
            size: "small",
            options: [
              {
                label: "一级",
                value: 0
              },
              {
                label: "二级",
                value: 1
              }
            ],
            contentWidth: "176px",
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: "input",
            props: "pidName",
            placeholder: "请输入上级机构",
            label: "上级机构",
            size: "small",
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: "input",
            props: "contacts",
            placeholder: "请输入联系人",
            label: "联系人",
            size: "small",
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: "input",
            props: "contactNumber",
            placeholder: "请输入联系人电话",
            label: "联系人电话",
            size: "small",
            auther: {
              see: true,
              write: true
            }
          }
        ]
      },
      tableData: [],
      tableInfo: [
        {
          label: "机构编号",
          prop: "code"
        },
        {
          label: "登录账号",
          prop: "acountName"
        },
        {
          label: "机构名称",
          prop: "name"
        },
        {
          label: "机构类型",
          prop: "type"
        },
        {
          label: "机构等级",
          prop: "level"
        },
        {
          label: "所属区域",
          prop: "address"
        },
        {
          label: "上级机构",
          prop: "pidName"
        },
        {
          label: "机构概况",
          prop: "orgainProfile"
        },
        {
          label: "联系人",
          prop: "contacts"
        },
        {
          label: "联系人电话",
          prop: "contactNumber"
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$refs.form.getFromValue(params => {
        params["page"] = {
          size: this.pageSize,
          current: this.page
        };
        listPage(params).then(res => {
          this.tableData = res.data.records;
        });
      });
    },
    see(info) {
      console.log(info);
      this.$router.push({
        path: "/sysControl/mechanismAdd",
        query: {
          id: info.row.id,
          isEdit: false
        }
      });
    },
    edit(info) {
      this.$router.push({
        path: "/sysControl/mechanismAdd",
        query: {
          id: info.row.id,
          isEdit: true
        }
      });
    },
    del(info) {
      this.$confirm("确认删除？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "info",
        center: true
      }).then(res => {
        orgDelete({ id: info.row.id }).then(val => {
          this.$message.success("删除成功");
          this.page = 1;
          this.init();
        });
      });
    },
    activation(info) {
      orgModifyStatus({ id: info.row.id, status: "0" }).then(res => {
        this.$message.success("激活成功");
        this.init();
      });
    },
    thaw(info) {
      orgModifyStatus({ id: info.row.id, status: "1" }).then(res => {
        this.$message.success("冻结成功");
        this.init();
      });
    }
  }
};
</script>

<style lang="sass" scoped>

</style>