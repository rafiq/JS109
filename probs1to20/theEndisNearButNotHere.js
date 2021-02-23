function penultimate(str) {
    let array = str.split(" ");
    if (array.length < 2) return str;
    // console.log(array)
    return array.slice(array.length - 2, array.length - 1).join(" ")
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate("Launch") === "Launch"); // logs true
console.log(penultimate("") === ""); // logs true
//The LS answer works fairly well as well.
// function penultimate(words) {
//     let wordsArray = words.split(" ");
//     return wordsArray[wordsArray.length - 2];
//   };