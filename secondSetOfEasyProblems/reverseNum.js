function reverseNumber(num) {
    // let temp;
    let numString = num.toString().split("").reverse().join("") * 1;
    //     temp = letter;
    //     letter = num.length - 1 - idx;
    // });

    // numString.reduce((acc,curr,idx) => {
    //     acc.push(numstring[numstring.length - 1 - idx])
    //     return acc;
    // },[])

    return numString
}
console.log(
reverseNumber(12345),    // 54321
reverseNumber(12213),    // 31221
reverseNumber(456),      // 654
reverseNumber(12000),    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1),        // 1
)

// I still really love Wes answers where he chops off the last digit using the modula 10 and then subtracts that remainder from the original number and recursively calls on that function while num doesn't not equal zero. Otherwise, it will return num and array.
function reverseNumber(numP, resultArrayP = []) {
    if (numP !== 0) {
      let remainder = numP % 10;
      resultArrayP.push(remainder);
      numP = (numP - remainder) / 10;
      return reverseNumber(numP, resultArrayP);
    } else {
      return Number(resultArrayP.join(''));
    }
  }

  console.log(reverseNumber(12345));    // 54321
  console.log(reverseNumber(12213));    // 31221
  console.log(reverseNumber(456));      // 654
  console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
  console.log(reverseNumber(1));        // 1