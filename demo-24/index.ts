
import axios from 'axios'
import 'reflect-metadata'
/**
 * 0、
 * npm init -y
 * tsc --init
 * 1、引入
 * npm i axios
 * npm i reflect-metadata
 * 2、tsconfig.json 开启
 * "experimentalDecorators": true, 
 * "emitDecoratorMetadata": true, 
 * 
 * 装饰器
 * 
 * 类装饰器 ClassDecorator target 构造函数
 * 属性装饰器 PropertyDecorator
 * 参数装饰器 ParameterDecorator
 * 方法装饰器 MethodDecorator PropertyDescriptor
 * 装饰器工厂
 * @param name 
 * @returns 
 */
const Base = (name: string) => {
  const fn: ClassDecorator = (target) => {
    target.prototype.name = name
    target.prototype.fn = () => {
      console.log("我是" + name)
    }
  }
  return fn
}

const Get = (url: string) => {
  const fnc: MethodDecorator = (target, key, descriptor: PropertyDescriptor) => {
    // console.log(url)
    // console.log(target, key, descriptor)
    const _key = Reflect.getMetadata('key', target)
    console.log("--" + _key)
    axios.get(url).then(res => {
      descriptor.value(res.data)
    })
  }
  return fnc
}
const Result = () => {
  const fna: ParameterDecorator = (target, key, index) => {
    Reflect.defineMetadata('key', 'a', target)
    console.log(target, key, index)
  }
  return fna
}

const Name: PropertyDecorator = (target, key) => {
  console.log(target, key)
}

@Base("杰克")
class Http {

  @Name
  name: string
  constructor() {
    this.name = '吉米'
  }

  @Get("https://api.apiopen.top/swagger/index.html")
  getList(@Result() data: any) {
    let a = data
    // console.log(data)
  }

  @Get("https://api.apiopen.top/swagger/index.html")
  create(data: any) {
    let a = data
    // console.log(data)
  }
}

const http = new Http() as any

http.fn()
console.log(http.name)

// Base(Http) 同@Base