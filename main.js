import getType from "./getType";
import random from "./getRandom";

// 산술 연산자
// console.log(1 + 2);
// console.log(5 - 7);
// console.log(3 * 4);
// console.log(10 / 2);

// 할당 연산자
// let a = 1;
// a += 1;
// console.log(a);

// 비교 연산자
// const a = 1;
// const b = 3;
// console.log(a === b);
// function isEqual(x, y) {
//   return x === y;
// }
// console.log(isEqual(1, 1));
// console.log(a !== b);
// console.log(a > b);

// 논리 연산자
// && : and 연산자
// || : or 연산자
// ! : not 연산자

// 삼항 연산자
// const a = true;
// console.log(a ? "참" : "거짓");

// 조건문 (If statement)

// const a = random();

// if (a === 0) {
//   console.log("a is 0");
// } else if (a === 2) {
//   console.log("a is 2");
// } else if (a == 4) {
//   console.log("a is 4");
// } else {
//   console.log("rest...");
// }

// 조건문 (Switch statement)
// const a = random();

// switch (a) {
//   case 0:
//     console.log("a is 0");
//     break;
//   case 2:
//     console.log("a is 2");
//     break;
//   case 4:
//     console.log("a is 4");
//     break;
//   default:
//     console.log("rest...");
// }

// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

// const ulEl = document.querySelector("ul");

// for (let i = 0; i < 10; i += 1) {
//   const li = document.createElement("li");
//   li.textContent = `list-${i + 1}`;
//   if ((i + 1) % 2 === 0) {
//     li.addEventListener("click", function () {
//       console.log(li.textContent);
//     });
//   }
//   ulEl.appendChild(li);
// }

// 변수 유효범위(Variable Scope)
// var, let, const

// function scope() {
//   if (true) {
//     const a = 123;
//     console.log(a);
//   }
// }
// scope();

// 형 변환(Type conversion)

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'fasle', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

// 함수

// function sum(x, y) {
//   return x + y;
// }

// const a = sum(1, 3);
// const b = sum(4, 12);

// console.log(a);
// console.log(b);

// 화살표 함수
// () => {} vs function () {}

// const double = function (x) {
//   return x * 2;
// };
// console.log("double: ", double(7));

// const doubleArrow = (x) => {
//   return x * 2;
// };
// console.log("doubleArrow", doubleArrow(7));

// 즉시실행함수
// IIFE, Immediately-Invoker Function Expression

// const a = 7;

// function double() {
//   console.log(a * 2);
// }
// double();

// (function () {
//   console.log(a * 2);
// })();

// (function () {
//   console.log(a * 2);
// })();

// 호이스팅(Hoistion)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// const a = 7;

// double();

// function double() {
//   console.log(a * 7);
// }

// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

// const timer = setInterval(function () {
//   console.log("RuRi!");
// }, 3000);

// const h1El = document.querySelector("h1");
// h1El.addEventListener("click", function () {
//   clearInterval(timer);
// });

// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// function timeout(cb) {
//   setTimeout(() => {
//     console.log("RuRi!");
//     cb();
//   }, 3000);
// }

// timeout(() => {
//   console.log("Done!");
// });

//생성자 함수(prototype)
// function User(first, last) {
//   this.firstName = first;
//   this.lastNmae = last;
// }

// User.prototype.getFullName = function () {
//   return this.firstName;
// };

// const ruri = new User("Lee", "ruri");

// console.log(ruri.getFullName());

// this
// 일반(Normal) 함수는 호출 위치에 따라서 this 정의
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의

// function User(name) {
//   this.name = name;
// }

// User.prototype.normal = function () {
//   console.log(this.name);
// };

// User.prototype.arrow = () => {
//   console.log(this.name);
// };

// const ruri = new User("ruri!");

// ruri.normal();
// ruri.arrow(); // 에러

// ES6 Classes

// class User {
//   constructor(first, last) {
//     this.firstNmae = first;
//     this.lastName = last;
//   }
//   getFullName() {
//     return `${this.firstNmae} ${this.lastName} `;
//   }
// }

// const ruri = new User("ruri", "Lee");

// console.log(ruri.getFullName());

//상속
// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name;
//     this.wheel = wheel;
//   }
// }

// const myVehicle = new Vehicle("운송수단", "2");
// console.log(myVehicle);

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel);
//   }
// }

// const myBicycle = new Bicycle("자전거", 2);
// console.log(myBicycle);

// class car extends Bicycle {
//   constructor(name, wheel, license) {
//     super(name, wheel);
//     this.license = license;
//   }
// }

// const myCar = new car("람보르기니", 4, true);
// console.log(myCar);

// 문자
// const a = "Hello world!".indexOf("world!");
// console.log(a);

// const b = "ruri";
// console.log(b.length);

// const str = "Hello World!";
// console.log(str.slice(6, 11));

// const c = "Hello World!";
// console.log(c.replace("World!", "ruri"));

// const d = "hoon37388@naver.com";
// console.log(d.match(/.+(?=@)/)[0]);

// const e = "   Hello World!  ";
// console.log(c.trim());

//숫자와 수학

const pi = 3.13159265358979;
console.log(pi);

const str = pi.toFixed(2);
console.log(str);
console.log(typeof str);

const integer = parseInt(str);
const float = parseFloat(str);
console.log(integer);
console.log(float);
console.log(typeof integer, typeof float);

console.log("abs: ", Math.abs(-12));

console.log("min: ", Math.min(2, 8));

console.log("max: ", Math.max(2, 8));

console.log("ceil: ", Math.ceil(3.54));

console.log("floor: ", Math.floor(3.54));

console.log("round: ", Math.round(3.54));

console.log("random: ", Math.random());
