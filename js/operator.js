/*
- 비교 연산자
> : 좌향이 우향보다 클때 true
< : 우향이 좌향보다 클때 true
>= : 좌향이 우향보다 크거나 같을때 true
<= : 우향이 좌향보다 크거나 같을때 true
= : 대입 ex) a = 1;
== : 값만 비교, 값이 같다면 true
=== : 타입, 값, 메모리(객체) 모두 비교
const a = 1;
const b = "1";
console.log(a == b) // true
console.log(a === b) // false
*/

/*
- 수학 연산자
덧셈 : +
const a = 1;
const b = a + 1
console.log(b) // 2
뺄셈 : -
const a = 2;
const b = a - 1;
console.log(b) // 1
곱셈 : *
const a = 2;
const b = a * 2;
console.log(b) // 4
const c = 4;
const b = c * -1, -c
console.log(b) // -4
const e = 5;
const f = -1 * e * 4; // -20
const f = -(e * 4) // -20
나누기 : /
const a = 4;
const b = a / 2;
console.log(b) // 2
나머지 : %
<?php for ($i = 0; $i < 10; $i++) {
if ($i === 0) echo "<ul>"
elss if ($i % 3 === 0 && $i != 0) echo "</ul><ul>"
?>
<li>
<?php echo $i; ?>
</li>
<?php 
if ($i + 1 === 10) echo "</ul>
} ?>
제곱 : **, 거듭제곱(Math.pow)
const a = 2
const b = a ** 5 // 2 * 2 * 2 * 2 * 2 = 32;
const c = Math.pow(a , 3) // 2 * 2 * 2 = 8;
const d = Math.sqrt(b)
console.log(a) // 2
console.log(b) // 32
console.log(c) // 8
제곱근 : Math.sqrt
const a = 4;
const b = Math.sqrt(a)
const c = 9;
const d = Math.sqrt(c)
console.log(b) // 2
console.log(d) // 3
- 할당 연산자 : +=, -=, *=
let a = 2;
수학연산자 : {
  let a = 2;
  a = a * 2;
  console.log(a) // 4
  a = 2 메모리를 생성
  a * 2 곱셈
  a에 a * 2를 대입
}
할당연산자 : {
  let a = 2;
  a *= 2;
  console.log(a) // 4
  a = 2 메모리를 생성
  a에 2 * 2를 즉시 대입
  // a = 무슨값 
}

- 증가감소 연산자: ++, -+
let a = 10;
a-- // 9
a++ // 11
*/

/*
예제문제
1.
let a = 1
let c = ++a; // 2
2.
let a = 2;
let x = 1 + (a *= 2); // 5
3. 
let num = 2;
let type1 = 2 + num; // 4
let type2 = "2" + num; // 22
console.log(type1 === type2) // false
console.log(type1 == type2) // false
4. 
let boolean = 4 % 2;
console.log(boolean) // 0
*/
