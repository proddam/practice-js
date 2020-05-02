class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertHead(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let size = 0
    let node = this.head
    while(node) {
      size++
      node = node.next
    }
    return size
  }

  getHead() {
    return this.head
  }

  getTail() {
    let node = this.head
    while(node) {
      if (!node.next) return node
      node = node.next
    }
    return node 
  }

  clear() {
    this.head = null
  }

  removeHead() {
    if (!this.head) return
    this.head = this.head.next
  }

  removeTail() {
    if (!this.head) return
    if (!this.head.next) {
      this.head = null 
      return
    }
    let node = this.head
    while (node) {
      if (node.next && !node.next.next) { 
        node.next = null
        return 
      }
    }
  }

  insertTail(data) {
    if (!this.head) return this.insertHead(data)
    this.getTail().next = new Node(data)
  }

  getAt(idx) {
    // let node = this.head
    // for( let i=0; i<idx; i++) node = node.next
    // return node 
    
    let jdx = 0
    let node = this.head
    while (node) {
      if (idx === jdx) return node
      jdx++
      node = node.next
    }
    return null
  }

  removeAt(idx) {
    if (!this.head) return
    if (idx === 0) {
      this.head = this.head.next
      return
    }
    let prev = this.getAt(idx - 1)
    if (!prev || !prev.next) return 
    prev.next = prev.next.next
  }

  insertAt(idx, data) {
    if (!this.head || idx === 0) {
      this.insertHead(data)
      return
    }
    let prev = this.getAt(idx - 1) || this.getTail()
    if (!prev) return
    prev.next = new Node(data, prev.next)
  }

  forEach(fn) {
    let node = this.head
    let index = 0;
    while (node) {
      fn(node, index)
      node = node.next
      index++
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }
}

const assert = require('assert')
describe("Linked List", () => {
  it("Should implement insertHead", () => {
   const chain = new LinkedList();
   chain.insertHead(1);
   assert.equal(chain.head.data, 1);
  });
  it("Should implement size", () => {
   const chain = new LinkedList();
   chain.insertHead(1);
   assert.equal(chain.size(), 1);
  });
  it("Should implement getHead", () => {
   const chain = new LinkedList();
   chain.insertHead(1);
   assert.equal(chain.getHead().data, 1);
  });
  it("Should implement getTail", () => {
   const chain = new LinkedList();
   chain.insertHead(1);
   assert.equal(chain.getTail().data, 1);
  });
  it("Should implement clear", () => {
   const chain = new LinkedList();
   chain.insertHead(1);
   chain.clear();
   assert.equal(chain.size(), 0);
  });
  it("Should implement removeHead", () => {
   const chain = new LinkedList();
   chain.insertHead(1);
   chain.removeHead();
   assert.equal(chain.size(), 0);
  });
  it("Should implement removeTail", () => {
   const chain = new LinkedList();
   chain.insertHead(1);
   chain.removeTail();
   assert.equal(chain.size(), 0);
  });
  it("Should implement insertTail", () => {
   const chain = new LinkedList();
   chain.insertTail(1);
   assert.equal(chain.getTail().data, 1);
  });
  it("Should implement getAt", () => {
   const chain = new LinkedList();
   chain.insertHead(1);
   assert.equal(chain.getAt(0).data, 1);
  });
  it("Should implement removeAt", () => {
   const chain = new LinkedList();
   chain.insertHead(1);
   chain.removeAt(0);
   assert.equal(chain.size(), 0);
  });
  it("Should implement insertAt", () => {
   const chain = new LinkedList();
   chain.insertAt(0, 1);
   assert.equal(chain.getAt(0).data, 1);
  });
  it("Should implement forEach", () => {
   const chain = new LinkedList();
   chain.insertHead(1);
   chain.insertHead(2);
   chain.forEach((node, index) => (node.data = node.data + index));
   assert.equal(chain.getTail().data, 2);
  });
  it("Should implement iterator", () => {
   const chain = new LinkedList();
   chain.insertHead(1);
   chain.insertHead(2);
   for (let node of chain) node.data = node.data + 1;
   assert.equal(chain.getTail().data, 2);
  });
 });