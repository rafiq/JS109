console.clear();
let endRange = Number(getUser(`Please enter an integer greater than 0:  `));
let userChoice = getUser(`Enter "s" to compute the sum, or "p" to compute the product.\n`);
let array = [];

getIntegerArray(endRange);

function getIntegerArray(num) {
    for (let i = 1; i <= num; i++) {
        array.push(i);
    }
}
// console.log(getProduct(array))
    if (userChoice[0].toLowerCase() === "s") {
        console.log(`The sum of the integers from 1 to ${endRange} is ${getSum(array)}.`)
    } else {
        console.log(`The product of the integers from 1 to ${endRange} is ${getProduct(array)}.`);
    }

function getSum(arr) {
    let sum = arr.reduce((a,b) =>
        a + b
,0)
    return sum;
}

function getProduct(arr) {
    let product = arr.reduce((a,b) => a * b);
    return product;
}

function getUser(message) {
    let rlSync = require('readline-sync');
    return rlSync.question(message);
  }

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.