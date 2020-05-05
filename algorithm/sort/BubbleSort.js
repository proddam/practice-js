const bubbleSort = (arr) => {
  for (let i=0; i<arr.length; i++) {
    // 맨 끝 부분은 뒤에 이어진 부분이 없기 때문에 한번 swap이 일어나면 더 이상 swap 할 필요가 없다.
    // 고로 루프 횟수에 -i 해도 됨
    for (let j=0; j<arr.length-1-i; j++) {
      if (arr[j] > arr[j+1]) [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ]
    }
  }   
  return arr
}

const _bubbleSort = (arr )=> {
  let swapped = true
  while (swapped) {
    swapped = false
    arr.forEach((n, idx) => {
      if (n > arr[idx + 1]) {
        [ arr[idx], arr[idx+1 ] ] = [ arr[idx+1], arr[idx] ]
        swapped = true
      }
    })
  }
  return arr
}

const assert = require('assert')
describe("Bubble Sort", () => {
  it("Should implement bubble sort", () => {
    assert.deepEqual(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(bubbleSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
    assert.deepEqual(_bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(_bubbleSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
  });
});
