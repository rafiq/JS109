function crunch(string) {
    let array = string.split("");
    let newArray = [];
    let j = 1;
    let i = 0;

    while (i < array.length) {
        if (array[i] === array[j]) {
            j++;
        } else if (array[i] !== array[j]) {
            newArray.push(array[i]);
            i = j;
            j++;
        }
    }

    return newArray.join("");
}

console.log(
crunch('ddaaiillyy ddoouubbllee'),    // "daily double"

crunch('4444abcabccba'),              // "4abcabcba"
crunch('ggggggggggggggg'),            // "g"
crunch('a'),                          // "a"
crunch(''),                           // ""
)