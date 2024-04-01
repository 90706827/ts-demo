/**
 * npm init -y
 * tsc --init
 */


/**
 * 1、不能多属性 也不能少属性
 * 2、重名接口，属性合并
 */
interface Abc {
  name: string
  age: number
}

interface Abc {
  sex: string
}

let a: Abc = {
  name: "吉米",
  age: 18,
  sex: "男"
}

/**
 * 3、任意KEY 索引签名
 * 4、? 可选属性，readonly 只读
 * 5、extends 接口继承
 */
interface Add extends Sum {
  name: string
  readonly age?: number
  readonly add: () => boolean
  [propName: string]: any
}
interface Sum {
  mobile: string
}

let b: Add = {
  name: "吉米",
  sex: "男",
  mobile: "1889990000",
  add: () => {
    return true;
  }
}

// b.age = 18
// b.add = () => {
//   return false
// }

/**
 * 定义函数类型
 */

interface Dev {
  (name: string): number[]
}

const fn: Dev = function (name: string) {
  return [1]
}