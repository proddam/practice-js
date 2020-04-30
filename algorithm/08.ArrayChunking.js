// 내 답안
const chunkArray = (arr, size) => {
  let results = []
  for (let i=0; i<arr.length; i+=size) {
    results.push(arr.slice(i, i+size))
  }
  return results
}

const assert = require('assert')
describe('Array Chunking', () => {
  it('Should chunk array', () => {
    assert.deepEqual(chunkArray([1,2,3,4,5,6,7,8], 3), [[1,2,3],[4,5,6],[7,8]])
    assert.deepEqual(chunkArray([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
    assert.deepEqual(chunkArray([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
    assert.deepEqual(chunkArray([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
  })
})
