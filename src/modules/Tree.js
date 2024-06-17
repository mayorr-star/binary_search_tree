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

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) this.root = newNode;
    else {
      this.insertNode(this.root, newNode);
    }
  }
  
  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (!root.leftChild) root.leftChild = newNode;
      else {
        this.insertNode(root.leftChild,newNode);
      }
    } else {
      if (!root.rightChild) root.rightChild = newNode;
      else {
        this.insertNode(root.rightChild, newNode);
      }
    }
  }

  deleteItem(root, value) {
    if (!root) return root;
    else if (value < root.data) {
      root.leftChild = this.deleteItem(root.leftChild, value);
    } else if (value > root.data) {
      this.rightChild = this.deleteItem(root.rightChild, value);
    } else {
      if (!root.leftChild && !root.rightChild) {
        root = null;
        return root;
      } else if (!root.leftChild) {
        root = root.rightChild;
        return root;
      } else if (!root.rightChild) {
        root = root.leftChild;
        return root;
      }
    }
    return root;
  }
};
