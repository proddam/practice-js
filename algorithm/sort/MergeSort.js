// merge sort alogrithm 설명
// 1. arr를 딱 반으로 쪼갠다.
// 2. left, right arr를 재귀 호출을 통해 length 1이 될 때까지 쪼갠다. (재귀호출)
// 3. left, right arr는 정렬되었다는 가정하에 각 요소를 비교하여 하나로 다시 합친다.

// 내 답안 1
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr
  // 일단 반으로 나눈다.
  let mIdx = Math.round(arr.length/2)
  let leftArr = arr.slice(0, mIdx)
  let rightArr = arr.slice(mIdx)

  console.log(1, leftArr, rightArr)

  if (leftArr.length > 0) leftArr = mergeSort(leftArr)
  if (rightArr.length > 0) rightArr = mergeSort(rightArr)


  // 여기부터는 leftArr, rightArr 각각 sorting 완료된 것으로 생각한다.
  let leftIdx = 0;
  let rightIdx = 0;
  let sortedArr = [];

  // 두 array를 원소를 비교해서 하나의 sorted array로 merge한다.
  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    console.log(leftIdx, leftArr.length, rightIdx, rightArr.length)
    if (leftArr[leftIdx] < rightArr[rightIdx]) {
      sortedArr.push(leftArr[leftIdx])
      leftIdx++
    }
    else {
      sortedArr.push(rightArr[rightIdx])
      rightIdx++
    }
  }
  // 남은 요소들 채워 넣기
  sortedArr.push(...leftArr.slice(leftIdx), ...rightArr.slice(rightIdx))
  
  return sortedArr;
}

// 1안 정리. leftIdx, rightIdx를 shift로 대체
const _mergeSort = (arr) => {
  if (arr.length <= 1) return arr

  let mIdx = Math.round(arr.length/2)
  let left = _mergeSort(arr.slice(0, mIdx))
  let right = _mergeSort(arr.slice(mIdx))

  let sortedArr = []
  while (left.length && right.length) {
    if (left[0] < right[0]) sortedArr.push(left.shift())
    else sortedArr.push(right.shift())
  }
  return [...sortedArr, ...left, ...right] 
}


const assert = require('assert')

describe("Merge Sort", () => {
  it("Should implement merge sort", () => {
    assert.deepEqual(mergeSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(mergeSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
    assert.deepEqual(_mergeSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(_mergeSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
  });
});
