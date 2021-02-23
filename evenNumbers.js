function evenNumbers(num) {
    let rlsync = require("readline")

    let i = 0;
    while (i < num) {
        console.log(i);
        i += 2;
    }
}
evenNumbers(10);

// Below is the LS Answer and I like how it did this problem a little differently. They had their for loop increment one integer at a time, but they used the conditional statement of if this iterated number is odd, then continue or skip it (aka terminate that loop) and then console.log any number that is not odd.