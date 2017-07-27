class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  addChild(value) {
    this.children.push(value);
  }
}

class Graph {
  constructor(nodes = []) {
    this.nodes = nodes;
  }

  addNode(node) {
    this.nodes.push(node);
  }

  bfsSearch(node, visit) {
    let queue = [node];
    let visitedNodes = [];

    while (queue.length > 0) {
      let currentNode = queue.shift();

      visit(currentNode);

      visitedNodes.push(node);

      currentNode.children.forEach(childNode => {
        if (!visitedNodes.includes(childNode) && !queue.includes(childNode)) {
          queue.push(childNode);
        }
      });
    }
  }

  dfsSearch(node, visit, visited = []) {
    if (!node) {
      return;
    }

    visit(node);

    visited.push(node);
    node.children.forEach(childNode => {
      if (!visited.includes(childNode)) {
        this.dfsSearch(childNode, visit, visited);
      }
    });
  }
}
