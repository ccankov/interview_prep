class Node {
  constructor(value, parent = null, left = null, right = null) {
    this.value = value;
    this.parent = parent;
    this.left = left;
    this.right = right;
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
