// 내 답안
// 반성
//   1. forEach 대신에 for (let c of str) 사용하면 더 깔끔할 듯.
//   2. undefined + 1 = NaN 이다.
const maxChar = (str) => {
  let mapCount = {}
  let max = 0
  let results = []

  // str.toLowerCase().split('').forEach((c) => {
  //   mapCount[c] = (mapCount[c] || 0)
  //   mapCount[c]++
  //   max = Math.max(max, mapCount[c])
  // })

  for (let c of str) {
    mapCount[c] = mapCount[c] + 1 || 1
    max = Math.max(max, mapCount[c])
  }
  
  for (let c in mapCount) if (mapCount[c] === max) results.push(c)
  return results
}

console.log(maxChar('Hello World!'))
console.log(maxChar('Hello oWorld!'))
