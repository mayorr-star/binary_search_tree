const mergeSort = require("./mergeSort");
const Node = require("./node");

module.exports = class Tree {
  constructor() {
    this.root = null
  }

  buildTree(array) {
    if (array.length === 0) return null;
    const midpoint = parseInt(array.length / 2);
    const node = new Node(array[midpoint]);
    node.leftChild = this.buildTree(array.slice(0, midpoint));
    node.rightChild = this.buildTree(array.slice(midpoint + 1));
    return node
  }
  
  removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }
  
}