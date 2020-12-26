<template>
  <div class="normalPage">
    <div class="btn">
      <el-button>新增字典</el-button>
      <el-button>批量删除字典</el-button>
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
            <el-button class="btn_link btnEdit" @click="edit(scope)">修改</el-button>
            <el-button class="btn_link btndel" @click="del(scope)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </cusTomTable>
  </div>
</template>

<script>
import customTablemixins from "@/minxins/customTable";
import {treeListPage} from '@/api/sys';
export default {
  name: 'normalPage',
  mixins: [customTablemixins],
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      tableData: [],
      tableInfo: [
        {
          label: "字典值",
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
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const {pid, layer, setId} = this.info;
      const params = {
        pid,
        layer,
        setId,
        page: {
          size: this.pageSize,
          current: this.page
        }
      }
      treeListPage(params).then(res => {

      })
    }
  }
}
</script>