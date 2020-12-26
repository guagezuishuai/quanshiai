<template>
  <el-container class="home">
    <el-header height="100px" style=";padding:0;">
      <!-- 头部组件 -->
      <pageHeader ref="pageHeader" @headerMenuChange="headerMenuChange"></pageHeader>
    </el-header>
    <!-- 内容部分 -->
    <el-container class="content">
      <!-- 左侧菜单 -->
      <leftMenu ref="leftMenu" :menuInfo="menuInfo"></leftMenu>
      <!-- 右侧内容 -->
      <section class="contentView">
        <router-view />
      </section>
    </el-container>
  </el-container>
</template>

<script>
import pageHeader from './layout/header';
import leftMenu from './layout/menu';
import tabInfo from '@/util/headerTabInfo.js';
export default {
  components: {
    pageHeader,
    leftMenu
  },
  data() {
    return {
      menuInfo: []
    };
  },
  watch: {
    '$route'(newVal) {
      for (let i = 0; i < this.menuInfo.length; i++) {
        if(this.menuInfo[i].path === newVal.path) {
          this.$refs.leftMenu.$refs.menu.activeIndex = this.menuInfo[i].index+'';
          break;
        }
      }
    }
  },
  mounted() {
    const headerActiveIndex = localStorage.getItem('headerActiveIndex');
    this.$refs.pageHeader.activeName = tabInfo[headerActiveIndex].name;
    this.menuInfo = tabInfo[headerActiveIndex].children || this.tabInfo[0].children;
    this.$refs.leftMenu.$refs.menu.activeIndex = localStorage.getItem('menuActiveIndex') || '1';
  },
  methods: {
    headerMenuChange(leftMenuInfo) {
      this.menuInfo = leftMenuInfo;
      // this.$refs.leftMenu.activeIndex = '1';
      this.$refs.leftMenu.$refs.menu.activeIndex = '1';
      this.$router.push(leftMenuInfo[0].path)
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
