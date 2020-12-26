import http from './index';

/**
 * @method: POST
 * @desc: 用户注册  /user/login http://39.101.220.101:8093
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const login = (params) => {
  return http.post('/authority/api/account/acountLogin', params)
}
/**
 * @method: 检查账号是否已经存在
 * @desc: /authority/api/account/checkAccount
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const checkAccount = (params) => {
  return http.post('/authority/api/account/checkAccount', params)
}