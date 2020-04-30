const capitalize = (str) => str.split(' ').map((w) => w.split('').reduce((a, c, i) => (i==0 && c >= 'a' && c <= 'z') ? c.toUpperCase() : a + c, '')).join(' ')

const capitalize2 = (str) =>
  str.split(' ').map((w) => (w.length > 0) ? w[0].toUpperCase() + w.substr(1) : w).join(' ')

const assert = require('assert')
describe('Capitalization', () => {
  it('Should capitalize every word', () => {
    assert.equal(capitalize("hello world"), "Hello World");
  })
  it('Should capitalize2 every word', () => {
    assert.equal(capitalize2("hello world"), "Hello World");
  })
})