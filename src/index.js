const Tree = require("./modules/Tree");
const prettyPrint = require("./modules/prettyPrint");

const generateRandomNumbers = (size) => {
  const randomNumsarray = [];
  while (randomNumsarray.length < size) {
    const randomNumber = Math.floor(Math.random() * 100);
    randomNumsarray.push(randomNumber);
  }
  return randomNumsarray;
};
console.log("Building a balanced binary search tree.");
const tree = new Tree(generateRandomNumbers(12));
console.log("Printing tree");
prettyPrint(tree.root);
console.log("Confirming if tree is balanced.");
console.log(`Is tree balanced? ${tree.isBalanced()}.`);
console.log(`Printing elements in level order`);
console.log(tree.levelOrder());
console.log(`Printing elements in preoder order`);
console.log(tree.preOrder());
console.log(`Printing elements in post order`);
console.log(tree.postOrder());
console.log(`Printing elements in inorder`);
console.log(tree.inOrder());
console.log("Unbalancing tree by adding several numbers greater than 100");
tree.insert(150)
tree.insert(190)
tree.insert(200)
tree.insert(210)
tree.insert(1000)
tree.insert(340)
tree.insert(234)
tree.insert(324)
tree.insert(460)
tree.insert(569)
tree.insert(567)
tree.insert(956)
tree.insert(812)
console.log("Printing tree");
prettyPrint(tree.root);
console.log("Confirming if tree is balanced.");
console.log(`Is tree balanced? ${tree.isBalanced()}.`);
console.log("Balancing tree");
tree.rebalance();
console.log("Confirming if tree is balanced.");
console.log(`Is tree balanced? ${tree.isBalanced()}.`);
