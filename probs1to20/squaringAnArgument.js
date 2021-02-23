// function square(num) {


//     return num *= num;
// }

// const square = (num) => num *= num;

// function square(number,power) {
//     while (power > 0) {
//         return square(multiply(number, number),power - 1);
//     }
//   }

//   function multiply(num1,num2) {

//     return num1 * num2;
// }
// console.log(square(5,2) === 25); // logs true
// console.log(square(-8,3) === 64); // logs true
const multiply = (x, y) => x * y;

const toThePower = (number, power) => {
  if (number === 1 || power === 1) {
    return multiply(number, 1);
  }

  return number * toThePower(number, power - 1);
};

console.log(toThePower(5,3) === 125); // logs true
console.log(toThePower(-8,2) === 64); // logs true