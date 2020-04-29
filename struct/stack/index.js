function Stack() {
  let arr = []
  this.push = (elm) => arr.push(elm) 
  this.pop = () => arr.pop()
  this.peek = () => (arr.length > 0) ? arr[arr.length - 1] : null
  this.isEmpty = () => arr.length === 0
  this.size = () => arr.length
  this.clear = () => arr = []
  this.print = () => console.log(arr)
}

let stack = new Stack()

stack.push('a')
stack.push(2)
stack.push(1.234)
stack.print()               // ['a', 2, 1.234]
console.log(stack.size())   // 3

console.log(stack.pop())    // 1.234
console.log(stack.size())   // 2

console.log(stack.pop())    // 2    
console.log(stack.size())   // 1
