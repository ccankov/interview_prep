class Node {
  constructor(value, parent, left, right) {
    this.value = value;
    this.parent = parent;
    this.left = left;
    this.right = right;

    this.delete = this.delete.bind(this);
  }

  // Removes this node from the tree, returns a replacement if node was root
  delete() {
    // Node is a leaf
    if (!(this.left || this.right)) {
      // Leaf node has no parent - return null to replace this node as root
      if (!parent) {
        return null;
      }
      // Leaf node has a parent - replace this node with null on parent
      if (parent.value < this.value) {
        parent.right = null;
      } else {
        parent.left = null;
      }
    }
    // Node has one child
    else if (this.left ? !this.right: this.right) {
      const child = this.left || this.right;
      // Node has no parent - return the child to replace this node as root
      if (!this.parent) {
        return child;
      }

      // Node has a parent - replace current node with its child
      if (parent.value < this.value) {
        parent.right = child;
      } else {
        parent.left = child;
      }
    }
    // Node has two children
    else {
      let leftSubtreeMax = this.left;

      // Find the max value in this node's left subtree
      while (leftSubtreeMax.right) {
        leftSubtreeMax = leftSubtreeMax.right;
      }

      // Replace this node's value with the left subtree max
      this.value = leftSubtreeMax.value;

      // Delete the left subtree max node
      leftSubtreeMax.delete();

      // Return this updated node in case it is the root
      return this;
    }
  }
}

class BinarySearchTree {
  constructor(rootValue) {
    this.root = new Node(rootValue, null, null, null);

    this.findNode = this.findNode.bind(this);
    this.find = this.find.bind(this);
    this.insert = this.insert.bind(this);
  }

  findNode(target, searchNode = this.root) {
    if (searchNode === null) {
      return null;
    }
    if (searchNode.value < target) {
      return this.findNode(target, searchNode.right);
    } else if (searchNode.value > target) {
      return this.findNode(target, searchNode.left);
    }
    return searchNode;
  }

  find(target) {
    const targetNode = this.findNode(target);
    if (targetNode) {
      return targetNode.value;
    }
    return targetNode;
  }

  insert(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value < value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          break;
        }
      } else {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          break;
        }
      }
    }

    if (currentNode.value < value) {
      currentNode.right = new Node(value, currentNode, null, null);
    } else {
      currentNode.left = new Node(value, currentNode, null, null);
    }
  }

  delete(value) {
    const targetNode = this.findNode(value);

    if (targetNode) {
      const isRoot = targetNode === this.root;
      const replacement = targetNode.delete();
      if (isRoot) {
        this.root = replacement;
      }
    }

    return targetNode;
  }
}
