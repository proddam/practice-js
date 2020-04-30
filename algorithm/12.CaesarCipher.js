// 내 답안 - 뭐 이리 복잡하냐?
// 0. ref의 code가 틀렸다. 정수 음수가 매우 크면 테스트 에러 냄.
// 1. lowerCase로 일단 만들어 처리하는게 간결
const caesarCipher = (org, offset) => {
  for (let i=0; i<org.length; i++) {
    let c = org[i]
    if (/[a-zA-z]/.test(c)) {
      let startCode = 'A'.charCodeAt()
      let endCode = 'Z'.charCodeAt()
      if (c === c.toLowerCase()) {
        startCode += 32 
        endCode += 32
      }
      let newCharCode = (c.charCodeAt() + offset)
      if (newCharCode < startCode) newCharCode = endCode + 1 - (startCode - newCharCode) % 26
      else if (newCharCode > endCode) newCharCode = startCode -1 + (newCharCode - endCode) % 26
      org = org.substr(0, i) + String.fromCharCode(newCharCode) + org.substr(i+1)
    }
  }
  return org
}

const caesarCipher2 = (org, offset) => {
  const lowerAlphabets = "abcdefghijklmnopqrstuvwxyz"
  const upperAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let result = ''
  let plus = (offset < 0) ? offset % 26 + 26 : offset % 26

  for (let c of org) {
    let idx = lowerAlphabets.indexOf(c)
    if (idx > -1) {
      result = result.concat(lowerAlphabets.charAt((idx + plus) % 26))
      continue
    } 
    idx = upperAlphabets.indexOf(c)
    if (idx > -1) {
      result = result.concat(upperAlphabets.charAt((idx + plus) % 26))
      continue
    } 
    result = result.concat(c)
  }
  return result 
}

const caesarCipher3 = (org, offset) => {
  const lowers = "abcdefghijklmnopqrstuvwxyz"
  let result = ''
  let plusOffset = (offset < 0) ? offset % 26 + 26 : offset % 26

  org2 = org.toLowerCase()
  for (let i = 0; i < org2.length; i++) {
    let idx = lowers.indexOf(org2[i])
    if (idx > -1) {
      let nc = lowers.charAt((idx + plusOffset) % 26)
      result += ((org[i] === org[i].toLowerCase()) ? nc : nc.toUpperCase())
    } 
    else result = result.concat(org2[i])
  }
  return result 
}


const assert = require('assert')
describe("Caesar Cipher", () => {
  it("Should shift to the right", () => {
   assert.equal(caesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!");
  });
  it("Should shift to the left", () => {
   assert.equal(caesarCipher("I love JavaScript!", -2600 -100), "M pszi NezeWgvmtx!");
  });
  it("Should shift to the right", () => {
   assert.equal(caesarCipher2("I love JavaScript!", 100), "E hkra FwrwOynelp!");
  });
  it("Should shift to the left", () => {
   assert.equal(caesarCipher2("I love JavaScript!", -2600 -100), "M pszi NezeWgvmtx!");
  });
  it("Should shift to the right", () => {
   assert.equal(caesarCipher3("I love JavaScript!", 100), "E hkra FwrwOynelp!");
  });
  it("Should shift to the left", () => {
   assert.equal(caesarCipher3("I love JavaScript!", -100), "M pszi NezeWgvmtx!");
  });
  it("Should shift to the left", () => {
   assert.equal(caesarCipher3("I love JavaScript!", -2600 - 100), "M pszi NezeWgvmtx!");
  });
 });
