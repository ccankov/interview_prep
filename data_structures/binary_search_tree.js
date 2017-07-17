class Node {
  constructor(value, parent, left, right) {
    this.value = value;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(rootValue) {
    this.root = new Node(rootValue, null, null, null);
  }

  findNode(target, searchNode = this.root) {
    
  }
}
