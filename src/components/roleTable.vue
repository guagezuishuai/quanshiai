<template>
  <div class="mechanism">
    <el-dialog title="角色选择" :visible.sync="dialogVisible" width="60%">
      <div class="content">
        <cusTomTable
          :tableData="tableData"
          :tableInfo="tableInfo"
          :page="page"
          :pageSize="pageSize"
          :count="count"
          @rowDblclick="rowDblclick"
          :sortNumIsShow="true"
        ></cusTomTable>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import customTablemixins from "@/minxins/customTable";
import {roleList} from '@/api/sys';
export default {
  mixins: [customTablemixins],
  data() {
    return {
      dialogVisible: false,
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
  methods: {
    init() {
      let params = {
        page: {
          current: this.page,
          size: this.pageSize
        },
      };
      roleList(params).then(res => {
        this.tableData = res.data.records;
      });
    },
    rowDblclick(row, column, event) {
      this.dialogVisible = false;
      this.$emit("rowDblclick", row, column, event);
    },
    show() {
      this.page = 1;
      this.pageSize = 10;
      this.dialogVisible = true;
      this.init();
    }
  }
};
</script>