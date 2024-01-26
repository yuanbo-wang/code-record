// 用来缓存函数结果
class MemoizeMap {
  constructor() {
    this._map = new Map()
    this._weakMap = new WeakMap()
  }
  isObject(obj) {
    return typeof obj === "object" && obj !== null
  }
  setMemoize(key, value) {
    console.log(key,value)
    if (this.isObject(key)) {
      this._weakMap.set(key, value)
    } else {
      this._map.set(key, value)
    }
  }
  getMemoize(key) {
    if (this.isObject(key)) {
      return this._weakMap.get(key)
    } else {
      return this._map.get(key)
    }
  }
}
function memoize(fun,resolver){
  function memoized(...args){
    const key = resolver ? resolver(...args):args[0]
    const cache =memoized.cache
    if(cache.getMemoize(key)){
      return cache.getMemoize(key)
    }else{
      const result =  fun.apply(this,args)
      cache.setMemoize(key,result)
      return result
    }

  }
  memoized.cache = new MemoizeMap()


  return memoized
}
const fn = memoize((a)=>{
  return a.length
})
const arr = [1]
console.log(fn(arr))
arr.push(2)
console.log(fn(arr))
