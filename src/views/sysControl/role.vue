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
  name: 'role',
  mixins: [customTablemixins],
  data() {
    return {
      tableData: [
        {
          orgName: "1"
        }
      ],
      tableInfo: [
        {
          label: "角色类型",
          prop: "orgName"
        },
        {
          label: "角色属性",
          prop: "orgName"
        },
        {
          label: "角色描述",
          prop: "orgName"
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>