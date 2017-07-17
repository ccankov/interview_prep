class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    if (!this.children.includes(node)) {
      this.children.push(node);
    }
  }

  removeChild(node) {
    let targetIndex = this.children.indexOf(node);

    if (targetIndex > -1) {
      this.children.splice(targetIndex, 1);
    }
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(node) {
    if (!this.nodes.includes(node)) {
      this.nodes.push(node);
    }
  }

  dfsSearch(node, visited = {}) {
    if (!node) {
      return;
    }

    // Interact with curent node

    visited[node] = true;

    node.children.forEach(child => {
      if (!visited[node]) {
        this.dfsSearch(node);
      }
    });
  }

  bfsSearch(node, visited = {}) {
    let queue = [];
    queue.push(node);

    while (queue.length > 0) {
      let currentNode = queue.shift();

      // interact with currentNode

      visited[currentNode] = true;
      currentNode.children.forEach(child => {
        if (!visited[child]) {
          queue.push(child);
        }
      });
    }
  }
}
