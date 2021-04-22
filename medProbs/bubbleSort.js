function bubbleSort(arr) {
    let i = 1;
    let swapCount = 1

    while (!isAscending(arr)) {
        let swapped = false;
        while (i < arr.length) {
            // if (typeof arr[0] === "string") {
            //     if (arr[i - 1] == arr[i]) {
            //         return 0;
            //     }
            //     return arr[i - 1] < arr[i] ? 1 : -1;
            // }
            if (arr[i - 1] > arr[i]) {
                [arr[i - 1],arr[i]] = [arr[i], arr[i - 1]];
                swapped = true;
            }
            i++;
        }
        if (!swapped) break;
    }
    return arr;

    // return typeof arr[0]
}
function isAscending(array) {
    let sortedArray = array.sort((a,b) => a - b);
    return sortedArray.every((el,idx) => el === array[idx])
}
let array1 = [5, 3];
console.log(bubbleSort(array1));
// console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
console.log(bubbleSort(array2));
// console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
console.log(bubbleSort(array3));
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// Here the LS answer solved the issue that I was having in my code, which is namely that the


// Below Juan figured out what I wanted to do which is count the noSwapCount until it reached the length of the array. Genius.
function bubbleSort(arr) {
    let noSwapCount = 0;
    while (noSwapCount < arr.length - 1) {
      noSwapCount = 0;
      for (let idx = 0; idx < arr.length - 1; idx++) {
        if (arr[idx] > arr[idx + 1]) {
          [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
        } else {
          noSwapCount++;
        }
      }
    }

    return arr;
  }