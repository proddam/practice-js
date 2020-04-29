const checkPalindrome = (str) => {
  let str2 = str.toLowerCase()
  return str2.split('').reverse().join('') === str2
}

console.log(checkPalindrome('apple'))
console.log(checkPalindrome('appleelppa'))


const filterOnlyAlphabets = (str) => str.replace(/[^a-zA-Z]/g, '')
console.log(filterOnlyAlphabets('Hello I am Tom012 456Ok'))

console.log(checkPalindrome('Cigar? Toss it in a can. It is so tragic'))
console.log(checkPalindrome(filterOnlyAlphabets('Cigar? Toss it in a can. It is so tragic')))


const filter2 = (str) => {
  const validCharacters = "abcdefghijklmnopqrstuvwxyz".split('')
  return str.toLowerCase().split('').reduce((a, c) => validCharacters.indexOf(c) > -1 ? a + c : a, '')
}
console.log(filter2('Hello I am Tom012 456Ok'))
console.log(filter2('Cigar? Toss it in a can. It is so tragic'))

console.log(checkPalindrome(filter2('Cigar? Toss it in a can. It is so tragic')))
