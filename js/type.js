/*
- type: number, string, undefined, boolean, object
const a = 1;
console.log(typeof a); // number
const b = "1";
console.log(typeof b); // string
const c = null;
console.log(typeof c); // object
const d = undefined;
console.log(typeof d); // undefined
const e = true;
console.log(typeof e); // boolean
const f = {};
console.log(typeof f); // object
const g = [];
console.log(typeof g); // object

const obj = {
  key: value
}
// undefined
for (let i = 0; i < obj.length; i++) {}

- isArray(): 배열인지 확인 
const a = {
  id: 1,
  name: '문채'
};
const b = [
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
console.log(Array.isArray(a))
console.log(Array.isArray(b))

- 형 변환
const a = "2";
const b = a + 2;
console.log(b) // 22
console.log(typeof b) // string
const c = parseInt(a) + 2
console.log(c)
console.log(typeof c)
const d = Number(a) + 2
console.log(d)
console.log(typeof d)
type check : isNaN(s) 변환하려는 값이 변환가능한 형이 아닐때, NaN의 타입체크

1. 숫자(Number) 형변환 
- number: parseInt, Number
- parseInt(s): 진법계산
- Number(s): 들어온 숫자를 그대로 형만 변환

const a = 2;
const message = `${a} 입니다.`
console.log(message)
- string: String
- String: 문자로 변환

2. 글자(String) 형변환
배열의 String변환
const a = [1,2,3,4]
console.log(String(a)) // 1,2,3,4
console.log(JSON.stringify(a)) // [1,2,3,4]

객체의 String변환
const b = {a: 1, b: 2}
console.log(String(b)) // [Object, Object]
console.log(JSON.stringify(b)) // {a: 1, b: 2} 

3. 객체(Object) 형변환: 객체의 키값은 무조건 string
const a = '{"a": 1, "b": 2}';
const b = "[1,2,3,4]";
console.log(JSON.parse(a))
console.log(JSON.parse(b))
*/
