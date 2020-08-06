import axios from "axios";
import { Message, Loading } from "element-ui";
import { paramsHistory } from "@/util/requestTool";
var instance = axios.create({
  baseURL: process.env.VUE_APP_API_YUN_ROOT
});
// 缓存参数的数据集合
let paramsCatchObj = {};
instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

// 请求返回时 允许携带cookies
instance.defaults.withCredentials = true;

//请求加 loading
let loading; //定义loading变量

function startLoading() {
  //使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: "加载中……",
    background: "rgba(255, 255, 255, 0.4)"
  });
}

function endLoading() {
  //使用Element loading-close 方法
  loading.close();
}
//那么 showFullScreenLoading() tryHideFullScreenLoading() 要干的事儿就是将同一时刻的请求合并。
//声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
//调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
let needLoadingRequestCount = 0;
export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading();
  }
  needLoadingRequestCount++;
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading();
  }
}
// loading结束

// 缓存参数的方法

// 请求拦截器
instance.interceptors.request.use(
  async config => {
    showFullScreenLoading();
    paramsHistory(config, paramsCatchObj);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// 响应拦截器
instance.interceptors.response.use(
  function(res) {
    if (res.status - 0 === 200) {
      tryHideFullScreenLoading();
      // 登录失效后跳转到登录页面
      if (res.data.ret == "-101") {
        Message({
          message: res.data.msg,
          type: "warning"
        });
        return Promise.reject(res.data.msg);
      }
      return res.data;
    }
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default instance;
