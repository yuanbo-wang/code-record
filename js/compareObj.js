// 对比两个对象是否相等  只考虑普通对象{}
function compareObject(obj1,obj2){
  if(typeof obj1 === "object" && typeof obj1 === "object"){
    const obj1Kyes = Object.keys(obj1)
    const obj2Kyes = Object.keys(obj2)
    if(obj1Kyes.length !==obj2Kyes.length){
      return false
    }
    for (const key of obj1Kyes) {
      if(!obj2[key] || obj1[key]!==obj2[key]){
        return false
      }
    }
    return true
  }else if(obj1 === null && obj1===null){
    return true
  }else{
    return false
  }
}