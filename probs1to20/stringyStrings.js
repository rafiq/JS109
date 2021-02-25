function stringy(num) {
    let stringyString = '';
    for (let i = 0; i < num; i++) {
      stringyString += (i + 1) % 2;
    }

    return stringyString;
  }

// My way below worked and I was even able to do my original way below that by just using the .slice(0,num) which would perfectly work because it would make the last unwanted digit fall away on the odd numbers. Above Mr Rodes does a nice way of using some clever logic and the modula. He is smart.

function stringy(num) {
    let string = "";
    for (let i = 0; i < num; i++) {
        if (i % 2 === 1) {
            string += "0";
        } else {
            string += "1";
        }
    }

    return string;
    // if (num % 2 === 1) {
    //     return "10".repeat(Math.ceil(num / 2))
    // } else {
    //     return "10".repeat(num / 2);
    // }
}
console.log(
stringy(6),    // "101010"
stringy(9),    // "101010101"
stringy(4),    // "1010"
stringy(7),    // "1010101"
)