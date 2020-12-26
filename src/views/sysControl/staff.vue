<template>
  <div class="staff">
    <div class="topbox">
      <div class="btnBox">
        <el-button
          class="mainbgcolor"
          size="small"
          type="primary"
          @click="$router.push('/sysControl/staffAdd')"
          icon="el-icon-edit"
        >新增员工</el-button>
      </div>
      <app-form ref="form" :dataInfo="dataInfo">
        <el-form-item class="btn" slot="footer">
          <el-button class="mainbgcolor" @click="search" size="small" type="primary" icon="el-icon-edit">查询</el-button>
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
            <el-button class="btn_link btnSee" :disabled="scope.row.status === '0'" @click="activation(scope)">激活</el-button>
            <el-button class="btn_link btndel" :disabled="scope.row.status === '1'" @click="thaw(scope)">冻结</el-button>
          </div>
        </template>
      </el-table-column>
    </cusTomTable>
  </div>
</template>

<script>
import customTablemixins from "@/minxins/customTable";
import {listemp, updateStatus, employeeDelete} from '@/api/sys';
export default {
  name: "staff",
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
            prop: "orderNum",
            placeholder: "请输入员工编号",
            label: "员工编号",
            size: "small",
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: "input",
            prop: "accountName",
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
            prop: "name",
            placeholder: "请输入姓名",
            label: "姓名",
            size: "small",
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: "input",
            prop: "idCard",
            placeholder: "请输入身份证号",
            label: "身份证号",
            size: "small",
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: "input",
            prop: "contactNumber",
            placeholder: "请输入联系电话",
            label: "联系电话",
            size: "small",
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: "select",
            prop: "roleType",
            placeholder: "请选择角色类型",
            label: "角色类型",
            size: "small",
            options: [
              {
                label: "健康管理师",
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
            }
          },
          {
            type: "input",
            prop: "organName",
            placeholder: "请输入所属机构",
            label: "所属机构",
            size: "small",
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: "select",
            prop: "level",
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
          }
        ]
      },
      tableData: [],
      tableInfo: [
        {
          label: "员工编号",
          prop: "orderNum"
        },
        {
          label: "登录账号",
          prop: "accountName"
        },
        {
          label: "姓名",
          prop: "name"
        },
        {
          label: "身份证号",
          prop: "idCard"
        },
        {
          label: "联系电话",
          prop: "contactNumber"
        },
        {
          label: "角色类型",
          prop: "roleName"
        },
        {
          label: "所属机构",
          prop: "organName"
        },
        {
          label: "机构等级",
          prop: "level"
        },
        {
          label: "备注",
          prop: "employeeProfile"
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
        console.log(params)
        params['page'] = {
          size: this.pageSize,
          current: this.page
        }
        listemp(params).then(res => {
          this.tableData = res.data.records;
        })
      })
    },
    see(info) {
      this.$router.push({
        path: '/sysControl/staffAdd',
        query: {
          id: info.row.id,
          isEdit: false
        }
      })
    },
    edit(info) {
      this.$router.push({
        path: '/sysControl/staffAdd',
        query: {
          id: info.row.id,
          isEdit: true
        }
      })
    },
    del(info) {
      employeeDelete({id: info.row.id}).then(res => {
        this.$message.success('删除成功');
        this.init();
      })
    },
    activation(info) {
      updateStatus({id: info.row.id, status: '0'}).then(res => {
        this.$message.success('激活成功');
        this.init();
      })
    },
    thaw(info) {
      updateStatus({id: info.row.id, status: '1'}).then(res => {
        this.$message.success('冻结成功');
        this.init();
      })
    }
  }
};
</script>

<style lang="sass" scoped>

</style>