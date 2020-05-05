const selectionSort = (arr) => {
  let startIdx = 0
  
  while (startIdx < arr.length) {
    let minIdx = startIdx
    for (let i=startIdx + 1; i<arr.length; i++) {
      if (arr[minIdx] > arr[i]) minIdx = i
    }
    [ arr[startIdx], arr[minIdx] ] = [ arr[minIdx], arr[startIdx] ]
    startIdx++
  }

  return arr
}

const assert = require('assert');

describe("Selection Sort", () => {
  it("Should implement selection sort", () => {
    assert.deepEqual(selectionSort([4, 3, 3, 2, 1]), [1, 2, 3, 3, 4]);
    assert.deepEqual(selectionSort([4, 3, 1, 2, 3]), [1, 2, 3, 3, 4]);
  });
});
