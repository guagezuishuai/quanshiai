/*
 * @Author: your name
 * @Date: 2020-02-13 21:19:34
 * @LastEditTime: 2020-06-13 16:49:39
 * @LastEditors: sueRimn
 * @Description: In User Settings Edit
 * @FilePath: /world-love/src/main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import appRander from 'app-rander';
Vue.use(appRander);

// import './util/flexible'
Vue.config.productionTip = false;
// 全局的分页的页数
Vue.prototype.PAGESIZE = [8, 15, 20];
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
