const quickSort = (arr) => {
  if (arr.length <= 1) return arr
  let pivotIdx = arr.length - 1

  // 1단계 partition
  // pivot의 왼쪽은 pivot보다 작은 elements들
  // 오른쪽은 pivot 보다 큰 elements들로
  // 위치시킨다.
  let smallCount = 0
  for (let j=0; j<arr.length -1; j++) {
    if (arr[j] < arr[pivotIdx]) {
      // pivot 값보다 작으면 차곡차곡 작은 배열에 쌓아 놓는다.
      [arr[j], arr[smallCount]] = [arr[smallCount], arr[j]]
      smallCount++
    }
  }
  // 한번의 loop를 다 돌았으면
  // pivot의 최종 위치는 smallCount가 된다. swap
  [arr[smallCount], arr[pivotIdx]] = [arr[pivotIdx], arr[smallCount]]
  console.log(arr, smallCount)


  let leftArray = arr.slice(0, smallCount)
  let rightArray = arr.slice(smallCount+1)
  console.log('left', leftArray)
  console.log('right', rightArray)
  
  // recursive calls for left, right array
  return quickSort(leftArray).concat(arr[smallCount], quickSort(rightArray))
}


const assert = require('assert')

describe("Quick Sort", () => {
  it("Should implement quick sort", () => {
      assert.deepEqual(quickSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
      assert.deepEqual(quickSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
  });
});
