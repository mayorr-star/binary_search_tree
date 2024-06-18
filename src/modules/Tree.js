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
    const node = new Node(value);
    return (this.root = this.insertNode(node));
  }

  insertNode(newNode, root = this.root) {
    if (!root) return (root = newNode);
    else if (newNode.data < root.data) {
      root.leftChild = this.insertNode(newNode, root.leftChild);
    } else if (newNode.data > root.data) {
      root.rightChild = this.insertNode(newNode, root.rightChild);
    }
    return root;
  }

  deleteItem(value) {
    return (this.root = this.deleteNode(value));
  }

  deleteNode(value, root = this.root) {
    if (!root) return null;

    if (value < root.data) {
      root.leftChild = this.deleteNode(value, root.leftChild);
    } else if (value > root.data) {
      root.rightChild = this.deleteNode(value, root.rightChild);
    } else {
      if (!root.leftChild && root.rightChild) return (root = null);
      else if (!root.leftChild) return (root = root.rightChild);
      else if (!root.rightChild) return (root = root.leftChild);
      else {
        root.data = this.getMinValue(root.rightChild).data;
        root.rightChild = this.deleteNode(root.data, root.rightChild);
      }
    }
    return root;
  }

  getMinValue(root = this.root.rightChild) {
    if (!root) return null;

    if (!root.leftChild) return root;
    return this.getMinValue(root.leftChild);
  }

  find(value) {
    return this.findNode(value);
  }

  findNode(value, root = this.root) {
    if (!root) return null;
    if (root.data === value) return root;

    if (value < root.data) {
      return this.findNode(value, root.leftChild);
    } else if (value > root.data) {
      return this.findNode(value, root.rightChild);
    }
  }

  levelOrder(callback = false) {
    if (!this.root) return null;
    const queue = [this.root];
    const result = [];
    while (queue.length !== 0) {
      const currentNode = queue[0];
      if (currentNode.leftChild) queue.push(currentNode.leftChild);
      if (currentNode.rightChild) queue.push(currentNode.rightChild);
      queue.shift();
      if (callback) {
        callback(currentNode);
      } else {
        result.push(currentNode.data);
      }
    }
    if (result.length !== 0) return result;
  }

  inOrderTraversal(root, result, callback) {
    if (!root) return null;
    this.inOrderTraversal(root.leftChild, result, callback);
    if (callback) {
      callback(root);
    } else {
      result.push(root.data);
    }
    this.inOrderTraversal(root.rightChild, result, callback);
    if (!callback) return result;
  }

  inOrder(callback = false) {
    return this.inOrderTraversal(this.root, [], callback);
  }

  preOrderTraversal(root, result, callback) {
    if (!root) return null;
    if (callback) {
      callback(root);
    } else {
      result.push(root.data);
    }
    this.preOrderTraversal(root.leftChild, result, callback);
    this.preOrderTraversal(root.rightChild, result, callback);
    if (!callback) return result;
  }

  preOrder(callback = false) {
    return this.preOrderTraversal(this.root, [], callback);
  }
};
