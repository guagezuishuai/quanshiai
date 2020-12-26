import request from './index';

import qs from 'qs'
// ===================== 设备管理 ================

/**
 * @method: 查询设备列表信息【分页】
 * @desc: health/step  健康监测获取指定时间内的步数接口
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const listDevices = (params) => {
  return request.post('/authority/api/device/listDevices', params )
}

/**
 * @method: 查看设备信息
 * @desc: /authority/api/device/selectById
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const deviceSelectById = (params) => {
  return request.post('/authority/api/device/selectById', params )
}

/**
 * @method: 新增设备信息
 * @desc: /authority/api/device/insert
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const deviceInsert = (params) => {
  return request.post('/authority/api/device/insert', params )
}

/**
 * @method: 修改设备状态
 * @desc: /authority/api/device/updateStatus
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const deviceUpdateStatus = (params) => {
  return request.post('/authority/api/device/updateStatus', params )
}

/**
 * @method: 更新设备信息
 * @desc: /authority/api/device/update
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const deviceUpdate = (params) => {
  return request.post('/authority/api/device/update', params )
}

/**
 * @method: 检查设备
 * @desc: authority/api/device/check
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const deviceCheck = (params) => {
  return request.post('/authority/api/device/check', params )
}

/**
 * @method: 设备和客户绑定
 * @desc: /authority/api/device/execBinding 
 * @param {*}
 * @return {*}
 */
export const deviceExecBinding = (params) => {
  return request.post('/authority/api/device/execBinding', params )
}

/**
 * @method: 设备和客户解绑
 * @desc: /authority/api/device/execUnbind 
 * @param {*}
 * @return {*}
 */
export const deviceExecUnbind = (params) => {
  return request.post('/authority/api/device/execUnbind', params )
}

/**
 * @method: 修改电子围栏状态信息接口
 * @desc: /authority/api/fence/updateStatus
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const fenceUpdateStatus = (params) => {
  return request.post('/authority/api/fence/updateStatus', params )
}

/**
 * @method: get  查询字典树型结构
 * @desc: /authority/api/codeItems/treeList
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const treeList = (params) => {
  return request.get('/authority/api/codeItems/treeList', { params })
}
// =============== 字典值相关接口 ===========================
/**
 * @method: 查询正常字典列表信息【分页】
 * @desc: /authority/api/codeItems/listPage
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const treeListPage = (params) => {
  return request.post('/authority/api/codeItems/listPage', params )
}
/**
 * @method: 新增/修改正常字典信息
 * @desc: /authority/api/codeItems/saveOrUpdate
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const treeSaveOrUpdate = (params) => {
  return request.post('/authority/api/codeItems/saveOrUpdate', params )
}
/**
 * @method: 删除正常字典值
 * @desc: http://xx.com/authority/api/codeItems/del
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const treeDel = (params) => {
  return request.post('/authority/api/codeItems/del', params )
}
// =================  设备类别相关 ==================
/**
 * @method: POST
 * @desc: /authority/api/deviceCtegory/deviceCtegoryList  设备列表
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const deviceCtegoryList = (params) => {
  return request.post('/authority/api/deviceCtegory/deviceCtegoryList', params ,qs)
}

/**
 * @method: post
 * @desc: /authority/api/deviceCtegory/saveOrUpdate 设备的更新和新增
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const saveOrUpdate = (params) => {
  return request.post('/authority/api/deviceCtegory/saveOrUpdate', params )
}

/**
 * @method: post
 * @desc: /api/deviceCtegory/delete  设备类别删除
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const deviceCtegorydelete = (params) => {
  return request.post('/authority/api/deviceCtegory/delete', params )
}

/**
 * @method: post
 * @desc: /authority/api/deviceModel/saveOrUpdate
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const saveOrUpdateModel = (params) => {
  return request.post('/authority/api/deviceModel/saveOrUpdate', params )
}

// =============== 查询所有的健康指标异常及报警容限值设定 ===========
/**
 * @method: get
 * @desc: authority/api/exceptionValue/list  查询健康值列表
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const exceptionValueList = (params) => {
  return request.get('/authority/api/exceptionValue/list', {params} )
}

/**
 * @method: post
 * @desc: api/exceptionValue/saveOrUpdate  对值进行修改
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const exceptionValueSaveOrUpdate = (params) => {
  return request.post('/authority/api/exceptionValue/saveOrUpdate', params )
}

// ==================== 树形权限列表 =======================
/**
 * @method: GET 查询树形权限列表
 * @desc: authority/api/menu/menuList
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const menuList = (params) => {
  return request.post('/authority/api/menu/menuList', params )
}

/**
 * @method: 新增/修改权限信息
 * @desc: /authority/api/menu/saveOrUpdate POST
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const menuSaveOrUpdate = (params) => {
  return request.post('/authority/api/menu/saveOrUpdate', params )
}

/**
 * @method: 删除权限信息
 * @desc: /authority/api/menu/delete POST
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const menuDelete = (params) => {
  return request.post('/authority/api/menu/delete', params )
}

/**
 * @method: 查看权限信息
 * @desc: /authority/api/menu/selectById POST
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const menuSelectById = (params) => {
  return request.get('/authority/api/menu/selectById', {params} )
}

/**
 * @method: 调整菜单顺序
 * @desc: /authority/api/menu/updateBatchById POST
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const menuUpdateBatchById = (params) => {
  return request.post('/authority/api/menu/updateBatchById', params )
}

// ======================= 角色相关接口 ===========================

/**
 * @method: POST 获取角色列表【分页】
 * @desc: http://xx.com//authority/api/role/roleList
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const roleList = (params) => {
  return request.post('/authority/api/role/roleList', params )
}

/**
 * @method: post 删除角色
 * @desc: /authority/api/role/delete
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const roleDelete = (params) => {
  return request.post('/authority/api/role/delete', params )
}

/**
 * @method: 激活/冻结角色 POST
 * @desc: /authority/api/role/modifyStatus
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const roleModifyStatus = (params) => {
  return request.post('/authority/api/role/modifyStatus', params )
}

/**
 * @method: 增加/修改角色 POST
 * @desc: /authority/api/role/modifyStatus
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const roleSaveOrUpdate = (params) => {
  return request.post('/authority/api/role/saveOrUpdate', params )
}

/**
 * @method: 查看角色所拥有的权限信息接口
 * @desc: /authority/api/role/selectRoleId
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const selectRoleId = (params) => {
  return request.post('/authority/api/role/selectRoleId', params )
}

// =================== 机构相关接口 =======================
/**
 * @method: 新增/修改机构信息
 * @desc: /authority/api/organ/saveOrUpdate
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const organSaveOrUpdate = (params) => {
  return request.post('/authority/api/organ/saveOrUpdate', params )
}
/**
 * @method: 查询机构列表信息【分页】
 * @desc: /authority/api/organ/listPage
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const listPage = (params) => {
  return request.post('/authority/api/organ/listPage', params )
}
/**
 * @method: 查询机构详情
 * @desc: /authority/api/organ/getDetails
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const getDetails = (params) => {
  return request.post('/authority/api/organ/getDetails', params )
}
/**
 * @method: 机构信息激活和冻结
 * @desc: /authority/api/organ/modifyStatus
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const orgModifyStatus = (params) => {
  return request.post('/authority/api/organ/modifyStatus', params )
}
/**
 * @method: 删除机构信息
 * @desc: authority/api/organ/delete
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const orgDelete = (params) => {
  return request.post('authority/api/organ/delete', params )
}

// ======================== 员工管理相关接口 =====================
/**
 * @method: 获取员工列表信息【分页】
 * @desc: /authority/api/employee/listemp
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const listemp = (params) => {
  return request.post('/authority/api/employee/listemp', params )
}
/**
 * @method: 新增员工
 * @desc: authority/api/employee/insert
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const employeeInsert = (params) => {
  return request.post('authority/api/employee/insert', params )
}
/**
 * @method: 修改员工信息
 * @desc: /authority/api/employee/update
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const employeeUpdate = (params) => {
  return request.post('authority/api/employee/update', params )
}
/**
 * @method: 修改员工状态
 * @desc: authority/api/employee/updateStatus
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const updateStatus = (params) => {
  return request.post('/authority/api/employee/updateStatus', params )
}
/**
 * @method: 查看员工信息
 * @desc: /authority/api/employee/selectB
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const selectB = (params) => {
  return request.post('/authority/api/employee/selectById', params )
}
/**
 * @method: 删除员工信息
 * @desc: /authority/api/employee/delete
 * @param {type} {Type}
 * @return {type} {Type}
 */
export const employeeDelete = (params) => {
  return request.post('/authority/api/employee/delete', params )
}