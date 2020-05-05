// Counting Sort
// 1. 최대값이나 범위를 알 때 사용
// 2. element 갯수를 센다.
// 3. 
const countingSort = (arr, max) => {
  let counting = []
  for (let n of arr) counting[n] = counting[n] + 1 || 1
  console.log(counting)

  let result = []
  for (let i=0; i<=max; i++) {
    while (counting[i]) {  
      result.push(i)
      counting[i]--
    }
  } 
  return result 
}

const assert = require('assert')

describe("Counting Sort", () => {
  it("Should implement counting sort", () => {
      assert.deepEqual(countingSort([4, 3, 2, 1, 0], 4), [0, 1, 2, 3, 4]);
      assert.deepEqual(countingSort([4, 3, 1, 2, 3], 4), [1, 2, 3, 3, 4]);
      assert.deepEqual(countingSort([4, 3, 7, 1, 2, 3], 9), [1, 2, 3, 3, 4, 7]);
  });
});
