function stringToInteger(str) {
    let numArray = [];
    let obj = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9}

    for (let i = 0; i < str.length; i++) {
        numArray.push(obj[str[i]])
    }

    return numArray.reduce((total,digit) => {
        total = (total * 10) + digit;
        return total;
    },0)
}

console.log(stringToInteger("4321")); // logs true
console.log(stringToInteger("570")); // logs true
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

