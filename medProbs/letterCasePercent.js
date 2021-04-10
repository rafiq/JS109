function letterPercentages(str) {
    let letterObj = {lowercase:0,uppercase:0,neither:0};

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "a" && str[i] <= "z") letterObj["lowercase"]++;
        else if (str[i] >= "A"  && str[i] <= "Z") letterObj["uppercase"]++;
        else letterObj["neither"]++;
    }

    // return letterObj
    return `{ lowercase:${letterObj["lowercase"] / str.length * 100}%, uppercase:${letterObj["uppercase"] / str.length * 100}%, neither:${letterObj["neither"] / str.length * 100}%`;
}
console.log(
letterPercentages('abCdef 123'),
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef'),
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123'),
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
)