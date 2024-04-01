/**
 * npm init -y
 * tsc --init
 */

/**
 * 1、函数定义类型和返回值
 * 2、箭头函数定义类和返回值
 * 3、函数默认的参数
 * 4、函数可选参数
 */

function add(a: number, b: number): number {
  return a + b
}
const sum = (a: number = 10, b: number = 20): number => a + b
const printName = (name?: string): string => "欢迎：" + name

console.log(add(1, 2))
console.log(sum())
console.log(printName())

/**
 * 5、参数是一个对象如何定义
 */

interface User {
  name: string
  age: number
}
function nihao(user: User): User {
  return user
}

console.log(nihao({ name: "吉米", age: 18 }))

interface Obj {
  user: number[]
  add: (this: Obj, num: number) => void
}

/**
 * 5、参数是一个对象如何定义
 * 
 * ts 可以定义this的类型，在js中无法使用 必须是第一个参数定义this类型
 */
let obj: Obj = {
  user: [1, 2, 3],
  add(this: Obj, num: number) {
    this.user.push(num)
  }
}

obj.add(4)
console.log(obj.user)

/**
 * 6、函数重载
 */

let users: number[] = [1, 2, 3,]

function findNnum(id: number): number[]
function findNnum(add: number[]): number[]
function findNnum(ids: number | number[]): number[] {
  if (typeof ids == 'number') {
    return users.filter(v => v == ids)
  } else if (Array.isArray(ids)) {
    users.push(...ids)
    return users
  } else {
    return users
  }
}
console.log(findNnum([4,5,6]))
console.log(findNnum(5))