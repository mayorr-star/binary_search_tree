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
const tree = new Tree(generateRandomNumbers(12));
prettyPrint(tree.root)
console.log(tree.isBalanced())