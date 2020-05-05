// 이해
// https://www.youtube.com/watch?v=OGzPmgsI-pQ
const insertionSort = array => {
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < i; j++) {
        // i 번째 elment 빼서 j 번째 elment 앞에 삽입하기
          if (array[i] < array[j]) {
            array.splice(j, 0, array.splice(i, 1)[0])
            break;
          }
      }
  }
  return array;
};

const assert = require('assert');

describe("Insertion Sort", () => {
  it("Should implement insertion sort", () => {
      assert.deepEqual(insertionSort([4, 3, 3, 2, 1]), [1, 2, 3, 3, 4]);
      assert.deepEqual(insertionSort([4, 3, 1, 2, 3]), [1, 2, 3, 3, 4]);
  });
});
