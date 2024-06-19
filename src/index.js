const Tree = require("./modules/Tree");
const prettyPrint = require("./modules/prettyPrint");

const generateRandomNumbers = (size) => {
    const randomNumsarray = [];
    while (randomNumsarray.length < size) {
        const randomNumber = Math.floor(Math.random() * 100)
        randomNumsarray.push(randomNumber);
    }
    return randomNumsarray
}
console.log("Building a balanced binary search tree.");
const tree = new Tree(generateRandomNumbers(12));
prettyPrint(tree.root)
console.log("Confirming if tree is balanced.");
console.log(`Is tree balanced? ${tree.isBalanced()}.`);
console.log(`Printing elements in level order`)
console.log(tree.levelOrder())
console.log(`Printing elements in preoder order`)
console.log(tree.preOrder())
console.log(`Printing elements in post order`)
console.log(tree.postOrder())
console.log(`Printing elements in inorder`)
console.log(tree.inOrder())