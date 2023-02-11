/*
고차함수
map, filter, reduce, indexOf....
1. map: 배열 순회 함수
const a = [1, 2, 3, 4, 5];
let b =[]
for(let i = 0; i < a.length; i++) {
  b.push(a[i] * a[i])
}
const b = a.map((value, index) => {
  return value * value
})
const b = a.map((value, index) => value * value)

2. map과 filter의 차이
const c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 짝수만 골라서 배열 [2,4,6,8,10]
map은 리턴 조건과 상관없이 전부다 값을 리턴
const d = c.map(value => value % 2 === 0 && value)
filter는 조건에 맞는 값만 리턴
const d = c.filter(value => value % 2 === 0 && value)

3. 예제문제
```
const a = [
  {
    id: 1,
    first-name: "jung",
    last-name: ""
  },
  {
    id:2,
    first-name: "sim",
    last-name: ""
  }
]
1. a배열에서 id가 2인 값을 객체로 집어넣으시오.
const b = a.filter(v => v.id === 2 && v)[0]
2. a배열속 객체의 last-name을 마저 작성해서 a와 참조되지 않은 새로운 배열을 만드시오.
const c = a.map((v, i) => ({...v,["last-name"]: i === 0 ? 'moonchai' : 'sunsim'}) )
```
*/
