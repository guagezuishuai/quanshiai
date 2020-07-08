<template>
  <el-container class="home">
    <el-header height="100px" style=";padding:0;">
      <!-- 头部组件 -->
      <pageHeader @headerMenuChange="headerMenuChange"></pageHeader>
    </el-header>
    <!-- 内容部分 -->
    <el-container class="content">
      <!-- 左侧菜单 -->
      <leftMenu :menuInfo="menuInfo"></leftMenu>
      <!-- 右侧内容 -->
      <section class="contentView">
        <router-view />
      </section>
    </el-container>
  </el-container>
</template>

<script>
import pageHeader from './layout/header';
import leftMenu from './layout/menu'
export default {
  components: {
    pageHeader,
    leftMenu
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item),
      menuInfo: []
    };
  },
  methods: {
    headerMenuChange(leftMenuInfo) {
      this.menuInfo = leftMenuInfo;
    }
  }
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  .el-aside {
    color: #333;
    background-color: #222336;
    height: calc(100vh - 100px);
    overflow-y: auto;
    .el-menu-item {
      min-width: inherit;
    }
  }
  .contentView {
    padding: 25px;
    height: calc(100vh - 150px);
    width: 100%;
    overflow-y: auto;
    background-color: rgba(202, 237, 253, .3);
  }
}
</style>
