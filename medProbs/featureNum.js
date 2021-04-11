function featured(num) {
    let possibleNums = [];

    for (let i = num + 1; i < num + 2000000000; i++) {
        if (isValid(i))
        if (i % 2 === 1  && i % 7 === 0) {
            return i;
        }

    }
    return "No possible matches";
}

function isValid(num) {
    let numArray = num.toString().split("");

    if (new Set(numArray).size !== numArray.length) return false;
    else return true;

}
console.log(
// featured(12),           // 21
// featured(20),           // 21
// featured(21),           // 35
// featured(997),          // 1029
// featured(1029),         // 1043
// featured(999999),       // 1023547
featured(999999987),    // 1023456987
// featured(9876543200),   // 9876543201
// featured(9876543201),   // "There is no possible number that fulfills those requirements."
)