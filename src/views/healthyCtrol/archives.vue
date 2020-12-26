<template>
  <div class="archives">
    <personInfo></personInfo>
    <!-- 表格内容区域 -->
    <div class="tableBox">
      <app-form ref="form" :dataInfo="dataInfo" >
        <el-form-item slot="footer">
            <el-button size="small"> 搜索 </el-button>
          </el-form-item>
      </app-form>
      <div>
        <cusTomTable
        :tableData="tableData"
        :tableInfo="tableInfo"
        :pageSize="pageSize"
        :sortNumIsShow="true"
      >
        <el-table-column
          slot="operation"
          fixed="right"
          label="操作"
          align="center"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看健康档案</el-button>
          </template>
        </el-table-column>
      </cusTomTable>
      </div>
    </div>
  </div>
</template>

<script>
import customTablemixins from "@/minxins/customTable";
import personInfo from './com/personInfo';
export default {
  name: 'archives',
  mixins: [customTablemixins],
  components: {
    personInfo
  },
  data() {
    return {
      dataInfo: {
        inline: true, // 表单组件的排列方式
        labelPosition: 'left', // top  left 表单label的位置
        labelWidth: '100px',
        components: [
          {
            type: 'input',
            props: 'number',
            placeholder: '请输入客户编号',
            label: '客户编号',
            size: 'small',
            auther: {
              see: true,
              write: true
            },
            value:''
          },
          {
            type: 'input',
            props: 'number',
            placeholder: '请输入姓名',
            label: '姓名',
            size: 'small',
            auther: {
              see: true,
              write: true
            },
            value:''
          },
          {
            type: 'input',
            props: 'number',
            placeholder: '请输入身份证号',
            label: '身份证号',
            size: 'small',
            auther: {
              see: true,
              write: true
            },
            value:''
          },
          {
            type: 'numberRange',
            props: 'number',
            placeholder: ['',''],
            label: '客户年龄',
            size: 'small',
            auther: {
              see: true,
              write: true
            },
            value: ['', '']
          },
          {
            type: 'select',
            prop: 'select',
            label: '性别',
            size: 'small',
            options: [
              {
                label: '男',
                value: 1
              },
              {
                label: '女',
                value: 2
              }
            ],
            valueChange: this.handler, // 选择的值改变的回调
            // 读写权限
            auther: {
              see: true, // 可见
              write: true, // 可写
              read: true // 可读
            },
            value: ''
          },
          {
            type: 'input',
            props: 'number',
            placeholder: '请输入所属机构',
            label: '所属机构',
            size: 'small',
            auther: {
              see: true,
              write: true
            }
          },
        ]
      },
      tableInfo: [
        {
          label: "客户编号",
          prop: "orgName",
          width: ""
        },
        {
          label: "姓名",
          prop: "orgName",
          width: ""
        },
        {
          label: "性别",
          prop: "orgName",
          width: ""
        },
        {
          label: "年龄",
          prop: "orgName",
          width: ""
        },
        {
          label: "身份证号",
          prop: "orgName",
          width: ""
        },
        {
          label: "所属机构",
          prop: "orgName",
          width: ""
        },
        {
          label: "BIM指数",
          prop: "orgName",
          width: ""
        },
        {
          label: "肥胖程度",
          prop: "orgName",
          width: ""
        },
        {
          label: "发病风险",
          prop: "orgName",
          width: ""
        }
      ]
    }
  },
  mounted(){
    this.tableData = [{orgName: 1}]
  },
  methods: {
    handleClick() {
      this.$router.push('/healthyCtrol/archivesDetail')
    }
  }
}
</script>

<style lang="scss" scoped>

.tableBox{
  background-color: #fff;
  padding: 15px;
}
/deep/ .el-form-item__content, .el-date-editor{
  width: 192px;
}
</style>