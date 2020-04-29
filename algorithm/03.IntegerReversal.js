// 1차 답안
// 반성: parseInt('00012-') -> 12 로 나온다.
const reverseInt = (n) => {
  let isNotZero = false
  return parseInt(('' + n).split('').reverse().reduce((a, c) => {
    if (c === '0' && !isNotZero) return a
    isNotZero = true
    if (c === '-') return '-' + a
    return a + c 
  }, ''))
}

// 모범 답안
const reverseInt2 = (n) => parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)

console.log(reverseInt(123000))   // 321
console.log(reverseInt(1230001))  // 1000321
console.log(reverseInt(-123000))  // -321

console.log(reverseInt2(123000))   // 321
console.log(reverseInt2(1230001))  // 1000321
console.log(reverseInt2(-123000))  // -321