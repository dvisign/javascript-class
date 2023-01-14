// vanilla.js
// var count = 0;
// window.onload = function () {
//   var btn = document.getElementsByClassName("alert_btn");
//   for (var i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", function (e) {
//       count++;
//       alert(count + "번째 버튼입니다.");
//     });
//   }
// };

// jquery.js
// $(document).ready(function () {
//   var btn = $(".alert_btn");
//   btn.each(function (i) {
//     var _this = $(this);
//     _this.on("click", function () {
//       alert(i + "번째 버튼입니다.");
//     });
//   });
// });

// : 주석
/* 주석 */
/**
 * name : test
 * function: 매개변수 2개를 받아서 2개를 합친값이 숫자면 true 아니면 false
 * @param a {any} 매개변수 a
 * @param b {any} 매개변수 b
 */
var test = function (a, b) {
  var t = a + b;
  return typeof t === Number ? true : false;
};

// 변수 선언 : var, let, const
// var : 변수 선언, 수정o, 재선언o, 호이스팅o
// let : 변수 선언, 수정o, 재선언x, 호이스팅x
// const : 변수 선언, 수정x, 재선언x, 호이스팅x

/*
작성한 코드
a = 2;
var a = 0;
var b = function() {
  c = 0;
  var c = 2;
}
console.log(a); // 0

브라우저에서 파싱한 코드
function() { //  숨겨진 스코프
  var a;
  var b = function() {
    var c;
    c = 0;
    c = 2;
  }
  a = 2;
  a = 0;
  console.log(a)
}
*/
/* 
* 호이스팅
선언류 코드들을 전부 스코프{} 상단으로 끌어올림(var, function)
var a = 0;
function a() {}
*/

/*
var : 변수 변형가능, 호이스팅이 작동
a = 2;
var a = 0;
console.log(a); // 0

var a = 0;
a = 2;
console.log(a); // 2
*/

/*
const : 변수의 변형을 막기위해 나온 변수선언
a = 2;
const a = 0;
console.log(a); // error a가 선언이 되어있지 않아 에러

const a = 0;
a = 2;
console.log(a); // error const는 변경할수 없어서 에러
*/

/*
let : 변수의 변형은 가능하나, 호이스팅이 작동하지 않음
a = 2;
let a = 0; 
console.log(a); // error a가 선언이 되어있지 않아 에러

let a = 0;
a = 2;
console.log(a); // 2
*/

/* 
백틱 - 템플릿 문법 종류
var names = "정문채";
alert("내 이름은 " + names + "입니다.");

var names = "정문채";
alert(`내 이름은 ${names} 입니다.`);
*/

/*
자바스크립트 메모리할당
변수를 복사하는 방식 [깊은 복사, 얕은 복사] 

얕은복사 : 메모리 참조를 끊어내지 않고 그대로 복사
const a = [1, 2, 3, 4];
const b = a;
b[3] = 5;
console.log(a); // [1,2,3,5]
console.log(b); // [1,2,3,5]

const a = [
  {
    id: 1,
    name: '문채'
  },
  {
    id: 2,
    name: '선심'
  },
    {
        id: 3,
    name: '나연'
  }
];
const b = [...b]
console.log(a === b) // false
console.log(a[0] === b[0]) // true

깊은복사 : 메모리 참조를 끊어내고 새로운 데이터를 복사
const a = [1,2,3,4];
const b = [
  ...a
]
b[3] = 5;
console.log(a) // [1,2,3,4]
console.log(b) // [1,2,3,5]

const a = [
  {
    id: 1,
    name: '문채'
  },
  {
    id: 2,
    name: '선심'
  },
    {
    id: 3,
    name: '나연'
  }
];
const b = JSON.parse(JSON.stringify(a))
console.log(a === b) // false
console.log(a[0] === b[0]) // false

ex) lodash clodeDeep()
import _ from 'lodash';

const a = [
  {
    id: 1,
    name: '문채'
  },
  {
    id: 2,
    name: '선심'
  },
    {
    id: 3,
    name: '나연'
  }
];
const b = _.cloneDeep(a)
console.log(a === b) // false
console.log(a[0] === b[0]) // false
*/
