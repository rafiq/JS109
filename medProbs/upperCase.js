function isUppercase(str) {
    let lowerAlpha = "abcdefghijklmnopqrstuvwxyz"
    let upperAlpha = lowerAlpha.toUpperCase();
    let array = str.split("").filter(letter => isLowerCaseLetter(letter))
    if (str.length === 0) return true;
    if (array.length > 0) return false;
    for (let i = 0; i < str.length; i++) {
        if (upperAlpha.includes(str[i])) return true;
    }

    //     // if (lowerAlpha.includes(str[i]) && !upperAlpha.includes(str[i])) return false
    //     // else return true;
    // }


    // return
}
function isLowerCaseLetter(char) {
    return (char >= "a" && char <= "z")
}
console.log(
isUppercase('t'),               // false
isUppercase('T'),               // true
isUppercase('Four Score'),      // false
isUppercase('FOUR SCORE'),      // true
isUppercase('4SCORE!'),         // true
isUppercase(''),                // true
)