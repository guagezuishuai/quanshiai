<template>
  <div class="mechanism">
    <el-dialog title="上级机构选择" :visible.sync="dialogVisible" width="60%">
      <div class="content">
        <div class="searchBox">
          <el-input placeholder="设备类别名称" v-model="customerName">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
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
import {deviceCtegoryList} from '@/api/sys';
export default {
  mixins: [customTablemixins],
  props: {
    checked: Boolean
  },
  data() {
    return {
      dialogVisible: false,
      customerName: "",
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
  methods: {
    init() {
      let params = {
        page: {
          current: this.page,
          size: this.pageSize
        },
        name: this.customerName
      };
      deviceCtegoryList(params).then(res => {
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
      this.customerName = "";
      this.dialogVisible = true;
      this.init();
    }
  }
};
</script>