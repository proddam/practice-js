function Queue() {
  this.data = []
  this.enqueue = (elm) => this.data.push(elm)
  this.dequeue = () => this.data.shift()
  this.size = () => this.data.length
  this.print = () => console.log(this.data)
}

let queue = new Queue()

queue.enqueue(1)
queue.enqueue('a')
queue.enqueue(2.345)
queue.print() // [1, 'a', 2.345]

console.log(queue.size()) // 3
console.log(queue.dequeue()) // 1
console.log(queue.dequeue()) // 'a'

queue.print() // [ 2.345 ]
console.log(queue.size()) // 1

queue.enqueue('b')
queue.print() // [ 2.345, 'b' ]
