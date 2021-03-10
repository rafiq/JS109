function twice(num) {
    if (num.toString().length % 2 === 0 && isDouble(num)) {
        return num;
    } else {
        return num * 2;
    }
}
function isDouble(num) {
    let numArray = num.toString().split("");
    let half = numArray.length / 2;
    let firstHalf = numArray.slice(0,half);
    let secondHalf = numArray.slice(half,numArray.length + 1);
    return firstHalf.join("") === secondHalf.join("")
}
// function map(array) {
//     array.map(element => {
//         if (element.length > 3) {
//             return element;
//         }
//     })
// }
// console.log(map(["ant","bear"]))

// console.log(["ant","bear"].map(element => {
//     if (element.length > 3) {
//         return element;
//     }
// }))

// console.log(
// twice(37),          // 74
// twice(44),          // 44
// twice(334433),      // 668866
// twice(444),         // 888
// twice(107),         // 214
// twice(103103),      // 103103
// twice(3333),        // 3333
// twice(7676),        // 7676
// )