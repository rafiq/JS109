// function swap(str) {
//     let wordsArray = str.split(" ");
//     let newArray = [];

//     for (let word of wordsArray) {
//         newArray.push(swapFirstLastCharacters(word));

//         // let letterArray = word.split("");
//         // let temp;
//         // temp = letterArray[0];
//         // letterArray[0] = letterArray[letterArray.length - 1];
//         // letterArray[letterArray.length - 1] = temp;
//         // newArray.push(word);
//     }
//     return newArray.join(" ");
// //     return newArray;

//     // for (let i = 0; i < strArray.length; i++) {
//     //     return strArray[i].split("").reduce((result,letter,idx) => {
//     //         if (idx === 0) {
//     //             result += strArray[i][strArray.length - 1];
//     //         }
//     //         if (idx === strArray[i][strArray.length - 1]) {
//     //             result += strArray[i][0];
//     //         }
//     //         else result += letter
//     //         return result;
//     //     },"")
//     // }


//     // let swapped = [];
//     // let newStr = str.split(" ");
//     // newStr.forEach(word => {
//     //     word.split("").forEach(letter => {
//     //         let lastLetter = word.length - 1;
//     //         let temp = [];
//     //         temp = letter[0];
//     //         letter[0] = letter[lastLetter];
//     //         letter[lastLetter] = temp;
//     //         swapped.push(word);
//     //     })
//     // })

//     // // return newStr.join(" ");
//     // return swapped.join(" ");
// }
console.log(
swap('Oh what a wonderful day it is'),  // "hO thaw a londerfuw yad ti si"
swap('Abcde'),                          // "ebcdA"
swap('a'),                              // "a"

)

// // The LS answer utilized the slice method and then just concatenated the words at the end which seems a lot more simple than my approach. However, I would like to see some others use reduce or forEach for this problem.
// // function swap(words) {
// //     let wordsArray = words.split(' ');

// //     let swappedArray = wordsArray.map((word,idx )=> {
// //         return swapFirstLastCharacters(word)
// //     })

// //     return swappedArray.join(" ")
// //     // for (let idx = 0; idx < wordsArray.length; idx += 1) {
// //     //   wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
// //     // }

// //     // return wordsArray.join(' ');
// //   }

//   function swapFirstLastCharacters(word) {
//         let letterArray = word.split("");

//         letterArray[0] = letterArray[letterArray.length - 1];
//         letterArray[letterArray.length - 1] = letterArray[0];
//         // let temp;

//         // temp = letterArray[0];
//         // letterArray[0] = letterArray[letterArray.length - 1];
//         // letterArray[letterArray.length - 1] = temp;

//         return letterArray.join("");

//     // if (word.length === 1) {
//     //   return word;
//     // }

//     // return word[word.length - 1] + word.slice(1, -1) + word[0];
//   }
function swap(stringP) {
    let arrayOfWords = stringP.split(' ');

    let reduceToSwap = arrayOfWords.reduce((acc, ele) => {
      let charArray = ele.split('');

      charArray[0] = ele[ele['length'] - 1];
    //   OK! I think I see why this one is returning the correct answer and why I can not do this with the two pointer technique. This one is not modifiying the original word, but the copy of the original word which is refered to by the charArray variable. So it is like, I want the copy to have the first letter of the original word, and I want the copy to have the last letter of the original word, then use that modifiyed copy to complete the string.
      charArray[ele['length'] - 1] = ele[0];

      acc.push(charArray.join(''));

      return acc;
    }, []);

    return reduceToSwap.join(' ');
  }