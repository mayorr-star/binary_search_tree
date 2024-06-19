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
generateRandomNumbers(12)
