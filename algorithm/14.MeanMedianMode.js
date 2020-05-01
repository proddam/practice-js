// 내 답안
// 1. round 구현이 흥미롭다. 유효자리 소숫점 세째 자리까지의 rounding 이라면 
//    Math.round(value * 1000) / 1000 
// 2. Object.keys(), Object.values()를 잘 알아두자.

class Stats {
  constructor(arr) {
    this.arr = arr
  }
  static round(value, round=2) {
    return Math.round(value * Math.pow(10, round)) / Math.pow(10, round)
  }
  mean() {
    return this.arr.reduce((a,c) => a+c, 0) / this.arr.length
  }

  median() {
    let arr2 = this.arr.concat()
    arr2.sort((a, b) => a - b)
    if (arr2.length % 2 == 0) {
      let i = arr2.length / 2
      return (arr2[i-1] + arr2[i]) / 2
    } 
    return arr2[(arr2.length - 1)/2] 
  }

  mode() {
    let countMap = {}
    let maxCount = 0
    for (let n of this.arr) {
      countMap[n] = countMap[n] + 1 || 1
      maxCount = Math.max(maxCount, countMap[n])
    }
    
    let result = []
    let count = 0
    for (let n in countMap) {
      count++
      if (countMap[n] == maxCount) result.push(parseInt(n))
    }

    return (result.length == count) ? [] : result
  }
}

const stat1 = new Stats([1, 2, 3, 4, 4, 5, 5]);
const stat2 = new Stats([1, 1, 2, 2, 3, 3, 4, 4]);

const assert = require('assert')

describe("Mean", () => {
 it("Should implement mean", () => {
  assert.equal(Stats.round(stat1.mean()), 3.43);
  assert.equal(Stats.round(stat2.mean()), 2.5);
 });
});
describe("Median", () => {
 it("Should implement median", () => {
  assert.equal(stat1.median(), 4);
  assert.equal(stat2.median(), 2.5);
 });
});
describe("Mode", () => {
 it("Should implement mode", () => {
  assert.deepEqual(stat1.mode(), [4, 5]);
  assert.deepEqual(stat2.mode(), []);
 });
});