/**
 * 联合类型
 * !强转
 */

let phone: number | string = ''

let fn = function (type: number | boolean): boolean {

  return !type;
}

console.log(fn(1))
console.log(fn(true))

/**
 * 交叉類型
 * & 
 */

interface Pople {
  name: string,
  age: number
}

interface Man {
  sex: boolean
}

const fnn = (man: Pople & Man): void => {
  console.log(man)
}
fnn({ name: "吉米", age: 18, sex: true })

/**
 * 类型断言
 * 不可以卵用
 */

const fcc = function (num: number | string): void {
  console.log((num as string).length)
}

fcc(12345)

interface A {
  run: string
}
interface B {
  build: string
}
let fbb = (type: A | B): void => {
  console.log((type as A).run)
}

fbb({ build: "123" });