// function stringToInteger(str) {
//     let numArray = [];
//     let obj = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9}

//     for (let i = 0; i < str.length; i++) {
//         numArray.push(obj[str[i]])
//     }

//     return numArray.reduce((total,digit) => {
//         total = (total * 10) + digit;
//         return total;
//     },0)
// }
function stringToInteger(str) {
    return str * 1;
  }
console.log(stringToInteger("4321")); // logs true
console.log(stringToInteger("570")); // logs true
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

// I like how LS mapped the new array of numbers from the object constant.
// function hexadecimalToInteger(string) {
//     const DIGITS = {
//       0: 0,
//       1: 1,
//       2: 2,
//       3: 3,
//       4: 4,
//       5: 5,
//       6: 6,
//       7: 7,
//       8: 8,
//       9: 9,
//       A:10,
//       B:11,
//       C:12,
//       D:13,
//       E:14,
//       F:15,
//     };
//     let arrayOfDigits = string.split("").map(char => DIGITS[char.toUpperCase()]);
//     let value = 0;

//     arrayOfDigits.forEach(digit => {
//         if
//         (value = (10 * value) + digit)});
//     return value;
//   }
//   console.log(hexadecimalToInteger('4D9f') === 19871);
//   console.log(hexadecimalToInteger('4D9f'));