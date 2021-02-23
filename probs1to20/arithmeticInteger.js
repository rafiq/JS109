function getUserInput(message) {
    let rlsync = require("readline-sync");
    return rlsync.question(`===> ${message}`)
}
const addition = (num1,num2) => Number(num1) + Number(num2);

const subtraction = (num1, num2) => num1 - num2;
const multiply = (num1,num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const remainder = (num1,num2) => num1 % num2;
const power = (num1,num2) => Math.pow(num1,num2);

while (true) {
    console.clear()
    let num1 = getUserInput(`\n\n\n\n\n\n ===>What is the first number?\n`);
    let num2 = getUserInput(`What is the second number?\n`);
    console.clear()
    console.log(
        `\n\n\n\n\n\n ${num1} + ${num2} = ${addition(num1,num2)}\n`,
        `${num1} - ${num2} = ${subtraction(num1,num2)}\n`,
        `${num1} * ${num2} = ${multiply(num1,num2)}\n`,
        `${num1} / ${num2} = ${divide(num1,num2)}\n`,
        `${num1} % ${num2} = ${remainder(num1,num2)}\n`,
        `${num1} ^ ${num2} = ${power(num1,num2)}\n`
    )
        break;
}

// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23