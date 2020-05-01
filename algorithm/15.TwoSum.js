// 내 답안
// 1. sort를 우선 한다는게 특징. 그러나 O(n log n)
// 2. 모범답안은 O(n)
// 3. 그런데 좀 문제가 모호하다. 주어진 배열에서만 쌍을 골라야 한다면 문제가 정상이다.
const twoSum = (arr, sum) => {
  let sarr = arr.concat().sort()
  let pairs = []
  
  let prevA = -1
  for (let i=0; i < sarr.length; i++) {
    let a = sarr[i]
    if (a > sum / 2) break;
    if (prevA == a) continue;    
    if (sarr.includes(sum - a)) pairs.push([a, sum - a])
    prevA = a
  }
  return pairs
}

const twoSum2 = (arr, sum) => {
  let pairs = []
  let used = []

  for (let a of arr) {
    let b = sum - a
    if (used.includes(b)) pairs.push([b, a])
    used.push(a)
  }
  return pairs
}

const assert = require('assert')
describe("Two Sum", () => {
  it("Should implement two sum", () => {
   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[1, 3], [2, 2]]);
   assert.deepEqual(twoSum([4, 3, 1, 2], 4), [[1, 3], [2, 2]]);
   assert.deepEqual(twoSum2([1, 2, 2, 3, 4], 4), [[2, 2], [1, 3]]);
   assert.deepEqual(twoSum2([4, 3, 1, 2], 4), [[3, 1]]);
  });
 });
