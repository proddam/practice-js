class Stack {
  constructor() {
    this.data = []
  }
  push(elm) {
    this.data.push(elm)
  }
  pop() {
    return this.data.pop()
  }
  peek() {
    return this.data[this.data.length - 1]
  }
}

class Queue {
  constructor() {
    this.first = new Stack()
    this.second = new Stack()
  }
  enqueue(elm) {
    this.first.push(elm)
  }
  dequeue() {
    if (!this.second.peek()) while (this.first.peek()) this.second.push(this.first.pop())
    return this.second.pop()
  }
  peek() {
    if (!this.second.peek()) while (this.first.peek()) this.second.push(this.first.pop())
    return this.second.peek()
  }
}

const assert = require('assert')
describe("Queue from Stacks", () => {
  it("Should implement queue using two stacks", () => {
   const queue = new Queue();
   queue.enqueue(1);
   queue.enqueue(2);
   queue.enqueue(3);
   assert.equal(queue.peek(), 1);
   assert.equal(queue.dequeue(), 1);
   assert.equal(queue.dequeue(), 2);
   queue.enqueue(4);
   queue.enqueue(5);
   assert.equal(queue.dequeue(), 3);
   queue.enqueue(6);
   assert.equal(queue.dequeue(), 4);
   assert.equal(queue.dequeue(), 5);
   assert.equal(queue.dequeue(), 6);
   assert.equal(queue.dequeue(), undefined);
  });
 });