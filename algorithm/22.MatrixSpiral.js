// 내 답안
// 1. 내 방식은 dir(방향)으로 유도한 방식
const spiral = (num) => {
  let matrix = []
  for (let i=0; i<num; i++) matrix.push(new Array(num))

  let x = 0
  let y = 0
  let dir = [{dx:1, dy:0}, {dx:0, dy:1}, {dx:-1, dy:0}, {dx:0, dy:-1}]
  let curDir = 0
  for (let i=1; i<=num*num; i++) {
    console.log(x,y,i)
    matrix[y][x] = i

    sx = x
    sy = y
 
    x += dir[curDir].dx
    y += dir[curDir].dy

    if (x < 0 || y < 0 || x >= num || y >= num || matrix[y][x] !== undefined) {
      // 방향을 튼다
      curDir = (curDir + 1) % 4
      x = sx + dir[curDir].dx
      y = sy + dir[curDir].dy
    }
  }
  return matrix
}

// 답안
// startCol, endCol, startRow, endRow 방식
const _spiral = (num) => {
  let matrix = []
  for (let i=0; i<num; i++) matrix.push([])

  let startCol = 0, startRow = 0
  let endCol = num-1, endRow = num-1

  let value = 1
  while (startCol <= endCol && startRow <= endRow) {
    // 여기서 360도 한바뀌 돌자!
    for (let i=startCol; i<=endCol; i++) matrix[startRow][i] = value++
    startRow++

    for (let i=startRow; i<=endRow; i++) matrix[i][endCol] = value++
    endCol--

    for (let i=endCol; i>=startCol; i--) matrix[endRow][i] = value++
    endRow--

    for (let i=endRow; i>=startRow; i--) matrix[i][startCol] = value++
    startCol++
  }
  return matrix
}

const assert = require('assert')
describe("Matrix Spiral", () => {
  it("Should implement matrix spiral", () => {
   assert.deepEqual(spiral(3), [[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
   assert.deepEqual(_spiral(3), [[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
  });
 });
