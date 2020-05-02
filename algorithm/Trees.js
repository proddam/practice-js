// 기억할 점
// 1. BFS queue를 이용한다. shift, push - shortest path 찾는 알고리즘에서 많이 사용
// 2. DFS stack을 이용한다. shift, unshift

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  addChild(data) {
    this.children.push(new Node(data))
  }

  removeChild(data) {
    this.children = this.children.filter(node => node.data != data)
  }
}

class Tree {
  constructor(node = null) {
    this.root = node
  }
  
  traverseBF(fn) {
    const queue = [this.root]
    while (queue.length) {
      const node = queue.shift()
      queue.push(...node.children)
      fn(node)
    }
  }

  traverseDF(fn) {
    const stack = [this.root]
    while (stack.length) {
      const node = stack.shift()
      stack.unshift(...node.children)
      fn(node)
    }
  }
}

const assert = require('assert')
describe("Trees", () => {
  it("Should add and remove nodes", () => {
   const root = new Node(1);
   root.addChild(2);
   assert.equal(root.data, 1);
   assert.equal(root.children[0].data, 2);
   root.removeChild(2);
   assert.equal(root.children.length, 0);
  });
  it("Should traverse by breadth", () => {
   const tree = new Tree();
   tree.root = new Node(1);
   tree.root.addChild(2);
   tree.root.addChild(3);
   tree.root.children[0].addChild(4);
   const numbers = [];
   tree.traverseBF(node => numbers.push(node.data));
   assert.deepEqual(numbers, [1, 2, 3, 4]);
  });
  it("Should traverse by depth", () => {
   const tree = new Tree();
   tree.root = new Node(1);
   tree.root.addChild(2);
   tree.root.addChild(3);
   tree.root.children[0].addChild(4);
   const numbers = [];
   tree.traverseDF(node => numbers.push(node.data));
   assert.deepEqual(numbers, [1, 2, 4, 3]);
  });
 });


const treeWidths = (root) => {
  let queue = [root, "reset"]
  let counters = [0]
  
  while (queue.length >= 2) {
    let node = queue.shift()
    if (node === "reset") {
      counters.push(0)
      queue.push("reset") // 뒤에 level 구분자로 넣어준다.
    } else {
      // console.log(...node.children)
      queue.push(...node.children)
      counters[counters.length - 1]++
    }
  }
  return counters
}

 describe("Width of Tree Levels", () => {
  it("Should return width of each tree level", () => {
   let rt = new Node(1);
   rt.addChild(2);
   rt.addChild(3);
   rt.children[1].addChild(4);
   assert.deepEqual(treeWidths(rt), [1, 2, 1]);
  });
 });