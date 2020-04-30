// 내 답안
// 
const ransomNote = (note, mz) => {
  let dict = {}
  mz.split(/\W/).forEach((w) => dict[w] = (dict[w] + 1) || 1)

  for (let w of note.split(/\W/)) {
    if (!dict[w]) return false
    dict[w]--
  }
  return true
}

const assert = require('assert')
const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
describe("Ransom Note", () => {
 it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint", magazine), true);
 });
it("Should return false", () => {
  assert.equal(ransomNote("sit ad est love", magazine), false);
 });
it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint in in", magazine), true);
 });
it("Should return false", () => {
  assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
 });
});
