// OK, so I see one major mistake I made here which was that I was supposed to set i to the index of the rotateMax function which started from the left where I was thinking that I was supposed to start it from the left or the zero index. I also did not know that I couldset the variable num equal to itself in the for loop and it not be affected by the global variable num.

function maxRotation(num) {
    let stringNum = num.toString();

    for (let i = stringNum.length; i >= 2; i--) {
        num = rotateRightmostDigits(num,i);
    }

    // while (idx >=2) {
    //     stringNum = rotateRightmostDigits(stringNum,idx)
    //     idx--;
    // }
    return num;
}
function rotateRightmostDigits(num,digit) {
    let string = num.toString();
    let targetDigit = string[string.length - digit];
    let targetIndex = string.length - digit;
    let front = string.split("").slice(0,targetIndex).join("");
    let end = string.split("").slice(targetIndex + 1).join("");
    return (front + end + targetDigit) * 1;
}
console.log(
    maxRotation(735291),          // 321579
    maxRotation(3),               // 3
    maxRotation(35),              // 53
    maxRotation(105),             // 15 -- the leading zero gets dropped
    maxRotation(8703529146),      // 7321609845
// rotateRightmostDigits(735291, 1),      // 735291
// rotateRightmostDigits(735291, 2),      // 735219
// rotateRightmostDigits(735291, 3),      // 735912
// rotateRightmostDigits(735291, 4),      // 732915
// rotateRightmostDigits(735291, 5),      // 752913
// rotateRightmostDigits(735291, 6),      // 352917
)

    // let count = 0;
    // let remainder = 0;

    // while (count < digit) {
    //     remainder = num % 10;
    //     num =  (num - remainder) / 10;
    //     count++;
    // }


    // return num.toString().slice(digit);
    // return num.toString().slice(-1 * digit) //+ remainder;
    // return num.toString().slice(-1 * digit);