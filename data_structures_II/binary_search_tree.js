class Node {
  constructor(value, parent = null, left = null, right = null) {
    this.value = value;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }

  delete() {
    if (!(this.left || this.right)) {
      // No children
      return this.deleteWithNoChildren();
    } else if (this.left ? !this.right : this.right) {
      // One child
      return this.deleteWithOneChild();
    } else {
      // Two children
      return this.deleteWithTwoChildren();
    }
  }

  deleteWithNoChildren() {
    if (this.parent) {
      if (this.parent.value >= this.value) {
        this.parent.left = null;
      } else {
        this.parent.right = null;
      }
    } else {
      // This is the only node in the tree - replace it with null
      return null;
    }
  }

  deleteWithOneChild() {
    let child = this.left || this.right;

    if (this.parent) {
      child.parent = this.parent;
      if (this.parent.value >= this.value) {
        this.parent.left = child;
      } else {
        this.parent.right = child;
      }
    } else {
      // Deleting root node with one child - replace it by its child
      child.parent = null;
      return child;
    }
  }

  deleteWithTwoChildren() {
    let maxNode = this.left;

    while (maxNode.right) {
      maxNode = maxNode.right;
    }

    this.value = maxNode.value;
    maxNode.delete();

    return this;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
  }

  findNode(target, searchNode = this.root) {
    // Return the current search node if its value matches target
    if (searchNode.value === target) {
      return { found: true, node: searchNode };
    }

    // Is the target less than or equal to current node value?
    if (searchNode.value > target) {
      // Value not found if we can't go left
      if (!searchNode.left) {
        return { found: false, node: searchNode };
      }
      // Seach left subtree
      return this.findNode(target, searchNode.left);
    } else {
      // Value not found if we can't go right
      if (!searchNode.right) {
        return { found: false, node: searchNode };
      }
      // Search right subtree
      return this.findNode(target, searchNode.right);
    }
  }

  find(target) {
    let searchResult = this.findNode(target);

    if (searchResult.found) {
      return searchResult.node.value;
    }

    return null;
  }

  insert(value) {
    let searchResult = this.findNode(value);

    while (searchResult.found && searchResult.node.left) {
      searchResult = this.findNode(value, searchResult.node.left);
    }

    let parentNode = searchResult.node;
    let newNode = new Node(value, parentNode);

    if (parentNode.value >= value) {
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }

    return newNode;
  }

  delete(target) {
    let targetNode = this.findNode(target);

    if (targetNode.found) {
      let nodeToDelete = targetNode.node;
      let replacementNode = nodeToDelete.delete();

      if (nodeToDelete === this.root) {
        this.root = replacementNode;
      }

      return nodeToDelete;
    }

    return null;
  }

  traverseInOrder(currentNode = this.root, values = []) {
    if (currentNode.left) {
      this.traverseInOrder(currentNode.left, values);
    }
    values.push(currentNode.value);
    if (currentNode.right) {
      this.traverseInOrder(currentNode.right, values);
    }

    return values;
  }

  traversePreOrder(currentNode = this.root, values = []) {
    values.push(currentNode.value);
    if (currentNode.left) {
      this.traversePreOrder(currentNode.left, values);
    }
    if (currentNode.right) {
      this.traversePreOrder(currentNode.right, values);
    }

    return values;
  }

  traversePostOrder(currentNode = this.root, values = []) {
    if (currentNode.left) {
      this.traversePostOrder(currentNode.left, values);
    }
    if (currentNode.right) {
      this.traversePostOrder(currentNode.right, values);
    }
    values.push(currentNode.value);

    return values;
  }
}
