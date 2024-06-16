const Node = require("./node");
const mergeSort = require("./mergeSort");

module.exports = class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    const newArr = this.removeDuplicates(arr);
    const sortedArray = mergeSort(newArr);
    return this.buildBST(arr)
  }

  buildPreorderBST(arr, start = 0, end = arr.length - 1) {
    if (start > end) return null;
    const midpoint = Math.floor((start + end) / 2);
    const node = new Node(arr[midpoint]);
    node.leftChild = this.buildBST(arr, 0, midpoint - 1);
    node.rightChild = this.buildBST(arr, midpoint + 1, arr.length - 1);
    return node;
  }

  removeDuplicates(arr) {
    const newArr = [];
    for (const element of arr) {
      if (!newArr.includes(element)) newArr.push(element);
    }
    return newArr;
  }

  insert(value) {
    if (!this.root) {
      root = new Node(value);
      return this.root;
    } else {
      if (value < this.root.data) {
        this.root.leftChild = this.insert(value)
      } else if (value > this.root.data) {
        this.root.rightChild = this.insert(value);
      }
      return this.root;
    }
  }
}
const newTree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(newTree.buildTree([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(newTree.buildBST([1, 2 , 3, 4, 5]))