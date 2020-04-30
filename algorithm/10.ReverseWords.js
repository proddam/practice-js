// 내 답안
// 1. for in loop 대신 map을 사용하는 것도 좋을 듯.
const reverseWords = (str) => {
  // let words = str.split(' ')
  // for (let idx in words) {
  //   words[idx] = words[idx].split('').reverse().join('')
  // }
  // return words.join(' ')
  return str.split(' ').map((w) => w.split('').reverse().join('')).join(' ')
}

const assert = require('assert')
describe('Reverse Words', () => {
  it('Should reverse words', () => {
    assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
  })
})