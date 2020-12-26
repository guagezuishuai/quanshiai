<template>
  <div class="monitor">
    <div class="health">
      <div class="title">健康监测</div>
      <health></health>
    </div>
    <div class="personInfo">
      <div class="title">个人信息</div>
      <personInfo></personInfo>
    </div>
    <div class="table">
      <app-form ref="form" :dataInfo="dataInfo" >
        <el-form-item slot="footer">
            <el-button size="small"> 搜索 </el-button>
          </el-form-item>
      </app-form>
      <cusTomTable
        :tableData="tableData"
        :tableInfo="tableInfo"
        :pageSize="pageSize"
        :sortNumIsShow="true"
      >
        <template slot="AI" slot-scope="scope">
          <el-button @click="seeAI(scope)">查看</el-button>
        </template>
        <template slot="dangan" slot-scope="scope">
          <el-button @click="seeAI(scope)">查看</el-button>
        </template>
        <template slot="device" slot-scope="scope">
          <el-button @click="seeAI(scope)">查看</el-button>
        </template>
        <template slot="info" slot-scope="scope">
          <el-button @click="seeAI(scope)">查看</el-button>
        </template>
      </cusTomTable>
    </div>
  </div>
</template>

<script>
import health from "../monitorHome/com/health";
import personInfo from "../monitorHome/com/personInfo";
import customTablemixins from "@/minxins/customTable";
export default {
  name: "monitor",
  mixins: [customTablemixins],
  components: {
    health,
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
        },
        {
          label: "AI健康报告",
          prop: "AI",
          width: "",
          cusTomContent: true
        },
        {
          label: "健康档案",
          prop: "dangan",
          width: "",
          cusTomContent: true
        },
        {
          label: "设备管理",
          prop: "device",
          width: "",
          cusTomContent: true
        },
        {
          label: "客户信息",
          prop: "info",
          width: "",
          cusTomContent: true
        }
      ]
    }
  },
  mounted() {
    this.tableData = [{orgName: 1}]
  },
  methods: {
    seeAI(rowInfo) {

    }
  }
};
</script>

<style lang="scss" scoped>
.monitor {
  display: flex;
  flex-wrap: wrap;
  .title {
    font-size: 24px;
    padding: 10px 0;
    text-align: center;
    background-color: #c9edfd;
  }
  .health {
    width: calc(65% - 20px);
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .personInfo {
    width: 35%;
  }
  .positionInfo {
    width: calc(60% - 10px);
    margin-right: 20px;
    .content {
      background-color: #fff;
      padding: 10px 20px;
    }
  }
  .safe {
    width: calc(40% - 10px);
  }
}
.table{
  width: 100%;
  background-color: #fff;
  padding: 15px;
}
/deep/ .el-form-item__content, .el-date-editor{
  width: 192px;
}

</style>