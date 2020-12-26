import axios from "axios";
import { Message, Loading } from "element-ui";
import { paramsHistory } from "@/util/requestTool";
var instance = axios.create({
  baseURL: process.env.VUE_APP_API_ROOT
});
// 缓存参数的数据集合
let paramsCatchObj = {};
instance.defaults.headers.post["Content-Type"] =
  "application/json;charset=UTF-8";
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
    config.headers['token'] = localStorage.getItem('token');
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const errorMessage = {
  1001: '接口认证失败',
  1002: '登录过期',
  1003: '缺失参数'
}


// 响应拦截器
instance.interceptors.response.use(
  function(res) {
    if (res.status - 0 === 200) {
      tryHideFullScreenLoading();
      
      if(res.data.errcode === 0) {
        return res.data;
      } else {
        // 登录失效后跳转到登录页面
        if (res.data.errcode == 1002) {
          Message({
            message: '登录过期',
            type: "warning"
          });
          window.location.replace(location.origin+location.pathname+'#/login');
          return false
        }
        const proxy = new Proxy(errorMessage, {
          get(target,key) {
            const value = target[key]
            return value || res.data.errmsg
          }
        })
        Message({
          message: proxy[res.data.errcode],
          type: "warning"
        });
        return Promise.reject();
      }
    }
  },
  function(error) {
    Message({
      message: '接口请求出错了！！！',
      type: "warning"
    });
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default instance;
