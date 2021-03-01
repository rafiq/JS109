function swapName(str) {
    let wordsArray = str.split(" ");

    return wordsArray[1] + ", " + wordsArray[0];
}
console.log(
swapName('Joe Roberts'),    // "Roberts, Joe"
)