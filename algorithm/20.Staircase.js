// 내 답안
const steps = (num) => {
  let lines = ''
  for (let i=0; i<num; i++) {
    let line = ''
    for (let j=0; j<num; j++) {
      line += (j<=i) ? '#' : ' '
    }
    lines += line + '\n'
  }
  return lines
}

const _steps = (number, row = 0, line = "", stairs = "") => {
  if (row === number) return stairs;
  if (line.length === number) return _steps(number, row + 1, "", stairs + line + "\n");
  return _steps(number, row, line + (line.length <= row ? "#" : " "), stairs);
};

const assert = require('assert')
describe("Steps", () => {
  it("Should print steps", () => {
   assert.equal(steps(3), "#  \n## \n###\n");
   assert.equal(_steps(3), "#  \n## \n###\n");
  });
});
