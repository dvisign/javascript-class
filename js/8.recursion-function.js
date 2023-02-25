/* 
재귀 함수 :  함수내부에서 자기 자신을 다시 호출

1 ~ n 까지 수의 모든합
1 ~ 10까지의 모든 수의 합 10 + 9 + 8 ... + 1 = 55
1 ~ 1000까지 1000 + 999 + 998 ... + 1
function a(num) {
  if ((num) === 1) {
    return 1
  }
  else {
    return num + a(num - 1) 
  }
}

const a = (num) => num === 1 ? 1 : num + a(num - 1)

// a(1000) 1000 + a(1000 - 1) 
// a(999) 999 + a(999 - 1) 
// a(998) 998 + a(998 - 1)
.
.
.  
// a(3) 3 + a(3 - 1)
// a(2) 2 + a(2 - 1)
// a(1) 1

1. 재귀함수는 종료지점이 명확해야한다. (feat. 무한루프)



예제문제 )
let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 1600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};
let sum = 0;
const companyArr = Object.keys(company)
companyArr.forEach(v => {
  if (Array.isArray(company[v])) {
    company[v].forEach(v2 => sum = sum + v2.salary)
  } else {
    const companyArr2 = Object.keys(company[v])
    companyArr2.forEach(v2 => {
      company[v][v2].forEach(v3 => sum = sum + v3.salary)
    })
  }
})
console.log(sum)
*/
