<template>
  <div class="personInfobox">
    <div class="top">
      <div class="search">
        <div class="label">客户姓名</div>
        <div class="content" @click="selectUser">
          <el-input size="small" readonly placeholder="客户姓名"></el-input>
        </div>
      </div>
      <div class="baseInfo">
        <div class="img">
          <el-image></el-image>
        </div>
        <div class="info">
          <div class="infoItem" v-for="(key, index) in baseInfo" :key="index">
            <div class="label">{{ key.name }}：{{ key.val || '--' }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="btns">
        <el-button class="btn">即时健康检测</el-button>
        <span class="title">最新数据</span>
      </div>
      <!-- <cusTomTable :tableInfo="tableInfo" :tableData="tableData" :isShowPagination="false"></cusTomTable> -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column align="center" label="指标" prop="index"></el-table-column>
        <el-table-column align="center" label="值" prop="val"></el-table-column>
        <el-table-column align="center" label="值状态" prop="valState">
          <template slot-scope="scope">
            <!-- <el-popover trigger="hover" placement="top"> -->
              <el-image class="img" :src="imgObj[scope.row.valState]"></el-image>
            <!-- </el-popover> -->
          </template>
        </el-table-column>
        <el-table-column align="center" label="上传时间" width="150px" prop="time"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import cusTomTable from "@/components/cusTomTable.vue";
export default {
  components: {
    cusTomTable
  },
  data() {
    return {
      imgObj: {
        0: require('../../../assets/imgs/home/arrowTop.png'),
        1: require('../../../assets/imgs/home/arrowDown.png'),
        2: require('../../../assets/imgs/home/rectBlue.png'),
        3: require('../../../assets/imgs/home/rectRed.png'),
      },
      baseInfo: [
        {
          name: "姓名",
          key: "name",
          val: "王总"
        },
        {
          name: "身高",
          key: "height",
          val: ""
        },
        {
          name: "性别",
          key: "sex",
          val: ""
        },
        {
          name: "体重",
          key: "weight",
          val: ""
        },
        {
          name: "年龄",
          key: "age",
          val: ""
        },
        {
          name: "电话",
          key: "tel",
          val: ""
        }
      ],
      tableInfo: [
        {
          label: "指标",
          prop: "index",
          width: ""
        },
        {
          label: "值",
          prop: "val",
          width: ""
        },
        {
          label: "值状态",
          prop: "valState",
          width: ""
        },
        {
          label: "上传时间",
          prop: "time",
          width: ""
        }
      ],
      tableData: [
        {
          index: "心率",
          val: "128bmp",
          valState: 0,
          time: "2020-10-10 12:23"
        },
        {
          index: "心率",
          val: "128bmp",
          valState: 1,
          time: "2020-10-10 12:23"
        },
        {
          index: "心率",
          val: "128bmp",
          valState: 2,
          time: "2020-10-10 12:23"
        },
        {
          index: "心率",
          val: "128bmp",
          valState: 3,
          time: "2020-10-10 12:23"
        },
        {
          index: "心率",
          val: "128bmp",
          valState: 3,
          time: "2020-10-10 12:23"
        },
        {
          index: "心率",
          val: "128bmp",
          valState: 3,
          time: "2020-10-10 12:23"
        },
        {
          index: "心率",
          val: "128bmp",
          valState: 3,
          time: "2020-10-10 12:23"
        }
      ]
    };
  },
  methods: {
    selectUser() {}
  }
};
</script>

<style lang="scss" scoped>
.top {
  background-color: #fff;
  padding: 10px;
  margin-bottom: 5px;
}
.search {
  display: flex;
  align-items: center;
  width: 100%;
  .label {
    width: 80px;
  }
  .content {
    flex: 1;
  }
}
.baseInfo {
  margin-top: 15px;
  display: flex;
  .img {
    width: 90px;
  }
  .info {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    .infoItem {
      width: 50%;
      line-height: 30px;
    }
  }
}
.bottom {
  background-color: #fff;
  padding: 20px 30px;
  .btns {
    margin-bottom: 10px;
    .btn {
      background-color: #2bb2e7;
      color: #fff;
      margin-right: 15px;
    }
    .title {
      color: #273359;
      font-size: 18px;
    }
    
  }
  .img{
      width: 17px;
    }
}
</style>