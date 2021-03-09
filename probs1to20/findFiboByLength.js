function findFibonacciIndexByLength(length) {
    let first = 1n;
    let second = 1n;
    let count = 2n;
    let fibonacci;

    do {
      fibonacci = first + second;
      count += 1;
      first = second;
      second = fibonacci;
    } while (String(fibonacci).length < length);

    return count;
  }

// The code above is from LS and I like how simple it is. It just uses a do while loop which starts adding the first two numbers of the fib and then reassigns all the digits according to the rules of the fib number list. After that it will run until a number, converted to a string, is less than the target length.
// My code below does work, but since I got rid of the n, my numbers became less accurate the higher up the fib ladder. So it worked fine with the lower ones

function findFibonacciIndexByLength(num) {
    let array = [1,1];
    let numOfDigits = parseInt(num);

    for (let i = 0; i < 480; i++) {
        array.push(array[i] + array[i + 1])
    }
    let target = array.find(number => {
        return ((number + "").length) >= numOfDigits
    })
    // return target;
    return array.indexOf(target) + 1;
    // return new Array(num).fill(0,0,10)
}

console.log(
findFibonacciIndexByLength(2n) ,    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n),// === 12n,   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n),// === 45n,
findFibonacciIndexByLength(16n),// === 74n,
findFibonacciIndexByLength(100n),// === 476n,
// findFibonacciIndexByLength(1000n) === 4782n,
// findFibonacciIndexByLength(10000n) === 47847n,

// The last example may take a minute or so to run.
)