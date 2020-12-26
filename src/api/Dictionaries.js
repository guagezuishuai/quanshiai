import request from './index';

/**
 * @method: deviceCtegoryList
 * @desc: /authority/api/deviceCtegory/deviceCtegoryList  设备类别列表
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const deviceCtegoryList = (params) => {
  return request.post('/authority/api/deviceCtegory/deviceCtegoryList', { params })
}