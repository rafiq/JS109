function cleanUp(string) {
    let stringArray = string.split(" ")
    let regex = /[a-zA-Z]/;
    let filtered = [];
    stringArray.forEach(word => {
        for (let i = 0; i < string.length; i++) {
            if (string.codePointAt(i) >= 97) {
                filtered.push(string[i])
            }
        }
    })
    return stringArray;
    // return filtered.join(" ");
    // return string.codePointAt(5);
    // stringArray.forEach(letter => {
    //     if (string.codePointAt(letter) > 127) {
    //         filtered.push(letter);
    //     }
    // })
    // stringArray.filter(letter => letter)

}
console.log(
cleanUp("---what's my +*& line?"),    // " what s my line "
)