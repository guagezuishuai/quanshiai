import areaJson from './area';
export function requestProvince() {
  let res = [];
  Object.entries(areaJson.province_list).forEach(val => {
    res.push({
      areaName: val[1],
      areaCode: val[0]
    })
  })
  return res;
}
export function requestCity(provinceCode) {
  const aaa = String(provinceCode).substr(0, 2);
  return Object.entries(areaJson.city_list).filter(res => String(res[0]).substr(0, 2) === aaa).map(res => {
    return {
      areaCode: res[0],
      areaName: res[1]
    }
  })
}

export function requestCounty(cityCode) {
  const aaa = String(cityCode).substr(0, 2);
  return Object.entries(areaJson.county_list).filter(res => String(res[0]).substr(0, 2) === aaa).map(res => {
    return {
      areaCode: res[0],
      areaName: res[1]
    }
  })
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
  return function() {
    // let context = this; // 注意 this 指向
    let args = arguments; // arguments中存着e
      
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}