class Node {
  constructor(value, prev, next) {
    this.value = value
    this.next = next
    this.prev = prev
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addToHead(value) {
    const node = new Node(value, null, this.head)
    if (this.head) this.head.prev = node
    else this.tail = node
    this.head = node
  }

  addToTail(value) {
    const node = new Node(value, this.tail, null)
    if (this.tail) this.tail.next = node
    else this.head = node
    this.tail = node
  }

  removeHead() {
    if (!this.head) return null
    const value = this.head.value
    this.head = this.head.next
    if (this.head) this.head.prev = null
    else this.tail = null
    return value
  }

  removeTail() {
    if (!this.tail) return null
    const value = this.tail.value
    this.tail = this.tail.prev
    if (this.tail) this.tail.next = null
    else this.head = null
    return value 
  }

  search(value) {
    let current = this.head
    while (current) {
      if (current.value === value) return current
      current = current.next
    }
    return null
  }

  indexOf(value) {
    const indexes = []
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) indexes.push(index)
      current = current.next
      index++ 
    }
    return indexes
  }
}

const list = new LinkedList();
list.addToHead(1)
list.addToHead(2)
list.addToHead(3)

console.log('head', list.head)
console.log('tail', list.tail)

console.log('search 2', list.search(2))
console.log('indexOf 2', list.indexOf(2))