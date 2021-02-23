function multisum(num) {
    let sum = 0;
    if (num < 3) 0;

    for (let i = 2; i <= num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(
multisum(3),       // 3
multisum(2),       // 3
multisum(5),       // 8
multisum(10),      // 33
multisum(1000),    // 234168
)
// I like how Jaiden below used a recursive function to answer this question.
function multisum(num) {
    if (num === 3) {
      return num;
    } else if (num % 3 === 0 || num % 5 === 0) {
      return num + multisum(num - 1);
    } else {
      return multisum(num - 1);
    }
  }

//Bob Rodes has done a great job making a range function using Array.from and then using the filter, and reduce methods to get the right digits and add them up.