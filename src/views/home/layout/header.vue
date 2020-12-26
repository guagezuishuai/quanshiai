<!--
 * @Author: your name
 * @Date: 2020-06-06 09:57:56
 * @LastEditTime: 2020-10-12 17:15:12
 * @LastEditors: sueRimn
 * @Description: In User Settings Edit
 * @FilePath: /world-love/src/views/home/layout/header.vue
--> 
<template>
  <el-container class="header">
     <!-- 最顶端头部 -->
    <el-header height="40px" class="mianHeader">
      <div class="search">
         <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="headerSearch">
        </el-input>
      </div>
      <div class="control">
        <div class="user">
          <i class="el-icon-user"></i>
          <span class="userName">{{ userName }}</span>
        </div>
        <div class="output" @click="loginOut">
          <i class="el-icon-setting"></i>
          <span>退出</span>
        </div>
      </div>
    </el-header>
    <!-- 副标题的头部 -->
    <el-header height="60px" class="subHeader mainbgcolor">
      <div class="sub_left">
        <el-image class="logoAndName" :src="logoAndName"></el-image>
        <div class="platName">全世爱健康监护平台</div>
      </div>
      <div class="sub_right">
        <div class="topMenu">
          <div class="menuItem"
            v-for="(key, index) in tabInfo"
            :key="`tabItem${index}`"
            @click="tabChange(index)"
            :class="activeName === key.name ? 'active' : ''"
          >
            {{ key.name }}
          </div>
        </div>
        <div class="bottomLine"></div>
      </div>
    </el-header>
  </el-container>
</template>

<script>
import logo from '@/assets/imgs/login/LOGO@2x.png';
import logoAndName from '@/assets/imgs/login/logo&name.png';
import tabInfo from '@/util/headerTabInfo.js';
export default {
  data() {
    return {
      logo,
      logoAndName,
      headerSearch: '',
      userName: '张无忌',
      activeName: '',
      tabInfo
    }
  },
  mounted() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.userName = userInfo.employee.name
    // this.tabChange(headerActiveIndex || 1)
  },
  methods: {
    // 头部tab切换并把子集的菜单传输出去
    tabChange(index) {
      // this.$store.commit("menuActiveChange", String(1));
      this.activeName = this.tabInfo[index].name;
      localStorage.setItem('headerActiveIndex', index);
      this.$emit('headerMenuChange', this.tabInfo[index].children);
    },
    loginOut() {
      localStorage.clear();
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  .mianHeader{
    background-color: #273359;
    color: #fff;
    display: flex;
    justify-content: flex-end;
    .control{
      display: flex;
      align-items: center;
      width: 300px;
      margin-left: 400px;
      .user , .output{
        flex: 1;
      }
      .output:hover{
        cursor: pointer;
      }
    }
  }
  .subHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .sub_left{
      display: flex;
      align-items: center;
      font-size: 28px;
      color: #fff;
      font-weight: 700;
      .logoAndName{
        height: 50px;
        /deep/.el-image__inner{
          width: auto!important;
        }
      }
      .platName{
        margin-left: 40px;
      }
    }
    .sub_right{
      height: 100%;
      position: relative;
      .topMenu{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #273359;
        height: 100%;
        :hover{
          cursor: pointer;
        }
        .active{
          border-bottom: 5px solid #273359;
        }
        .menuItem{
          line-height: 60px;
          margin-right: 20px;
          height: calc(100% - 5px);
          
          :last-child {
            margin: 0;
          }
        }
      }
      // .bottomLine{
      //   width: 100%;
      // }
    }
  }
}
</style>