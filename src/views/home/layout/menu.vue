<!--
 * @Author: your name
 * @Date: 2020-06-06 09:58:11
 * @LastEditTime: 2020-07-08 20:03:56
 * @LastEditors: sueRimn
 * @Description: In User Settings Edit
 * @FilePath: /world-love/src/views/home/layout/menu.vue
--> 
<template>
  <el-aside class="aside srollBar" width="200px">
    <el-menu :default-active="activeIndex" text-color="#5E97CF" active-text-color="#fff" background-color="#222336">
      <template v-for="(key , index) in menuInfo">
        <el-submenu v-if="key.children && key.hasShowChild != false" :index="key.index+''"  :key="`submenu${index}`">
          <template slot="title">
            <i :class="key.icon"></i>
            {{ key.name }}
          </template>
          <el-menu-item-group  v-for="(item , itemIndex) in key.children" :key="`children${itemIndex}`">
            <el-menu-item @click="init(item.index, item.path)" :index="item.index">{{ item.name }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <template v-else>
          <el-menu-item v-if="key.isShow != false" @click="init(key.index, key.path)" :key="`submenu${index}`" :index="key.index+''">
            <i :class="key.icon"></i>
            <span slot="title">{{ key.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  props: {
    menuInfo: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      activeIndex: this.$store.state.menuActive,
    };
  },
  watch: { 
    menuInfo: {
      handler: function(newVal) {
        // if(this.flag) return
        // this.activeIndex = String(newVal[0].index);
        if(newVal.length > 0) {
          const menuActive = localStorage.getItem('menuActive');
          this.init(menuActive || 1, newVal[0].path)
          localStorage.setItem('curHref', newVal[0].path)
        }
        
      },
      deep: true
    },
    '$store.state.menuActive'(newVal) {
      this.activeIndex = newVal;
      localStorage.setItem('menuActive', newVal);
    }
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     const menuActive = localStorage.getItem('menuActive');
  //     this.init(menuActive || 1)
  //   })
  // },
  methods: {
    init(index, path) {
      if(this.menuInfo[index]) {
        console.log(index)
        this.$store.commit('menuActiveChange', String(index))
        this.$router.push(path)
        localStorage.setItem('curHref', path)
      }
    }
  }
};
</script>