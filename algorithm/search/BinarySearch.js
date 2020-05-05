// 첫번째는 recursive한 방법임.
const binarySearch = (arr, x) => {
  if (arr.length < 1) return false
  
  let midIdx = Math.floor(arr.length/2)
  let mid = arr[midIdx]
  if (x === mid) return true
  if (x < mid) return binarySearch(arr.slice(0, midIdx), x)
  return binarySearch(arr.slice(midIdx), x)
}

// 두번째는 그냥 iterative한 방법
const _binarySearch = (arr, x) => {
  let startIdx = 0
  let endIdx = arr.length-1

  while (startIdx <= endIdx) {
    let diff = Math.floor(endIdx - startIdx)/2
    let mid = arr[startIdx + diff]
    if (x === mid) return true
    if (x < mid) endIdx = startIdx + diff - 1
    else startIdx = startIdx + diff + 1
  }
  return false
}


const assert = require('assert')

describe("Binary Search", () => {
  it("Should implement binary search", () => {
      assert.equal(binarySearch([1, 2, 3, 4, 5], 0), false);
      assert.equal(binarySearch([1, 2, 3, 4, 5, 6], 6), true);
      
      assert.equal(_binarySearch([1, 2, 3, 4, 5], 0), false);
      assert.equal(_binarySearch([1, 2, 3, 4, 5, 6], 6), true);
  });
});
