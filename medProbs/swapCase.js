function swapCase(str) {
    let newArray = [];
    let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseLetters = lowerCaseLetters.toUpperCase();

    for (let i = 0; i < str.length; i++) {
        if (lowerCaseLetters.includes(str[i])) newArray.push(str[i].toUpperCase());
        else if (uppercaseLetters.includes(str[i])) newArray.push(str[i].toLowerCase());
        else newArray.push(str[i]);
    }
    return newArray.join("");
}
console.log(
swapCase('CamelCase'),              // "cAMELcASE"
swapCase('Tonight on XYZ-TV'),      // "tONIGHT ON xyz-tv"
)

// The LS answer below is good because they did not have to do as much typing as I had to do. They didn't type out the letters and just instead used the ASCII equivalents by setting the letter equal to "a". THey also just used the map method as opposed to creating a new array and then pushing to that array and then finishing.
function swapCase(string) {
    return string
      .split("")
      .map(char => {
        if ((char >= 'a') && (char <= 'z')) {
          return char.toUpperCase();
        } else if ((char >= 'A') && (char <= 'Z')) {
          return char.toLowerCase();
        } else {
          return char;
        }
      })
      .join("");
  }