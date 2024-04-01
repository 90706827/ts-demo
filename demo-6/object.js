/**
 * 内置对象
 */
let num = new Number(1);
let date = new Date();
let reg = new RegExp(/\w/);
let error = new Error();
let xhr = new XMLHttpRequest();
//HTML{元素名称}Request
let div = document.querySelector('div');
let list = document.querySelectorAll('div');
let all = document.querySelectorAll('div li');
let local = localStorage;
let lo = location;
let cookie = document.cookie;
let promise = new Promise((r) => r('吉米'));
promise.then(res => {
    console.log(res);
});
