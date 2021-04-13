function removeVowels(array) {
    let vowels = "aeiou";
    let newArray = [];
    let regex = /[aeiou]/ig;

        return array.map(string => string.replace(regex,""))
            // return array[i];

    // return newArray;

    // Above is my attempt at regex and below is the LS correct answer
    // function removeVowels(strings) {
    //     return strings.map(string => string.replace(/[aeiou]/gi, ""));
    //   }

    //   Below is my answer that I was at first not getting because I put the return keyword on the body of the for loop which would only return the first instance of the loop, but when I wrapped the body with a push method and returned the newArray, then  it worked.
    // for (let i = 0; i < array.length; i++) {
    //          newArray.push(array[i].split("").reduce((acc,letter,idx)=> {
    //             if (!vowels.includes(letter.toLowerCase())) acc += letter;
    //             return acc;
    //         },""))
    //     }

    //     return newArray;


    // for (let j = 0; j < array.length; j++) {
    //     if (vowels.includes(array[i][j])) array[i].split("").splice(j,1,"").join("");

    // for (let word of array) {
    //     return word.split("").reduce((acc,curr,idx) => {
    //         if (!vowels.includes(curr.toLowerCase())) acc.push(curr);
    //         return acc;
    //     },[])
    // }
    // return array;

    // let newArray = [];

    // return array.map(word => {
    //     for (let i = 0; i < word.length; i++) {
    //         if (!vowels.includes(word[i].toLowerCase())) return word[i];
    //     }
    // })

    // return newArray;
    // return array.map(subArray => {
    //     subArray.split("").filter(letter => {
    //             letter;
    //         }).join("")

    // })
}
function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

function findVowels(str) {

    return str.split("").reduce(letter => {


    })
}
console.log(
removeVowels(['abcdefghijklmnopqrstuvwxyz']),         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']),  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']),                // ["BC", "", "XYZ"]
)