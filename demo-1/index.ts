/**
 * 基础类型
 * npm i typescript -D
 * 
 * ts-node index.ts 执行ts文件
 * tsc -W 编译为js文件
 * node index.js node执行js文件
 * 
 * npm i ts-node -g
 * npm i @types/node -D
 */

let names: string = '吉米'
let str: string = `我是${names}`
console.log(str)

/**
 * let notANumber: number = NaN;//Nan
 * let num: number = 123;//普通数字
 * let infinityNumber: number = Infinity;//无穷大
 * let decimal: number = 6;//十进制
 * let hex: number = 0xf00d;//十六进制
 * let binary: number = 0b1010;//二进制
 * let octal: number = 0o744;//八进制s
 */
let num: number = 123
console.log(num)

let bool: boolean = true
console.log(bool)

let n: null = null
let b: undefined = undefined

let v1: void = null
let v2: void = undefined

//1、any 任意类型 unknown 不知道的类型
//2、Objcet
//3、Number String Boolean
//4、number string boolean
//5、never
let a: any = []
a = 1
a = "123"
a = true
/**
 * unknown:
 * 1、不可以赋值给其他类型，any除外
 * 2、没有办法读任何属性 方法也不可以调用
 * 3、比any更加安全
 */
let xiaoman: any = { bool: true, open: () => "北京" }
console.log(xiaoman.open());
console.log(xiaoman.bool);

/**
 * 
 */
let dd: Object = 123
let dd1: Object = "123"
let dd2: Object = true
let cc: object = []
let cc2: object = {}
let cc3: object = () => 123
let ff:{}  // new Object