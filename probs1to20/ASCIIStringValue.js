function asciiValue(string) {

    let array = string.split("");
    // let valuesArray = [];

    // array.forEach(letter => {
    //     valuesArray.push(letter.charCodeAt())
    // })
    return array.reduce((total,_,idx) => total += string.charCodeAt(idx),0);
}
console.log(
asciiValue('Four score'),         // 984
asciiValue('Launch School'),      // 1251
asciiValue('a'),                  // 97
asciiValue(''),                   // 0
)

// The LS answer below is more succinct using a for loop that iterates every letter of the original string and then converts that letter to the ascii value and adds it during every iteration to a new variable called the sum. I didn't know you could pass in the index as an argument to the charCodeAt method. I can probably do this with the reduce method then.
// function asciiValue(string) {
//     let sum = 0;

//     for (let idx = 0; idx < string.length; idx += 1) {
//       sum += string.charCodeAt(idx);
//     }

//     return sum;
//   }