function digitList(num) {
    // turn the num into a string, split it, and push it into an array
    let strArray = (num + "").split("");

    return strArray.map(num => num * 1)

    // return strArray;
    // chop off the last digit and unshift it into a new array
    // let newArray = [];

    // for (let i = 0; i < num.toString().length; i++) {

    // }
    // return num % 10;
}

console.log(
digitList(12345),       // [1, 2, 3, 4, 5]
digitList(7),           // [7]
digitList(375290),      // [3, 7, 5, 2, 9, 0]
digitList(444),         // [4, 4, 4]
)