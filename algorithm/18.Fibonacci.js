// 내 답안
// fibonacci:  0 1 1 2 3 5 8 13 21 34
// 0을 0항으로 본다.
// recursive function으로 만들면 간단하지만...
// O(2^n) 어마무시한 시간복잡도(time complexity)가 생긴다.
// 이를 단순히 O(n)으로 만드는게 좋다. 
const fibonacci = (idx) => {
  if (idx < 2) return idx

  let a = 0
  let b = 1
  let c = 0
  
  for (let i=2; i<=idx; i++) {
    c = a + b
    a = b
    b = c
  }
  return c
}

const fibonacci2 = (idx) => {
  if (idx < 2) return idx
  return fibonacci2(idx-1) + fibonacci2(idx-2)
}


const assert = require('assert')
describe("Fibonacci", () => {
  it("Should implement fibonacci", () => {
    assert.equal(fibonacci(1), 1);
    assert.equal(fibonacci(2), 1);
    assert.equal(fibonacci(3), 2);
    assert.equal(fibonacci(6), 8);
    assert.equal(fibonacci(10), 55);
  })

  it("Should implement fibonacci2", () => {
   assert.equal(fibonacci2(1), 1);
   assert.equal(fibonacci2(2), 1);
   assert.equal(fibonacci2(3), 2);
   assert.equal(fibonacci2(6), 8);
   assert.equal(fibonacci2(10), 55);
  });
});
