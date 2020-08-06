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
            <el-button class="btn_link btnSee" @click="activation(scope)">激活</el-button>
            <el-button class="btn_link btndel" @click="thaw(scope)">冻结</el-button>
          </div>
        </template>
      </el-table-column>
    </cusTomTable>
  </div>
</template>

<script>
import customTablemixins from "@/minxins/customTable";
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
            props: "userNumber",
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
            props: "userNumber",
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
            props: "userNumber",
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
            props: "userNumber",
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
            props: "userNumber",
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
            props: "userSex",
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
            props: "userNumber",
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
            props: "userSex",
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
      tableData: [
        {
          orgName: "1"
        }
      ],
      tableInfo: [
        {
          label: "员工编号",
          prop: "orgName"
        },
        {
          label: "登录账号",
          prop: "orgName"
        },
        {
          label: "姓名",
          prop: "orgName"
        },
        {
          label: "身份证号",
          prop: "orgName"
        },
        {
          label: "联系电话",
          prop: "orgName"
        },
        {
          label: "角色类型",
          prop: "orgName"
        },
        {
          label: "所属机构",
          prop: "orgName"
        },
        {
          label: "机构等级",
          prop: "orgName"
        },
        {
          label: "备注",
          prop: "orgName"
        }
      ]
    };
  },
  methods: {
    
  }
};
</script>

<style lang="sass" scoped>

</style>