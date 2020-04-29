const reverse = (str) => str.split('').reduce((a,c) => c + a)

console.log(reverse('hello world!'))
