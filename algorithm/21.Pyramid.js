// 내 답안
// 특별한 것은 없다. 직전 Staircase.js와 유사
const pyramid = (num) => {
  let levels = ''
  let width = 2 * num-1
  for (let i=0; i<num; i++) {
    let spaceWidth = (width - 1)/2 - i
    let level = ''
    for (let j=0; j<width; j++) {
      if (j < spaceWidth || j >= width - spaceWidth) level += ' '
      else level += '#'
    }
    levels += level + '\n'
  }
  return levels
}

const _pyramid = (num, nth = 0, level = "", levels = "") => {
  // 맨 마지막 레벨을 초과했으면 지금까지 만들어진 levels를 최종 리턴해라.
  if (nth == num) return levels
  
  // 마지막 문자까지 현 level에 추가했다면 다음 level 만드는 작업으로 가라!  
  // nth 1 증가, level 초기화, levels 에 level + '\n' 추가
  let maxLevelLen = 2 * num - 1
  if (level.length == maxLevelLen) 
    return _pyramid(num, nth+1, "", levels + level + '\n')

  // 현 nth level을 계속 만들어야 한다. 
  // line 에 # 또는 공백문자 추가
  return _pyramid(num, nth, 
    level + 
    ((level.length < (num-1-nth) || 
     level.length >= maxLevelLen - (num-1-nth)) ? ' ':'#'),
    levels
  )
}

const assert = require('assert')
describe("Pyramid", () => {
  it("Should print pyramid", () => {
   assert.equal(pyramid(3), "  #  \n ### \n#####\n");
   assert.equal(_pyramid(3), "  #  \n ### \n#####\n");
  });
 });
