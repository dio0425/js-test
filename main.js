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
