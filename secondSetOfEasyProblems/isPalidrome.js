isLetter(string[idx]) || isNumber(string[idx])

// I really like how this function used the isLetter and isNumber methods which they created themselves using a boolean value that checks if the inputted character is between a and "z".
function isRealPalindrome(string) {
    string = removeNonLetterNumbers(string.toLowerCase());
    return isPalindrome(string);
  }

  function removeNonLetterNumbers(string) {
    let result = '';

    for (let idx = 0; idx < string.length; idx += 1) {
      if (isLetter(string[idx]) || isNumber(string[idx])) {
        result += string[idx];
      }
    }

    return result;
  }

  function isLetter(char) {
    return char >= 'a' && char <= 'z';
  }

  function isNumber(char) {
    return char >= '0' && char <= '9';
  }