class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

  insert(data) {
    if (data <= this.data && this.left) this.left.insert(data)
    else if (data <= this.data) this.left = new Node(data)
    else if (data > this.data && this.right) this.right.insert(data)
    else if (data > this.data) this.right = new Node(data)
  }

  search(data) {
    if (data === this.data) return this
    if (data < this.data && this.left) return this.left.search(data)
    if (data > this.data && this.right) return this.right.search(data)
    return null
  }
}

const assert = require('assert')
describe("Binary Search Tree", () => {
  it("Should insert node", () => {
      const root = new Node(2);
      root.insert(1);
      root.insert(3);
      root.insert(0);
      assert.equal(root.left.left.data, 0);
  });

  it("Should implement search", () => {
      const root = new Node(2);
      root.insert(1);
      root.insert(3);
      root.insert(3);
      root.insert(0);
      assert.equal(root.search(3).data, 3);
      assert.equal(root.search(4), null);
  });
});

const validate = (node, min = null, max = null) => {
  if (max !== null && node.data > max) return false
  if (min !== null && node.data < min) return false
  
  if (node.left && !validate(node.left, min, node.data)) return false
  if (node.right && !validate(node.right, node.data, max)) return false

  return true
}

describe("Validate a Binary Search Tree", () => {
  it("Should validate a binary search tree", () => {
      const root = new Node(2);
      root.insert(1);
      root.insert(3);
      root.insert(3);
      root.insert(0);
      assert.equal(validate(root), true);
  });
});
