/**
 * 内置对象
 */
let num: Number = new Number(1)
let date: Date = new Date()
let reg: RegExp = new RegExp(/\w/)
let error: Error = new Error()
let xhr: XMLHttpRequest = new XMLHttpRequest()
//HTML{元素名称}Request
let div: HTMLDivElement | null = document.querySelector('div')

let list: NodeList = document.querySelectorAll('div')

let all: NodeListOf<HTMLDivElement | HTMLElement> = document.querySelectorAll('div li')

let local:Storage = localStorage
let lo:Location = location

let cookie:string = document.cookie

let promise:Promise<string> = new Promise((r)=>r('吉米'))
promise.then(res=>{
  console.log(res)
})