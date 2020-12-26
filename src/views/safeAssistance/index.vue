<template>
  <div class="safeAssistance">
    <!-- 紧急报警 -->
    <div class="warning">
      <div class="title">
        紧急报警
        <div class="opretion">全屏展示</div>
      </div>
      <div class="content">
        <template v-for="(key, index) in personInfo">
          <card class="card" :key="`person${index}`" :personInfo="key"></card>
        </template>
      </div>
    </div>
    <!-- 报警列表 -->
    <div class="warningList">
      <div class="title">
        报警列表
        <div class="opretion">查看报警记录</div>
      </div>
      <div class="content">
        <app-form ref="form" :dataInfo="dataInfo"></app-form>
        <div>
          <el-button>查询</el-button>
        </div>
        <cusTomTable
          style="width: 100%"
          :tableData="tableData"
          :tableInfo="tableInfo"
          :page="page"
          :pageSize="pageSize"
          :count="count"
          :sortNumIsShow="true"
        >
          <template slot="healthInfo" slot-scope="scope">
            <el-button>查看</el-button>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="toSee(scope.$index, scope.row)"
              style="margin-bottom: 10px"
            >查看</el-button>
            <el-button size="mini" type="primary" @click="toEdit(scope.$index, scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="toDelet(scope.$index, scope.row)">删除</el-button>
          </template>
        </cusTomTable>
      </div>
    </div>
    <!-- 定位监测 -->
    <div class="positionInfo">
      <div class="title">定位监测</div>
      <div class="content">
        <amap></amap>
      </div>
    </div>
    <!-- 安防监控 -->
    <div class="safe">
      <div class="title">安防监控</div>
    </div>
  </div>
</template>

<script>
import card from "./indexCom/card";
import customTableMixins from "@/minxins/customTable.js";
import amap from '@/components/amap'
export default {
  name: "safeAssistance",
  mixins: [customTableMixins],
  components: {
    card,
    amap
  },
  data() {
    return {
      personInfo: [
        {
          status: "报警中",
          avatar:
            "https://d1icd6shlvmxi6.cloudfront.net/gsc/W0VZTC/4e/9f/43/4e9f43db6c04429498254acc6a7d44a0/images/%E5%AE%89%E5%85%A8%E6%95%91%E5%8A%A9%E9%A6%96%E9%A1%B5/u35.jpg?token=c83be8c6ae57bf11ab12997afefabc6733e9ce03f3bf771619296d1a0a996779",
          name: "钱老二",
          sex: "男",
          age: "56"
        },
        {
          status: "报警中",
          avatar:
            "https://d1icd6shlvmxi6.cloudfront.net/gsc/W0VZTC/4e/9f/43/4e9f43db6c04429498254acc6a7d44a0/images/%E5%AE%89%E5%85%A8%E6%95%91%E5%8A%A9%E9%A6%96%E9%A1%B5/u35.jpg?token=c83be8c6ae57bf11ab12997afefabc6733e9ce03f3bf771619296d1a0a996779",
          name: "钱老二",
          sex: "男",
          age: "56"
        },
        {
          status: "处理中",
          avatar:
            "https://d1icd6shlvmxi6.cloudfront.net/gsc/W0VZTC/4e/9f/43/4e9f43db6c04429498254acc6a7d44a0/images/%E5%AE%89%E5%85%A8%E6%95%91%E5%8A%A9%E9%A6%96%E9%A1%B5/u35.jpg?token=c83be8c6ae57bf11ab12997afefabc6733e9ce03f3bf771619296d1a0a996779",
          name: "钱老二",
          sex: "男",
          age: "56"
        },
        {
          status: "处理中",
          avatar:
            "https://d1icd6shlvmxi6.cloudfront.net/gsc/W0VZTC/4e/9f/43/4e9f43db6c04429498254acc6a7d44a0/images/%E5%AE%89%E5%85%A8%E6%95%91%E5%8A%A9%E9%A6%96%E9%A1%B5/u35.jpg?token=c83be8c6ae57bf11ab12997afefabc6733e9ce03f3bf771619296d1a0a996779",
          name: "钱老二",
          sex: "男",
          age: "56"
        },
        {
          status: "处理完成",
          avatar:
            "https://d1icd6shlvmxi6.cloudfront.net/gsc/W0VZTC/4e/9f/43/4e9f43db6c04429498254acc6a7d44a0/images/%E5%AE%89%E5%85%A8%E6%95%91%E5%8A%A9%E9%A6%96%E9%A1%B5/u35.jpg?token=c83be8c6ae57bf11ab12997afefabc6733e9ce03f3bf771619296d1a0a996779",
          name: "钱老二",
          sex: "男",
          age: "56"
        },
        {
          status: "处理完成",
          avatar:
            "https://d1icd6shlvmxi6.cloudfront.net/gsc/W0VZTC/4e/9f/43/4e9f43db6c04429498254acc6a7d44a0/images/%E5%AE%89%E5%85%A8%E6%95%91%E5%8A%A9%E9%A6%96%E9%A1%B5/u35.jpg?token=c83be8c6ae57bf11ab12997afefabc6733e9ce03f3bf771619296d1a0a996779",
          name: "钱老二",
          sex: "男",
          age: "56"
        },
        {},
        {}
      ],
      dataInfo: {
        inline: true, // 表单组件的排列方式
        labelPosition: "left", // top  left 表单label的位置
        labelWidth: "80px",
        components: [
          {
            type: "input",
            props: "userNumber",
            placeholder: "请输入客户编号",
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
            placeholder: "请输入客户编号",
            label: "身份证号",
            size: "small",
            auther: {
              see: true,
              write: true
            }
          }
        ]
      },
      tableInfo: [
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
          label: "风险程度",
          prop: "orgName",
          width: ""
        },
        {
          label: "报警时间",
          prop: "orgName",
          width: ""
        },
        {
          label: "报警次数",
          prop: "orgName",
          width: ""
        },
        {
          label: "报警方式",
          prop: "orgName",
          width: ""
        },
        {
          label: "健康信息",
          prop: "healthInfo",
          width: "",
          cusTomContent: true
        },
        {
          label: "处理结果",
          prop: "orgName",
          width: ""
        }
      ]
    };
  },
  mounted() {
    this.tableData.push({ orgName: 1 });
  }
};
</script>

<style lang="scss" scoped>
.safeAssistance {
  display: flex;
  flex-wrap: wrap;
  .title {
    font-size: 24px;
    padding: 10px 0;
    text-align: center;
    background-color: #c9edfd;
    text-align: center;
    position: relative;
    color: #273359;
    .opretion {
      position: absolute;
      right: 20px;
      top: 15px;
      font-size: 16px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .warning {
    width: calc(45% - 20px);
    margin-right: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    .content {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
    }
    .card {
      width: 25%;
    }
  }
  .warningList {
    width: 55%;
    margin-bottom: 20px;
    background-color: #fff;
    .content {
      display: flex;
      flex-wrap: wrap;
      padding: 10px 20px;
    }
  }
  .positionInfo{
    width: calc(60% - 10px);
    margin-right: 20px;
    .content{
      background-color: #fff;
      padding: 10px 20px;
    }
  }
  .safe{
    width: calc(40% - 10px);
  }
}
</style>