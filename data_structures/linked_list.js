class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head', null, null);
    this.tail = new Node('tail', null, this.head);
    this.head.next = this.tail;

    this.insert = this.insert.bind(this);
    this.each = this.each.bind(this);
    this.find = this.find.bind(this);
    this.delete = this.delete.bind(this);
  }

  insert(value) {
    const newNode = new Node(value, this.tail, this.tail.prev);

    this.tail.prev.next = newNode;
    this.tail.prev = newNode;

    return newNode;
  }

  each(callback) {
    let currentNode = this.head.next;

    while (currentNode !== this.tail) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
  }

  find(target) {
    let targetNode = null;

    this.each(node => {
      if (node.value === target) {
        targetNode = node;
      }
    });

    return targetNode;
  }

  delete(target) {
    let targetNode = this.find(target);

    if (targetNode) {
      targetNode.prev.next = targetNode.next;
      targetNode.next.prev = targetNode.prev;
    }

    return targetNode;
  }
}
