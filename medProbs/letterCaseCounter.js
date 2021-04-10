function letterCaseCount(str) {
    let obj = {lowerCaseLetters:0,uppercaseLetters:0,neither:0}
    let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseLetters = lowerCaseLetters.toUpperCase();

    for (let i = 0; i < str.length; i++) {
        if (lowerCaseLetters.includes( str[i])) obj["lowerCaseLetters"] += 1;
        else if (uppercaseLetters.includes(str[i])) obj["uppercaseLetters"]++;
        else obj["neither"]++;
    }

    return obj;
}
console.log(
letterCaseCount('abCdef 123'),  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef'),    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123'),         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount(''),            // { lowercase: 0, uppercase: 0, neither: 0 }
)