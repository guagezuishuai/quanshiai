import http from './index';

/**
 * @method: 用户信息列表
 * @desc: customer/api/customer/listPage  
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const customerList = (params) => {
  return http.post('/customer/api/customer/listPage', params)
}