<template>
  <div class="tree">
    <el-tree
      :highlight-current="true"
      :data="data"
      :props="defaultProps"
      children="child"
      label="name"
      @node-contextmenu="rightClick"
      @node-click="handleNodeClick"
    ></el-tree>

    <!-- 操作菜单 -->
    <div class="menu" :style="menuPosition" v-show="menuShow">
      <div class="menuItem" @click="menuClick(index)" v-for="(key, index) in operationMenu" :key="`menuItem${index}`">
        {{ key.title }}
      </div>
    </div>
    <el-dialog :title="operationMenu[menuIndex].title" @closed="closed" :visible.sync="dialogVisible" width="30%">
      <div class="content">
        <div class="item">
          <div class="label">{{ operationMenu[menuIndex].nameLabel }}</div>
          <el-input v-model="operationMenu[menuIndex].nameVal" ></el-input>
        </div>
        <div class="item">
          <div class="label">{{ operationMenu[menuIndex].keyLabel }}</div>
          <el-input v-model="operationMenu[menuIndex].keyval" ></el-input>
        </div>
        <div class="item">
          <div class="label">{{ operationMenu[menuIndex].sortLabel }}</div>
          <el-input v-model="operationMenu[menuIndex].sortVal" ></el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { treeList, treeSaveOrUpdate, treeDel } from "@/api/sys";
export default {
  name: "tree",
  data() {
    return {
      dialogVisible: false,
      menuShow: false,
      curTreeData: {},
      left:0,
      top:0,
      menuIndex: 0,
      operationMenu: [
        {
          title: '新增字典',
          nameVal: '',
          nameLabel: '字典名称',
          keyval: '',
          keyLabel: 'key值',
          sortVal: '',
          sortLabel: '排序字段'
        },
        {
          title: '修改字典',
          nameVal: '',
          nameLabel: '字典名称',
          keyval: '',
          keyLabel: 'key值',
          sortVal: '',
          sortLabel: '排序字段'
        },
        {
          title: '删除字典',
        },
      ],
      data: [],
      defaultProps: {
        children: "child",
        label: "name"
      }
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
    this.init();
  },
  methods: {
    init() {
      // 左侧树的数据
      treeList().then(res => {
        this.data = res.data;
      });
    },
    handleNodeClick(data) {
      console.log(data);
    },
    // 依次为：event、传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。
    rightClick(event, data, node) {
      console.log( node);
      this.menuShow = true;
      this.left = event.x;
      this.top = event.y;
      this.curTreeData = data;
    },
    menuClick(index) {
      if(index > 3) {
        this.$confirm("是否确认删除？", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(async () => {
          const res = await treeDel({ id: this.curTreeData.id });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        });
        return false;
      }
      this.dialogVisible = true;
      this.menuIndex = index;
      const editArr = [1];
      // 判断是否是编辑状态
      if(editArr.includes(index)) {
        this.operationMenu[this.menuIndex].nameVal = this.curTreeData.name;
        this.operationMenu[this.menuIndex].keyval = this.curTreeData.mKey;
        this.operationMenu[this.menuIndex].sortVal = this.curTreeData.orderBy;
      }
    },
    submit() {
      this.dialogVisible = false;
      const info = this.operationMenu[this.menuIndex];
      const params = {
        orderNo: info.sortVal,
        name: info.nameVal,
        setId: info.keyval,
        pid: this.curTreeData.pid
      }
      // 当是修改的时候参数添加id
      if(info.title.indexOf('新增') === -1) {
        params['id'] = this.curTreeData.id;
      }
      treeSaveOrUpdate(params).then(res => {
        this.$message.success('操作成功');
        this.init();
      })
    },
    closed() {
      this.operationMenu[this.menuIndex].nameVal = '';
      this.operationMenu[this.menuIndex].keyval = '';
      this.operationMenu[this.menuIndex].sortVal = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.content{
  .item{
    display: flex;
    align-items: center;
    .label{
      width: 100px;
      line-height: 60px;
    }
  }
}
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
</style>