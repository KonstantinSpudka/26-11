"use strict";
// const n = 10;
// n.name = 100;

function f() {
  console.log("this :>> ", this);
}
f();

function F() {
  this.a = 10;
}
const t = new F();

// var
// console.log("a :>> ", a);
// var a = 5;

// function f() {
//   var a = 10;
// }
// f();

// if (true) {
//   var a = 15;
// }

// '+' local scope
// '-' block scope
// '-' підняття змінних
