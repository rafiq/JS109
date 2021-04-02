function sumSquareDifference(num) {
    let numArray = [];

    for (let i = 1; i <= num; i++){
        numArray.push(i)
    }
// sum all positive integers then square

// square all positive integers then sum;

// subtract the throw.
    let sumSquare = (numArray.reduce((total,curr) => total += curr))**2;

    let squareSum = numArray.reduce((acc,curr) => acc += curr**2,0);

    return sumSquare - squareSum;
}
console.log(
sumSquareDifference(3),      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10),     // 2640
sumSquareDifference(1),      // 0
sumSquareDifference(100),    // 25164150
)

// I love how the LS answer shows that you don't have to keep rewriting code, and that you can combine functions so you are not. They used a for loop and just made that do the adding for them as opposed to what I did which was make a new reduce function to add up the numbers. Very smart.
function sumSquareDifference(count) {
    let sum = 0;
    let sumOfSquares = 0;
    for (let number = 1; number <= count; number++) {
      sum += number;
      sumOfSquares += Math.pow(number, 2);
    }
    return Math.pow(sum, 2) - sumOfSquares;
  }