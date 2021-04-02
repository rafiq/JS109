function sumOfSums(arr) {
    // let newArray = [];
    // for (let i = 1; i < arr.length + 1; i++) {
    //     newArray.push(arr.slice(0,i));
    // }
    // return newArray.flat().reduce((acc,curr) => acc += curr);
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i + 1; j++) {
            sum += arr[j];
        }
    }
    return sum;
}
console.log(
sumOfSums([3, 5, 2]),        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]),     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]),              // 4
sumOfSums([1, 2, 3, 4, 5]),  // 35
)

// While my answers both worked, I could have refactored to the LS answer in my first attempt which would have made less lines of code and did away with having to use the new array.
function sumOfSums(numbers) {
    let sumTotal = 0;
    for (let idx = 1; idx <= numbers.length; idx++) {
      sumTotal += numbers.slice(0, idx).reduce((accum, num) => accum + num);
    }
    return sumTotal;
  }

//   While the below LS answer is a little hard to understand at first, after readin the explanantion I do understand it a little better. They are first just using the idx parameter of the map function which iterates over the array and then, similar to the above one, they keep slicing bigger pieces from the original array, and then finally they add up those pieced first individually, and then as one whole.
function sumOfSums(numbers) {
    return numbers
      .map((_, idx) =>
        numbers.slice(0, idx + 1).reduce((sum, value) => sum + value)
      )
      .reduce((sum, value) => sum + value);
  }