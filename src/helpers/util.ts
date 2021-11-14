const toString = Object.prototype.toString

/**
 * 2021/10/31
 * author: zhuxl31986
 * TypeScript 中的 is：【参考：https://segmentfault.com/a/1190000022883470】
 */
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObject(val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
