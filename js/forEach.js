// 怎么跳出forEach循环
/* 
  for for...of  for...in 都可以跳出循环
  continue 跳本次前项
  break  跳出当前循环
  forEach 只能通过抛出异常来终结循环 return 只能跳出本次循环
*/
try {
  [1,2,3].forEach(function(item,index){
      if(item == 2){
          throw new Error(); //结束循环
      }
  })
} catch(e) {
​
}