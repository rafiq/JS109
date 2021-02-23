function shortLongShort(str1,str2) {
    if (str1.length > str2.length) {
        return str2 + str1 + str2;
    } else {
        return str1 + str2 + str1;
    }
    // let [shorter,longer] = [Math.max(str1.length,str2.length),Math.min(str1.length,str2.length)];
    // let longer = Math.max()

    // return shorter + longer + shorter;
}
console.log(
shortLongShort('abc', 'defgh'),    // "abcdefghabc"
shortLongShort('abcde', 'fgh'),    // "fghabcdefgh"
shortLongShort('', 'xyz'),         // "xyz"
)