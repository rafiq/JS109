// I would need to convert the string into an array split by a space. THen I would have to iterate over that array of words and use a switch statement to find the corresponding number, and then reassign that word to the corresponding numer that is in the wordList object. Finally, I would return the modified array by joinging it

function wordToDigit(str) {

    let wordList = {'zero':0, 'one':1, 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine'};

    return str.split(" ").map(el => {
        switch (el) {
            case "":

                break;

            default:
                break;
        }
    })

    return str.split(" ");
}
console.log(
wordToDigit('Please call me at five five five one two three four. Thanks.'),
// "Please call me at 5 5 5 1 2 3 4. Thanks."
)