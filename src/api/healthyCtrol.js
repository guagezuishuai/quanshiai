import request from './index';
export const GetPubcolumnList = (params) => {
  return http.post('/mypubcolumn/list', params)
}

//电台标签
export const LabelsRadio = (params) => {
  return http.get('/radio/labels', { params })
}

/**
 * @method: GET
 * @desc: health/step  健康监测获取指定时间内的步数接口
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const healthStep = (params) => {
  return http.get('health/step', { params })
}