<template>
  <div @click.stop="menuShow = false">
    <autherMenu ref="autherMenu" @rightCilck="rightCilck">
      <div class="title" slot="title">权限管理</div>
    </autherMenu>
    <div class="menu" :style="menuPosition" v-show="menuShow">
      <div
        class="menuItem"
        :style="!autherArr.includes(index) && disabled"
        @click.stop="editAuther(key)"
        v-for="(key,index) in menuInfo"
        :key="`item${index}`"
      >{{ key.name }}</div>
    </div>
    <el-dialog
      :title="dialogObj.title"
      :visible.sync="dialogVisible"
      v-if="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div class="content">
        <div class="item">
          <div class="label">{{ dialogObj.name }}</div>
          <el-input v-model="dialogObj.nameVal"></el-input>
        </div>
        <div class="item">
          <div class="label">{{ dialogObj.key }}</div>
          <el-input v-model="dialogObj.keyVal"></el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="排序修改"
      :visible.sync="dialogSort"
      width="30%">
      <el-input v-model="sortNum" placeholder="请输入升序或降序的数字"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="sortConfirm = false;">取 消</el-button>
        <el-button type="primary" @click="sortConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import autherMenu from "./auther/index";
import {
  menuList,
  menuSaveOrUpdate,
  menuDelete,
  menuSelectById,
  menuUpdateBatchById
} from "@/api/sys";
export default {
  components: {
    autherMenu
  },
  data() {
    return {
      dialogVisible: false,
      dialogSort: false,
      menuShow: false,
      sortNum: '',
      left: 0,
      top: 0,
      autherArr: [0, 1, 2, 4, 6, 7],
      id: "",
      pid: "",
      dialogObj: {
        title: '',
        name: '',
        nameVal: '',
        key: '',
        keyVal: '',
        event: null,
        eventType: null,
        orderBy: null,
        isAdd: false
      },
      menuInfo: [
        {
          name: "新增页面",
          disabled: false,
          type: "addPage",
          eventType: "0",
        },
        {
          name: "新增子页面",
          disabled: false,
          type: "addChildPage",
          eventType: "0",
        },
        {
          name: "新增权限项",
          disabled: false,
          type: "addPage",
          eventType: "0"
        },
        {
          name: "新增子权限",
          disabled: false,
          type: "addChildPage",
          eventType: "1",
        },
        {
          name: "修改页面",
          disabled: false,
          type: "editPage",
          eventType: "0"
        },
        {
          name: "修改权限项",
          disabled: false,
          type: "editPage",
          eventType: "1"
        },
        {
          name: "删除页面",
          disabled: false,
          type: "deletePage",
          eventType: "0"
        },
        {
          name: "删除权限项",
          disabled: false,
          type: "deletePage",
          eventType: "1"
        },
        {
          name: "升序",
          disabled: false,
          type: "changeMenuOrder"
        },
        {
          name: "降序",
          disabled: false,
          type: "changeMenuOrder"
        }
      ]
    };
  },
  computed: {
    menuPosition() {
      return `left: ${this.left}px; top: ${this.top}px`;
    },
    disabled() {
      return "color: #ccc;";
    }
  },
  mounted() {
    this.$nextTick(() => {
      let content = document.querySelector(".content");
      content.oncontextmenu = ev => {
        return false;
      };
    });
  },
  methods: {
    rightCilck(ev, info, autherKey) {
      const obj = {
        1: [0, 1, 4, 6, 8, 9],
        2: [0, 3, 4, 6, 8],
        3: [2, 5, 7]
      };
      this.id = info.id;
      this.pid = info.pid;
      this.dialogObj.nameVal = info.name;
      this.dialogObj.keyVal = info.mKey;
      this.dialogObj.isAdd = info.name.indexOf('新增') !== -1;
      this.autherArr = obj[autherKey];
      if (this.autherArr.length === 0) return false;
      this.autherArr.forEach(val => {
        this.menuInfo[val].disabled = true;
      });
      this.menuShow = true;
      this.top = ev.y;
      this.left = ev.x;
    },
    editAuther(info) {
      if(!info.disabled) return false;
      this.menuShow = false;
      if(info.name.indexOf('删除') != -1) {
        this.dialogVisible = false;
        this.$confirm("确定删除吗？", "删除", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(res => {
          this.deletePage(info.id);
        })
        return false;
      } else if(info.name.indexOf('序') != -1) {
        this.menuShow = false;
        this.dialogSort = true;
      } else {
        this.dialogVisible = true;
      }
      // this[type](eventType);
      this.dialogObj.title = info.name;
      const pageArr = ['新增页面', '修改页面', '新增子页面'];
      const autherArr = ['新增权限项', '修改权限项', '新增子权限'];
      const addArr = ['新增页面', '新增权限项', '新增子页面', '新增子权限'];
      if(addArr.includes(info.name)) {
        this.dialogObj.nameVal = '';
        this.dialogObj.keyVal = '';
      }
      if(pageArr.includes(info.name)) {
        this.dialogObj.name = '页面名称';
        this.dialogObj.key = '页面key';
      }
      if(autherArr.includes(info.name)) {
        this.dialogObj.name = '权限名称';
        this.dialogObj.key = '权限key';
      }
      this.dialogObj.event = this[info.type];
      this.dialogObj.eventType = info.eventType;
      this.dialogObj.orderBy = info.orderBy;
      this.dialogObj.pid = info.pid;
    },
    handleClose() {
      this.dialogVisible = false;
      this.id = '';
      this.pid = '';
      this.dialogObj = {
        title: '',
        name: '',
        nameVal: '',
        key: '',
        keyVal: '',
        event: null,
        eventType: null,
        orderBy: null,
        isAdd: false
      }
    },
    confirm() {
      this.dialogVisible = false;
      this.dialogObj['event'](this.dialogObj.eventType);
    },
    // 新增/修改 页面/权限项
    addPage(eventType) {
      const params = {
        mKey: this.dialogObj.keyVal, // 权限key
        name: this.dialogObj.nameVal, // 权限名称
        orderBy: this.dialogObj.orderBy || 0, // 排序字段
        pid: this.pid || 0, // 父级节点
        // id: this.id,
        type: eventType // 0 菜单 1 按钮
      };
      // 判断是否是新增，新增的没有id这个参数
      this.dialogObj.isAdd && ( delete params.id);
      this.request(params);
    },
    addChildPage(eventType) {
      const params = {
        mKey: this.dialogObj.keyVal, // 权限key
        name: this.dialogObj.nameVal, // 权限名称
        orderBy: this.dialogObj.orderBy || 0, // 排序字段
        pid: this.id || 0, // 父级节点
        type: eventType // 0 菜单 1 按钮
      };
      // 判断是否是新增，新增的没有id这个参数
      this.dialogObj.isAdd && ( delete params.id);
      this.request(params);
    },
    editPage(eventType) {
      const params = {
        mKey: this.dialogObj.keyVal, // 权限key
        name: this.dialogObj.nameVal, // 权限名称
        orderBy: this.dialogObj.orderBy || 0, // 排序字段
        pid: this.pid, // 父级节点
        id: this.id,
        type: eventType // 0 菜单 1 按钮
      };
      this.request(params);
    },
    // 因为所有的新增修改都是同一个接口，这里就提出来了
    request(params) {
      if(this.dialogObj.nameVal === '') {
        this.$message.warning(`${this.dialogObj.name}不得为空`);
        return false;
      }
      if(this.dialogObj.keyVal === '') {
        this.$message.warning(`${this.dialogObj.key}不得为空`)
        return false;
      }
      menuSaveOrUpdate(params).then(res => {
        this.$message.success('操作成功');
        this.$refs.autherMenu.init()
      })
    },
    // 删除页面/权限项
    deletePage() {
      menuDelete({id: this.id}).then(() => {
        this.$message.success('删除成功');
        this.$refs.autherMenu.init()
      });
    },
    // 升序/降序
    changeMenuOrder() {
      this.dialogSort = true;
      this.sortNum = '';
    },
    sortConfirm() {
      const params = {
        id: this.id,
        orderBy: this.sortNum
      }
      menuUpdateBatchById([params]).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  width: 200px;
  position: absolute;
  background-color: #fff;
  line-height: 35px;
  text-align: center;
  z-index: 9;
  .menuItem {
    border: 1px solid #000;
  }
}
.content{
  
  .item{
    display: flex;
    align-items: center;
    padding: 15px 0;
    .label{
      width: 80px;
    }
  }
}
</style>