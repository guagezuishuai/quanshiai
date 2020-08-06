/**
 * @description 缓存参数的一个方法
 * @param {obj} config 拦截器的基本配置
 */
export const paramsHistory = (config, paramsCatchObj) => {
  let fullPath = config.url.split("?")[0];
  let params;
  if (config.method === "post") {
    if (config.data) {
      params = config.data === "" ? {} : config.data;
      if (params.isPageNation) {
        paramsCatchObj[fullPath].page = params.page;
        paramsCatchObj[fullPath].pageSize = params.pageSize;
        config.data = paramsCatchObj[fullPath];
      }
      if (params.isCatch) {
        paramsCatchObj[fullPath] = JSON.parse(JSON.stringify(params));
      }
    }
  } else {
    if (config.params) {
      params = config.params;
      if (params.isPageNation) {
        paramsCatchObj[fullPath].page = config.params.page;
        paramsCatchObj[fullPath].pageSize = config.params.pageSize;
        config.params = paramsCatchObj[fullPath];
      }
      if (params.isCatch) {
        paramsCatchObj[fullPath] = JSON.parse(JSON.stringify(params));
      }
    }
  }
};
