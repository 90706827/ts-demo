/**
 * npm init -y
 * tsc --init
 */

let arr: number[] = [1, 2, 3]

let ccc: boolean[] = [true, false]

let bbb: Array<boolean> = [true, false]

interface Xxx {
  name: string
}
/**
 * 定义对象数组使用interface
 */
let ddd: Xxx[] = [{ name: "吉米" }]
/**
 * 二维数组
 */
let eee: number[][] = [[1], [2], [3]]
let eee1: Array<Array<number>> = [[1], [2], [3]]

/**
 * 多类型数组
 */
let ff: any[] = [1, "jimi", true]
let ff2: [number, string, boolean, {}] = [1, "jimi", true, {}]

function add(...args: number[]) {
  console.log(args)
}
add(1, 2, 3)