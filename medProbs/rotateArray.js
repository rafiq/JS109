function rotateArray(arr) {
    if (arguments.length === 0 || typeof (arr) !== "object") return undefined;
    if (arr.length === 0) return [];

    let copiedArray = arr.slice();
    let firstElement = arr[0];

    copiedArray.push(firstElement);
    copiedArray.shift();
    return copiedArray;
}
let array = [1, 2, 3, 4];
console.log(
rotateArray([7, 3, 5, 2, 9, 1]),       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']),          // ["b", "c", "a"]
rotateArray(['a']),                    // ["a"]
rotateArray([1, 'a', 3, 'c']),         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]),    // [[1, 2], 3, { a: 2 }]
rotateArray([]),                       // []

// return `undefined` if the argument is not an array
rotateArray(),                         // undefined
rotateArray(1),                        // undefined


// the input array is not mutated
rotateArray(array),                   // [2, 3, 4, 1]
array,                                 // [1, 2, 3, 4]
)

// Please try to remember that their are methods that check if an element is an array or number or not isArray(). There I go again forgetting about the slice power and the concat power. Arrgh! But at least I got it right without having to look up documentation!!!
function rotateArray(array) {
    if (!Array.isArray(array)) {
      return undefined;
    }

    if (array.length === 0) {
      return [];
    }

    return array.slice(1).concat(array[0]);
  }