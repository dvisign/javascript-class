/*
1. 일반함수식 (function keyword)
function a() {
  ...
}
1-1) 익명함수
(() => {

})
(function() {

})
ex) 
// id가 id인 엘리먼트에 클릭이 일어났을때 요거(익명함수)를 실행해줘.
$('#id').click(function() {
  alert('click')
})
// id가 id인 엘리먼트에 클릭이 일어났을때 요거를 실행(익명함수)할건데 a함수를 실행해줘.
$('#id').click(function() {
  a();
})
1-2) 즉시실행 함수 
// 함수선언
function C() {
  alert('HI');
}
// 함수호출
C();
// 즉시 함수 호출
(function() {
  alert('HI');
})();

2. 변수형 함수 
const a = function() {
  ...
}

3. 화살표 함수(arrow function)
const a = () => {
  ...
}

4. 함수의 종료
function a() {
    var res = 0;
    return 2;
    res = 4;
    console.log(res)
}
var result = a();
console.log(result) // 2
const result = () => c
console.log(result) // 2

함수내부에서 return을 만나는 순간 즉시 함수 종료

5. 일반 함수식 과 화살표함수의 차이
1) 화살표함수에서 중괄호를 빼면 자동으로 return값을 내줌
2) this를 가르치는 곳이 다름
const a = {
    name: 'a',
    getName: function() {
        console.log(this.name)
    }
}
const b = {
    name: 'b',
    getName: () => console.log(this.name)
}
a.getName() // a
b.getName() // ''


6. 매개변수
- 함수를 실행할때 전달받는 변수값(함수 내부의 지역변수)
- 매개변수에는 어떤 타입이든 모두 들어갈수있음
function a(c, d) { // c, d가 매개변수
  console.log(c, d) // 1, 2
}
console.log(c, d) // c is not defined
const a = (c, d) => console.log(c, d)
a(1,2)
ts : const a = (c:Number, d:Number) => console.log(c,d)
*/
