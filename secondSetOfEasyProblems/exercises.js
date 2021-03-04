// function min(num1,num2) {
//     if (num1 < num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }

// console.log(min(3,-4))

// function isEven(num) {
//     return num % 2 === 0;
// }

// console.log(isEven(75));

// function countChar(str, targetLetter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === targetLetter) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countChar("kakkerlak", "k"));

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = "456";

// console.log(arr1 + arr2);
// console.log(arr1.concat(arr2))
// console.log(arr1.concat(arr3));
// console.log(arr3.concat(arr1));

// Your code here.

// function reverseArrayInPlace(array) {
//     let temp ;
//     let index = Math.floor((array.length - 1) / 2);
//     let endIndex = array.length - 1;

//     for (let i = 0; i < index; i++) {
//         temp = array[i];
//         array[i] = array[endIndex - i];
//         array[endIndex] = temp;
//     }

// }
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);

// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
// → [5, 4, 3, 2, 1]

// Your code here.


function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >=0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}
function listToArray(list) {
    return Object.keys(list).map((key) => list[key])
}
console.log(arrayToList([1,5,10,20,25,30,40]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20