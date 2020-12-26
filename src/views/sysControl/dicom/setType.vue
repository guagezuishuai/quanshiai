<template>
  <div>
    <div class="btn">
      <el-button @click="dialogVisible = true">添加设备类别</el-button>
    </div>

    <div class="tableBox">
      <!-- 头部标签 -->
      <ul class="tableHeader">
        <li class="index">序号</li>
        <li class="headItem">
          <div class="headItemTop">设备类别</div>
          <div class="headItemBtom">
            <div class="btomItem">类别名称</div>
            <div class="btomItem">操作</div>
          </div>
        </li>
        <li class="headItem">
          <div class="headItemTop">设备类别</div>
          <div class="headItemBtom">
            <div class="btomItem">类别名称</div>
            <div class="btomItem">操作</div>
          </div>
        </li>
      </ul>
      <!-- 内容部分 -->
      <div class="tableBody">
        <div class="bodyRow" v-for="(key, index) in tableData" :key="key.id">
          <div class="bodyItem">
            <div class="index">{{ index+1 }}</div>
            <div class="groupContent">
              <div class="itemName">{{ key.name }}</div>
              <div class="operation">
                <el-button @click="groupEdit(key)" size="mini">修改</el-button>
                <el-button @click="groupDel(key)" size="mini">删除</el-button>
              </div>
            </div>
            <div class="groupContent" :key="key.id+'a'">
              <div
                class="itemList"
                v-for="(item, index1) in key.deviceModelList"
                :key="`child${index1}`"
              >
                <div class="itemListName">{{ item.name }}</div>
                <div class="itemListOperation">
                  <el-button @click="listEdit(key.id, item)" size="mini">修改</el-button>
                  <el-button @click="listDel(item)" size="mini">删除</el-button>
                </div>
              </div>
              <div class="btn">
                <el-button @click="listAddDeviceType(key)">添加设备型号</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count"
    ></el-pagination>

    <el-dialog title="新增设备类别" :visible.sync="dialogVisible" width="400px" @closed="closed">
      <div class="dialogContent">
        <div class="label">类别名称</div>
        <div class="int">
          <el-input v-model.trim="name" maxlength="10" placeholder="请输入类别名称"></el-input>
          <div>(限10个以内汉字)</div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDeviceType">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="新增设备型号" :visible.sync="visible" width="400px" @closed="vclosed">
      <div class="dialogContent">
        <div class="label">类别名称</div>
        <div class="int">
          <el-input v-model.trim="modelName" maxlength="10" placeholder="请输入类别名称"></el-input>
          <div>(限10个以内汉字)</div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="addDeviceModel">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  deviceCtegoryList,
  saveOrUpdate,
  deviceCtegorydelete,
  saveOrUpdateModel
} from "@/api/sys";
export default {
  data() {
    return {
      dialogVisible: false,
      visible: false,
      page: 1,
      pageSize: 10,
      count: 0,
      tableData: [],
      name: "",
      modelName: "",
      editId: "",
      modelId: "",
      vinfo: {}
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      deviceCtegoryList(
        JSON.stringify({ page: { current: this.page, size: this.pageSize } })
      ).then(res => {
        this.tableData = res.data.records;
        this.count = res.data.total;
      });
    },
    addDeviceType() {
      if (this.name == "") {
        this.$message.warning("请输入类别名称");
      }
      const reg = new RegExp("[\u4e00-\u9fa5]", "g");
      if (reg.test(this.name) || reg.test(this.name)) {
        this.dialogVisible = false;
        saveOrUpdate({ name: this.name, id: this.editId }).then(res => {
          this.$message.success(res.errmsg);
          this.page = 1;
          this.init();
        });
      }
    },
    handleSizeChange(num) {
      this.page = 1;
      this.pageSize = num;
      this.init();
    },
    handleCurrentChange(num) {
      console.log(num);
      this.page = num;
      this.init();
    },
    groupEdit(info) {
      this.editId = info.id;
      this.name = info.name;
      this.dialogVisible = true;
    },
    groupDel(info) {
      this.$confirm("是否确认删除？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await deviceCtegorydelete({ id: info.id });
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    },
    listAddDeviceType(rowInfo) {
      console.log(rowInfo);
      this.editId = rowInfo.id;
      this.visible = true;
    },
    addDeviceModel() {
      if (this.modelName === "") {
        this.$message.warning("请输入型号名称");
        return false;
      }
      const params = {
        deviceCategoryId: this.editId,
        name: this.modelName,
        id: this.modelId
      };
      saveOrUpdateModel(params).then(res => {
        this.$message.success(res.errmsg);
        this.init();
        this.visible = false;
      });
    },
    listEdit(typeId, rowInfo) {
      this.modelId = rowInfo.id;
      this.modelName = rowInfo.name;
      this.editId = typeId;
      this.visible = true;
    },
    listDel() {},
    vclosed() {
      this.modelId = "";
      this.modelName = "";
      this.closed();
    },
    closed() {
      this.editId = "";
      this.name = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 15px 0;
}
.tableBox {
  font-size: 12px;
  .tableHeader {
    display: flex;
    text-align: center;
    margin: 0;
    padding: 0;
    .index {
      width: 50px;
      list-style: none;
      background-color: #ecf9ff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .headItem {
      flex: 1;
      list-style: none;
      text-align: center;
      .headItemTop {
        background-color: #ecf9ff;
        margin-bottom: 4px;
        margin-left: 4px;
        line-height: 23px;
      }
      .headItemBtom {
        display: flex;
        .btomItem {
          flex: 1;
          background-color: #ecf9ff;
          margin-left: 4px;
          line-height: 23px;
        }
      }
    }
  }
  .tableBody {
    .bodyRow {
      display: flex;
      margin-top: 4px;
    }
    .bodyItem {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      .index {
        width: 50px;
        background-color: #f7f9fa;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 4px;
      }
      .groupContent {
        width: calc(50% - 27px);
        display: flex;
        box-sizing: border-box;
        flex-wrap: wrap;
        .itemName {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f7f9fa;
          flex: 1;
          margin-right: 4px;
        }
        .operation {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f7f9fa;
          flex: 1;
          margin-right: 4px;
        }
        .itemList {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 4px;
          .itemListName {
            flex: 1;
            background-color: #f7f9fa;
            text-align: center;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 4px;
          }
          .itemListOperation {
            flex: 1;
            background-color: #f7f9fa;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px 0;
          }
        }
        .btn {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f7f9fa;
          padding: 8px 0;
        }
      }
    }
  }
}
.dialogContent {
  display: flex;
  line-height: 32px;
  .label {
    margin-right: 15px;
  }
  .int {
    flex: 1;
  }
}
</style>