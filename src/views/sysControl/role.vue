<template>
  <div class="role">
    <div class="topbox">
      <div class="btnBox">
        <el-button
          class="mainbgcolor"
          size="small"
          type="primary"
          @click="$router.push('/sysControl/roleAdd')"
          icon="el-icon-edit"
        >新增角色</el-button>
      </div>
    </div>
    <cusTomTable
      :tableData="tableData"
      :tableInfo="tableInfo"
      :sortNumIsShow="true"
      :pageSize="pageSize"
      :page="page"
      :count="count"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    >
      <el-table-column width="250px" slot="operation" align="center" label="操作">
        <template slot-scope="scope">
          <div class="tableBtns">
            <el-button class="btn_link btnSee" @click="see(scope)">查看</el-button>
            <el-button class="btn_link btnEdit" @click="edit(scope)">修改</el-button>
            <el-button class="btn_link btndel" @click="del(scope)">删除</el-button>
          </div>
          <!-- 0 激活 1 冻结 -->
          <div class="tableBtns">
            <el-button class="btn_link btnSee" :disabled="scope.row.status === 0" @click="activation(scope)">激活</el-button>
            <el-button class="btn_link btndel" :disabled="scope.row.status === 1" @click="thaw(scope)">冻结</el-button>
          </div>
        </template>
      </el-table-column>
    </cusTomTable>
  </div>
</template>

<script>
import customTablemixins from "@/minxins/customTable";
import { roleList, roleDelete, roleModifyStatus } from "@/api/sys";
export default {
  name: "role",
  mixins: [customTablemixins],
  data() {
    return {
      tableData: [],
      tableInfo: [
        {
          label: "角色类型",
          prop: "name"
        },
        {
          label: "角色属性",
          prop: "status"
        },
        {
          label: "角色描述",
          prop: "remark"
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const params = {
        page: {
          size: this.pageSize,
          current: this.page
        }
      };
      roleList(params).then(res => {
        this.tableData = res.data.records;
        this.count = res.data.total;
      });
    },
    see(info) {
      this.$router.push({
        path: '/sysControl/roleAdd',
        query: {
          id: info.row.id,
          isEdit: false
        }
      })
    },
    edit() {
      this.$router.push({
        path: '/sysControl/roleAdd',
        query: {
          id: info.row.id,
          isEdit: true
        }
      })
    },
    // 激活
    activation(info) {
      this.changeStatus(info.row.id , '0', '激活成功');
    },
    // 冻结
    thaw(info) {
      this.changeStatus(info.row.id ,'1', '冻结成功');
    },
    changeStatus(id, status, msg) {
      roleModifyStatus({id, status}).then(res => {
        this.$message.success(msg);
        this.init();
      })
    },
    // 删除角色
    del(info) {
      this.$confirm("确认删除？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "info",
        center: true
      }).then(res => {
        roleDelete({ id: info.row.id }).then(val => {
          this.$message.success('删除成功');
          this.page = 1;
          this.init();
        });
      });
    }
  }
};
</script>

<style lang="sass" scoped>

</style>