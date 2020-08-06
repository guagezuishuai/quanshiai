/*
 * @Author: your name
 * @Date: 2020-02-13 21:19:34
 * @LastEditTime: 2020-07-12 14:49:51
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
Vue.use(ElementUI, {size: 'small'});

import appRander from 'app-rander';
Vue.use(appRander);

// import './util/flexible'
Vue.config.productionTip = false;
// 全局的分页的页数
Vue.prototype.PAGESIZE = [8, 15, 20];
Vue.prototype.SWITCHONCOLOR = '#35D1CF';
Vue.prototype.SWITCHOFFCOLOR = '#E4E9E9';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
