// 公共模块的接口
import http from './index';
/**
 * @method: 上传文件
 * @desc: /base/api/fileupload/upload
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const upload = (params) => {
  return http.post('/base/api/fileupload/upload', params, { 'Content-Type': 'multipart/form-data' })
}