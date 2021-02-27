

// let string1 = 'Polar Bear'`;`
// let string2 = 'Polar bear';
// let string3 = 'Penguin';


// console.log(string1.toLowerCase() === string2.toLowerCase())

// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

// console.log(byteSequence.includes("x"));

function capitalizeWords(str) {
    return str.split(" ").reduce((acc,word) => {
        acc += (word[0].toUpperCase() + word.slice(1) + " ")
        return acc;
    },"")
}
// function isBlank(str) {
//     // if (str.includes("a") === true ) {
//     //     return false;
//     // }
//     // return true;

//     return (str.trim().length === 0)
// }

console.log(
isBlank('launch school tech & talk'), // false
// isBlank('  'launch school tech & talk''),   // false
// isBlank(''launch school tech & talk''),     // true
)