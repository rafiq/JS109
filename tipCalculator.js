function getUser(inputParam) {
      let rlSync = require('readline-sync');
      return rlSync.question(inputParam);
    }

function getTip() {
    let tip = bill * (Number(percentage) / 100);
    let total = Number(bill) + Number(tip);
    return `The tip is ${tip}.\n The total is ${total}`
}

let bill = getUser(`How much is the bill?\n`);
let percentage = getUser(`What is the percentage for the tip?\n`);

console.log(getTip())

// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00