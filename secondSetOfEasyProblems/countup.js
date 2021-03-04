function sequence(num) {
    let rangeArray = [];

    for (let i = 1; i <= num; i++) {
        rangeArray.push(i)
    }
    return rangeArray;
}
console.log(
sequence(5),    // [1, 2, 3, 4, 5]
sequence(3),    // [1, 2, 3]
sequence(1),    // [1]
)

// I like how Sam created an array of the desired length by using the Array() method and then iterated over that array using the map method which returned the idx plus one, which would give a nice array.
function sequence(num) {
    return [...Array(num)].map((_, idx) => idx + 1);
  }