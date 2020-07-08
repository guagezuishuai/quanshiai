<template>
  <div class="mechanism">
    <el-dialog
      title="所属机构"
      :visible.sync="dialogVisible"
      width="60%">
      <div class="content">
        <div class="searchBox">
          <el-input
            placeholder="请输入机构名称"
            v-model="orgName">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
        <cusTomTable :tableData="tableData" :tableInfo="tableInfo" @rowDblclick="rowDblclick" :sortNumIsShow="true">
          <!-- <el-table-column @rowClick="rowClick" type="selection" width="55"></el-table-column> -->
        </cusTomTable>
      </div>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span> -->
    </el-dialog>
  </div>
</template>

<script>
import cusTomTable from '@/components/cusTomTable'
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
      orgName: '',
      tableData: [
        {
          orgName: '1',
          orgType: '2',
          orgLevel: '3',
          preOrg: '4'
        }
      ],
      tableInfo: [
        {
          label: "机构名称",
          prop: "orgName",
          width: ""
        },
        {
          label: "机构类型",
          prop: "orgType",
          width: ""
        },
        {
          label: "机构级别",
          prop: "orgLevel",
          width: ""
        },
        {
          label: "上级机构",
          prop: "preOrg",
          width: ""
        }
      ]
    }
  },
  methods: {
    rowDblclick(row, column, event) {
      this.dialogVisible = false;
      this.$emit('rowDblclick', row, column, event);
    }
  }
}
</script>