// 내 답안
// 반성:
// 1. loop를 반만 돌면서 in-place로 swap 하면 더 좋다. 여하튼 O(n) 
// 2. destructuring assignment를 이용하는 방법도 있다
const reverseArray = (arr) => {
  let result = []
  // for (let elm of arr) result.unshift(elm)
  for (let i=arr.length-1; i>=0; i--) result.push(arr[i]) 
  return result
}

const reverseArray2 = (arr) => {
  for (let i=0; i < arr.length/2; i++) {
    // let temp = arr[arr.length - 1 - i]
    // arr[arr.length - 1 - i] = arr[i]
    // arr[i] = temp

    let j = arr.length - 1 - i;
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}


const assert = require('assert')
describe('Reverse Array', () => {
  it('Should reverse an array', () => {
    assert.deepEqual(reverseArray([1,2,3]), [3,2,1])
    assert.deepEqual(reverseArray([1, 2, 3, 4]), [4, 3, 2, 1]);
    assert.deepEqual(reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
  })
  it('Should reverse an array 2', () => {
    assert.deepEqual(reverseArray2([1,2,3]), [3,2,1])
    assert.deepEqual(reverseArray2([1, 2, 3, 4]), [4, 3, 2, 1]);
    assert.deepEqual(reverseArray2([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
  })
})

let a = 1, b = 2;
// a: 1, b: 2
[a, b] = [b, a];

console.log(a,b)