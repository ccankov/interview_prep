/**
 * @param {number[][]} envelopes
 * @return {number}
 */

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

class Graph {
  constructor() {
    this.nodes = [];
    this.longestChains = {};
    this.longestChain = [];
  }

  addNode(node) {
    this.nodes.push(node);
  }

  dfsLongestChain(node, thisChain = []) {
    thisChain.push(node);

    node.children.forEach(child => {

      this.dfsLongestChain(child, thisChain.slice(0));
    });

    if (thisChain.length > this.longestChain.length) {
      this.longestChain = thisChain;
    }
  }
}

var maxEnvelopes = function(envelopes) {
  // Turn the envelopes into nodes
  let envelopeNodes = envelopes.map(envelope => new Node(envelope));

  // Create a graph out of the envelope nodes
  let envelopeGraph = new Graph();
  envelopeNodes.forEach(node => envelopeGraph.addNode(node));

  // Populate graph adjancency lists based on envelope fits
  envelopeNodes.forEach(nodeOne => {
    envelopeNodes.forEach(nodeTwo => {
      if (nodeOne.value[0] > nodeTwo.value[0] &&
        nodeOne.value[1] > nodeTwo.value[1]) {
          nodeOne.addChild(nodeTwo);
      }
    });
  });

  // Sort envelopes by number of children
  envelopeNodes = envelopeNodes.sort((nodeOne, nodeTwo) => {
    if (nodeOne.children.length < nodeTwo.children.length) {
      return -1;
    } else if (nodeTwo.children.length < nodeOne.children.length) {
      return 1;
    }

    return 0;
  });

  console.log(envelopeNodes);

  // Find the longest chain starting at each node, keep longest one
  envelopeNodes.forEach(node => {
    envelopeGraph.dfsLongestChain(node);
  });

  return envelopeGraph.longestChain.length;
};
