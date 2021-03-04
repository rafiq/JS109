function repeater(str) {
    // let result = "";

    // for (let i = 0; i < str.length; i++) {
    //     result += str[i] + str[i];
    // }
    // return result;

    str.split("").reduce((acc,curr) => {
        acc += curr + curr;
        return acc;
    },"")

}
console.log(
repeater('Hello'),        // "HHeelllloo"
repeater('Good job!'),    // "GGoooodd  jjoobb!!"
repeater(''),             // ""
)
// My answer worked, but I do like the LS answer where they use the map method to do the exact same thing.
function repeater(string) {
    return string.split("").map(char => char + char).join("");
  }
