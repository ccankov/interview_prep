class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.tail = new Node('tail');
    this.head = new Node('head', this.tail);
    this.tail.prev = this.head;
  }

  insert(value) {
    const newNode = new Node(value, this.tail, this.tail.prev);

    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
  }

  find(target) {
    let currentNode = this.head.next;

    while (currentNode !== this.tail) {
      if (currentNode.value === target) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  delete(target) {
    let targetNode = this.find(target);

    if (targetNode) {
      targetNode.prev.next = targetNode.next;
      targetNode.next.prev = targetNode.prev;
    }

    return targetNode;
  }

  each(callback) {
    let currentNode = this.head.next;

    while (currentNode !== this.tail) {
      callback(currentNode.value);

      currentNode = currentNode.next;
    }
  }
}
