function wordSizes(str) {
    let wordsArray = str.split(" ");
    let wordObj = {};

    for (let word of wordsArray) {
        if (word.length === 0) continue;
        if (wordObj[word.length] === undefined) wordObj[word.length] = 1;
        else wordObj[word.length]++;
    }
    return wordObj;
}
console.log(
wordSizes('Four score and seven.'),                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!'),  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"),                              // { "2": 1, "4": 1, "6": 1 }
wordSizes(''),                                            // {}
)

// Bob Rodes answer
function wordSizes(string) {
    string = string.replace(/( )(?= )/g, '');

    return string.split(' ').reduce( (sizes, word) => {
        // This is a pretty smooth way to either put zero or add one to the key of the object.
      sizes[word.length] = (sizes[word.length] || 0) + 1;
      return sizes;
    }, {});
  }

//   LS went on to remove the non letter characters by adding a helper function that itereated through each character and checked to see if that character was a letter, and if it WAS then it was added to the result string an returned at the end.
function wordSizes(words) {
    let wordsArray = words.split(' ');
    let count = {};

    for (let idx = 0; idx < wordsArray.length; idx += 1) {
      let cleanWordSize = removeNonLetters(wordsArray[idx].toLowerCase()).length;
      if (cleanWordSize === 0) {
        continue;
      }

      count[cleanWordSize] = count[cleanWordSize] || 0;
      count[cleanWordSize] += 1;
    }

    return count;
  }

  function removeNonLetters(string) {
    let result = '';

    for (let idx = 0; idx < string.length; idx += 1) {
      if (isLetter(string[idx])) {
        result += string[idx];
      }
    }

    return result;
  }

  function isLetter(char) {
    return char >= 'a' && char <= 'z';
  }