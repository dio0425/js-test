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
