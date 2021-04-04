function palindromes(str) {
    let newArray = [];

    let subStrings = substrings(str);
    return subStrings.filter(sub => {
        return sub.split("").reverse().join("") === sub && sub.length > 1;
    })
}

function substrings(string) {
    let substrings = [];
    for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
      let substring = string.substring(startIndex);
      substrings =substrings.concat(leadingSubstrings(substring));
    }

    return substrings;
  }

  function leadingSubstrings(string) {
    let substrings = [];
    for (let length = 1; length <= string.length; length += 1) {
      substrings.push(string.slice(0, length));
    }

    return substrings;
  }


console.log(
palindromes('abcd'),       // []
palindromes('madam'),      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye'),
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes'),
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


)