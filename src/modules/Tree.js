const mergeSort = require("./mergeSort");
const Node = require("./node");

module.exports = class Tree {
  constructor(array) {
    this.root = this.buildTree(mergeSort(this.removeDuplicates(array)));
  }

  buildTree(array) {
    if (array.length === 0) return null;
    const midpoint = parseInt(array.length / 2);
    const node = new Node(array[midpoint]);
    node.leftChild = this.buildTree(array.slice(0, midpoint));
    node.rightChild = this.buildTree(array.slice(midpoint + 1));
    return node;
  }

  removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }

  insert(root, value) {
    if (!root) {
      root = new Node(value);
      return root;
    } else if (value < root.data) {
      root.leftChild = this.insert(root.leftChild, value);
    } else if (value > root.data) {
      root.rightChild = this.insert(root.rightChild, value);
    }
    return root;
  }

  deleteItem(root, value) {
    if (!root) return null;
    else if (value < root.data) {
      root.leftChild = this.deleteItem(root.leftChild, value);
    } else if (value > root.data) {
      this.rightChild = this.deleteItem(root.rightChild, value);
    } else {
      if (!root.leftChild && !root.rightChild) {
        root = null;
        return root;
      }
    }
    return root;
  }
};
