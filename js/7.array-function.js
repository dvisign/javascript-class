/*
1. join, split
1-1 join : Array.join(구분자) 구분자를 기준으로 배열을 이어붙여서 string로 만듬
const num1 = "010"
const num2 = "5214"
const num3 = "5805"
const phoneNum = [num1, num2, num3].join("-") // 010-5214-5805
const phoneNum = [num1, num2, num3].join("") // 01052145805

1-2 split : String.split(구분자) 구분자를 기준으로 잘라서 array로 만듬
const phoneNum = "010-5214-5805"
const splitPhoneNum = phoneNum.split('-') [010, 5214, 5805]
const num1 = splitPhoneNum[0] // 010
const num2 = splitPhoneNum[1] // 5214
const num3 = splitPhoneNum[2] // 5805
*/
