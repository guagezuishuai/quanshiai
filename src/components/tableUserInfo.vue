<template>
  <div class="mechanism">
    <el-dialog title="所属机构" :visible.sync="dialogVisible" width="60%">
      <div class="content">
        <div class="searchBox">
          <el-input placeholder="客户姓名" v-model="customerName">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
        <cusTomTable
          :tableData="tableData"
          :tableInfo="tableInfo"
          :page="page"
          :pageSize="pageSize"
          @rowDblclick="rowDblclick"
          :sortNumIsShow="true"
        ></cusTomTable>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import cusTomTable from "@/components/cusTomTable";
import { customerList } from "@/api/customer.js";
export default {
  components: {
    cusTomTable
  },
  props: {
    checked: Boolean
  },
  data() {
    return {
      dialogVisible: false,
      customerName: "",
      count: 0,
      page: 1,
      pageSize: 10,
      tableData: [],
      tableInfo: [
        {
          label: "姓名",
          prop: "customerName",
          width: ""
        },
        {
          label: "身份证号",
          prop: "customerCard",
          width: ""
        },
        {
          label: "所属机构",
          prop: "customerOrg",
          width: ""
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
        customerName: this.customerName
      };
      customerList(params).then(res => {
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
      this.orgName = "";
      this.dialogVisible = true;
      this.init();
    }
  }
};
</script>