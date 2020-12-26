import request from '@/api/index';

function getProvinces(params) {
  return request.post('/authority/api/province/getProvices', {
    params
  });
}

function getCityByProvice(params) {
  return request.post('/authority/api/city/getCityByProvice', params);
}

function getAreasByCity(params) {
  return request.post('/authority/api/area/getAreasByCity', params);
}
export async function requestProvince() {
  const res = await getProvinces()
  return res.data;
}
export async function requestCity(provinceCode) {
  const res = await getCityByProvice({
    pid: provinceCode
  })
  return res.data;
}

export async function requestCounty(cityCode) {
  const res = await getAreasByCity({
    cid: cityCode
  });
  return res.data;
}

/**
 * @method: debounce
 * @desc: 防抖函数
 * @param {function} 执行的函数
 * @param {wait} 等待的时间
 * @return: {Type}
 */
export function debounce(func, wait) {
  let timer;
  return function () {
    // let context = this; // 注意 this 指向
    let args = arguments; // arguments中存着e

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

/**
 * @method: 
 * @desc: BMI指数计算方法
 * 体重过低：BMI﹤18.5
 * 正常：18.5≤BMI﹤24.0
 * 超重：24.0≤BMI﹤28.0
 * 肥胖：BMI≥28.0 或（和）男性腰围≥85cm（女性腰围≥80cm）
 * @param {type} {Type}
 * @return {type} {Type}
 */

export function BMIName(val) {
  val = Number(val);
  if(val === NaN) throw '计算BMI传入参数异常';
  if(val < 18.5) {
    return '体重过低';
  } else if(val < 24) {
    return '正常';
  } else if(val < 28) {
    return '超重'
  } else {
    return '肥胖'
  }
}