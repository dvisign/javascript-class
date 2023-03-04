/* 
javascript: 동적 언어
http://abc.com => index.html => 정적페이지
    접속       => 페이지 검색 => <html>....</html> => 정적페이지
  javascript   => function() => 실행 => 동적으로 데이터 생성


1. Promise : resolve, then => 성공
             reject, catch => 실패
new Promise(resolve, reject) // resolve:성공, reject: 실패
$.ajax({...}) // promise x
axios({...}) // promise o

function callApis(url) {
  return $.ajax({
    url: '...',
  })
}
function dataSelect(row) {
  // 데이터 가공
  return row.id
}
const data = callApis('/abc.com') // 데이터가 왔는지 않왔는지 모름
const calcData = dataSelect(data[0]) // 데이터가 왔는지 안왔는지 모르는 상태에서 데이터를 가공 => 에러

function callApis(url) {
  return new Promise(resolve, reject) {
    const data = $.ajax({
      url,
    })
    if (data) resolve(data) // api호출을해서 성공했으면 resolve 실행
    else reject(data.error) // 실패했다면 reject 실행
  }
}
function dataSelect(row) {
  // 데이터 가공
  return row.id
}
const data = callApis('/abc.com')
const calcData = data.then(res => dataSelect(res[0])).catch(e => e)
2. async / await
// 콜백지옥
const data = callApis('/abc.com', function() {
  const calcData = dataSelect(data[0], function() {
    function() {
    
    , function() {
    
    }, function() {
      ....
      ....,
        // 100번째 function() {
        
        }
    }}
  })
})
// promise 
const calcData = data
  .then(res => {
    return dataSelect(res[0])
      .then(res2 => {
        return ...
          .then(res3 => {
            ...
          })
      })
  })
  .catch(e => e)
function callApis(url) {
  return new Promise(resolve, reject) {
    const data = $.ajax({
      url,
    })
    if (data) {
      new Promise((res, rej) => {
        resolve(data)
        new Promise()
        ....
      })
    }
    else reject(data.error)
  }
}
// async/await
(async () => {
  const data = await callApis('/abc.com')
  const calcData = await dataSelect(data[0])
  (() => {
    ...
  })()
  await ... 
  (() => {
    ...
  })()
  await ...
  (() => {
    ...
  })()
  await ...
})

// 게시판 리스트 (게시판 목록 / 페이징 / 게시판 설정)
const boardSet = $.ajax({...}) // 몇개의 게시글을 가져오는지
const pager = $.ajax({...}) // 현재 보고있는 게시판 페이지 
const list = $.ajax({...}) // boardSet에 있는 게시글 카운트만큼 몇페이지 api를 호출

const boardSet = aixos({...}).then(
  const pager = aixos({...}).then(
    const list = aixos({...}).then().catch(e)
  ).catch(e)
).catch(e)
// 페이징, 리스트정보 x

(async () => {
  const boardSet = await axios({...})
  const pager = await axios({...}) 
  const list = await axios({...})
  new Promise.all(([boardSet, pager, list], index) => {
    // all 배열안에 promise들의 reject(실패)가 하나라도 떨어지면 뒤에 다음 promise들을 실행 안함
  }) 
  new Promise.allSettled(([boardSet, pager, list], index) => {
    // all settled promise들의 reject(실패)를 구분하고, resolve(성공), reject(실패) 여부와는 상관없이 다음 promise를 실행
    if (index === 0) {
      if (boardSet.status === 'rejected') {}
      else {}
    }
  }) 
})
*/
