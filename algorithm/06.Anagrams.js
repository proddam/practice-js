// 내 답안
// 반성:
// 1. object는 for of loop를 돌 수 없다. 무조건 for key in 으로 해야함.
// 2. 알파벳 문자만 처리하도록 해야한다.
// 3. Object.keys(obj), Object.values(obj) 다시 확인하도록.
// 4. 문자열을 문자단위로 소팅하고 차례대로 비교해도 좋다.

const checkAnagram = (strA, strB) => {
  let mapCount = {}
  for (let c of strA.toLowerCase()) {
    mapCount[c] = mapCount[c] + 1 || 1
  }
  
  console.log(mapCount)
  for (let c of strB.toLowerCase()) {
    if (!mapCount[c]) return false 
    mapCount[c] = mapCount[c] - 1
  }

  console.log(mapCount)
  for (let key in mapCount) {
    if (mapCount[key] !== 0) return false
  }
  return true
}

console.log(checkAnagram('Hello World!', 'world hello'))
console.log(checkAnagram('Hello World', 'world hello'))

// 모범 답안 - O(n)
const generateCharMap = (str) => {
  let map = {}
  for (let c of str.replace(/\W/g, '').toLowerCase()) 
    map[c] = map[c] + 1 || 1
  return map
}

const checkAnagram2 = (strA, strB) => {
  let mapA = generateCharMap(strA)
  let mapB = generateCharMap(strB)

  if (Object.keys(mapA).length != Object.keys(mapB).length) return false

  for (let key in mapA) {
    if (mapA[key] !== mapB[key]) return false
  }
  return true
}

console.log(checkAnagram2('Hello World!a', 'world hello'))
console.log(checkAnagram2('Hello World', 'world hello'))

// sort 이용 방법 - 그러나 O(n Log n)
const getSortedString = (str) => str.replace(/\W/g,'').toLowerCase().split('').sort().join('')
const checkAnagram3 = (strA, strB) => getSortedString(strA) === getSortedString(strB)

console.log(checkAnagram3('Hello World!a', 'world hello'))
console.log(checkAnagram3('Hello World', 'world hello'))
