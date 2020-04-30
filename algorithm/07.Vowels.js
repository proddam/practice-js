const assert = require('assert')

// 내 답안
// 반성
// 0. string도 for of loop 사용하면 된다.
// 1. String.prototype.includes 사용이 더 깔끔해 보임
// 2. RegEx 및 String.prototype.match 기능 사용할 수 있으면 이것이 더 깔끔

const countVowels = (str) => {
  const vowels = 'aiueo'
  return str.toLowerCase().split('').reduce((a,c) => vowels.indexOf(c) > -1 ? a+1 : a, 0)
}

const countVowels3 = (str) => {
  const vowels = 'aiueo'
  let count = 0
  for (let c of str.toLowerCase()) if (vowels.includes(c)) count++
  return count
}

// RegEx 사용
const countVowels2 = (str) => (str.match(/[aiueo]/gi) || []).length

describe("Vowels", () => {
  it("Should count vowels", () => {
    assert.equal(countVowels("hello world"), 3)
  })

  it("Should count vowels2", () => {
    assert.equal(countVowels2("hello world"), 3)
  })

  it("Should count vowels3", () => {
    assert.equal(countVowels3("hello world"), 3)
  })
})
