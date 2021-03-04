function doubleConsonants(str) {
    let wordsArray = str.split(" ");

    return str.split("").reduce((acc,curr) => {
        if (isConstonant(curr)) acc += curr + curr;
        else acc += curr;
        return acc;
    },"")
}

function isConstonant(letter) {
    const CONSONANTS = "bcdfghjklmnpqrstvwxyz";
    return CONSONANTS.split("").includes(letter);
}
console.log(
doubleConsonants('String'),          // "SSttrrinngg"
doubleConsonants('Hello-World!'),    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th'),        // "JJullyy 4tthh"
doubleConsonants(''),                // ""
)