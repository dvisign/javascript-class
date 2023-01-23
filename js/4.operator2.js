/*
- 삼항연산자
const a = 10;
let b;
if (a > 10) b = true;
else b = false;

const b = a > 10 ? true : false

- 논리연산자
1. && (AND) 
const a = true;
const b = false;

if (a && !b) {
  function()
} // a가 ture이고, b가 false일때 

a && b && function()

- 병합연산자 (널리쉬 연산자 : ??)
왼쪽 피연산자부터 값이 undifined 이거나 null이면 오른쪽 피연산자, 값이 undifined 혹은 null이 아니라면 왼쪽 피연산자
const a = 'null';
const b = null;
const c = 'name';

console.log(`내 이름은 ${a ?? b ?? c} 입니다`)

- 옵셔널 체이닝 문법 (?.)
존재하지 않는 중첩 객체에 안전하게 접근 할 수 있도록 도와주는 문법 
const obj = {
  id : 1,
  name : 'name',
  age : 35
}
console.log(`내 직업은 ${obj.job.year ?? '??'}입니다.`) // TypeError: Cannot read properties of undefined (reading 'year')

console.log(`내 직업은 ${obj?.job?.year ?? '??'}입니다.`) // 내 직업은 ??입니다.
*/
