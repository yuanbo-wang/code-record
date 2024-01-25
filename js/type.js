// 判断变量类型
/* 
1. typeof
2. instance
3. constructor
4. Object.prototype.toString.call()
5. 其他的库，如jquery

数据类型：
  基本数据类型：string number undefined null boolean
  引用数据类型：Object  Array   function  
  es6：Set  Map  weakSet  weakMap
 */

const t_string = 'aaa'
const t_undefined = undefined
const t_number = 11
const t_boolean = true
const t_null = null
const t_array = [1,2,3]
const t_object = {name:'haoxl',age:18}
const t_function = function(){console.log('I am a function')}
//1. tyof

console.log(typeof t_string); // string
console.log(typeof t_undefined);//undefined
console.log(typeof t_number);//number
console.log(typeof t_boolean);//boolean
console.log(typeof t_null);//object
console.log(typeof t_array);//object
console.log(typeof t_object);//object
console.log(typeof t_function);//function
// 只能判断基本类型（除了null，null本质上还是一个对象）和function
//2. instanceof  只能判断对象 Object Array  Function   如果基本类型是new出来的 则可以
console.log( t_string instanceof String); // false
console.log( t_undefined instanceof Object);//false
console.log( t_number instanceof Number);//false
console.log( t_boolean instanceof Boolean);//false
console.log( t_null instanceof Object);//false
console.log( t_array instanceof Array);//true
console.log( t_object instanceof Object);//true
console.log( t_function instanceof Function);//true
// 3.constructor  undefined和null没有contructor属性
console.log(t_string.constructor === String);// true
console.log(t_number.constructor === Number);// true
console.log( t_boolean.constructor === Boolean);//true
console.log(t_array.constructor === Array);// true
console.log(t_object.constructor === Object);// true
console.log(t_function.constructor === Function);// true
// constructor不能判断undefined和null，并且使用它是不安全的，因为contructor的指向是可以改变的

// 4.使用Object.prototype.toString.call
console.log(Object.prototype.toString.call(t_boolean));//[object Boolean]
console.log(Object.prototype.toString.call(t_number));//[object Number]
console.log(Object.prototype.toString.call(t_string));//[object String]
console.log(Object.prototype.toString.call(t_undefined));//[object Undefined]
console.log(Object.prototype.toString.call(t_null));//[object Null]
console.log(Object.prototype.toString.call(t_array));//[object Array]
console.log(Object.prototype.toString.call(t_object));//[object Object]
console.log(Object.prototype.toString.call(t_function));//[object Function]
//在任何值上调用 Object 原生的 toString() 方法，都会返回一个 [object NativeConstructorName] 格式的字符串。每个类在内部都有一个 [[Class]] 属性，这个属性中就指定了上述字符串中的构造函数名。



