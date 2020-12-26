import Vue from 'vue'
import VueRouter from 'vue-router'
import tabInfo from '@/util/headerTabInfo.js'
Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    redirect: { path: '/login' },
    component: () => import('../views/login'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login'),
  }
]
const routerInfo = tabInfo.map(val => {
  val['component'] = () => import(`../views/home/home.vue`);
  // val['redirect'] = `${val['path']}/index`
  if(val.children && val.children.length != 0) val.children = addComponent(val.children)
  return val;
})
/**
 * @method: addComponent
 * @desc: 对动态生成的路由规则赋予组件的路径【通过递归来循环层级】
 * @param {Array} {routerInfo} 路由的信息，
 * @return: {Array} 返回一个符合路由规则的数据
 */
function addComponent (routerInfo) {
  return routerInfo.map(val => {
    val['component'] = () => import(`../views${val.path}.vue`)
    if(val.children && val.children.length != 0) addComponent(val.children);
    return val;
  })
}

routes = [...routes, ...routerInfo];
// 解决Avoided redundant navigation to current location: 的报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log('to===========', to, 'from============', from)
//   next();
// });

export default router
