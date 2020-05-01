// 내 답안
const memos = []
const fibonacci = (idx) => {
  if (idx < 2) return idx
  if (memos[idx]) return memos[idx]
  return memos[idx] = fibonacci(idx-1) + fibonacci(idx-2)
}

// high-order utiltiy function 사용
const _memoize = (fn) => {
  const cache = {};
  return (...args) => {
    if (cache[args]) return cache[args]
    let ret = fn.apply(this, args)
    cache[args] = ret
    console.log(args, cache)
    return ret
  }
}
const _fibonacci = (idx) => {
  if (idx < 2) return idx
  console.log('_fibonacci', idx)
  return fibonacci2(idx-1) + fibonacci2(idx-2)
}
const fibonacci2 = _memoize(_fibonacci)

const assert = require('assert')
describe("Memoized Fibonacci", () => {
  it("Should implement memoized fibonacci", () => {
   assert.equal(fibonacci(6), 8);
   assert.equal(fibonacci(10), 55);
   assert.equal(fibonacci2(10), 55);
   assert.equal(fibonacci2(6), 8);
  });
 });