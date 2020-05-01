// 내 답안
// 1. 뒤에서 앞으로 루프 돈다.
const maxProfit = (arr) => {
  let prevMaxA = -1
  let maxDiff = 0
  let result = []
  for (let i=arr.length-1; i>0; i--) {
    let a = arr[i]
    if (a > prevMaxA) {
      for (let j=i-1; j>=0; j--) {
        let b = arr[j]
        if ((a - b) > maxDiff) {
          maxDiff = a - b
          result = [b, a]
        }
      }
      prevMaxA = a
    }   
  }
  return result
}

const maxProfit2 = (arr) => {
  let minBuyPrice = arr[0] < arr[1] ? arr[0] : arr[1]
  let maxSellPrice = arr[0] < arr[1] ? arr[1] : arr[2]
  let maxProfit = maxSellPrice - minBuyPrice
  let minBuyPriceInTheFutre = minBuyPrice

  for (let i=2; i < arr.length; i++) {
    if (minBuyPrice > arr[i]) minBuyPriceInTheFutre = arr[i]
    else {
      let profit = arr[i] - minBuyPriceInTheFutre
      if (profit > maxProfit) {
        maxProfit = profit
        maxSellPrice = arr[i]
        minBuyPrice = minBuyPriceInTheFutre
      }
    }
  }
  return [minBuyPrice, maxSellPrice]
}

const assert = require('assert')

describe("Max Profit", () => {
  it("Should return minimum buy price and maximum sell price", () => {
    assert.deepEqual(maxProfit([1, 2, 3, 4, 5]), [1, 5]);
    assert.deepEqual(maxProfit([2, 1, 5, 3, 4]), [1, 5]);
    assert.deepEqual(maxProfit([3, 4, 5, 1, 4]), [1, 4]);
    assert.deepEqual(maxProfit([2, 10, 1, 3]), [2, 10]);
    assert.deepEqual(maxProfit([2, 1, 2, 11]), [1, 11]);
    assert.deepEqual(maxProfit2([1, 2, 3, 4, 5]), [1, 5]);
    assert.deepEqual(maxProfit2([2, 1, 5, 3, 4]), [1, 5]);
    assert.deepEqual(maxProfit2([3, 4, 5, 1, 4]), [1, 4]);
    assert.deepEqual(maxProfit2([2, 10, 1, 3]), [2, 10]);
    assert.deepEqual(maxProfit2([2, 1, 2, 11]), [1, 11]);
  })
})
