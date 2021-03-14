function logInBox(string = "", maxWidth) {
    let substrings = [];
    if (maxWidth === 0) string = "";
    if (string.length > maxWidth) {
      while (string.length > maxWidth) {
        substrings.push(string.slice(0, maxWidth));
        string = string.slice(maxWidth);
      }
    } else {
      substrings.push(string);
    }

    let border = `+ ${"-".repeat(substrings[0].length)} +`;
    let middleString = `| ${" ".repeat(substrings[0].length)} |`;
    console.log(border);
    console.log(middleString);
    substrings.forEach(line => console.log(`| ${line} |`));
  //deal with the remaining string that has a length < maxWidth
    if (string !== substrings[0] && string.length > 0) {
      console.log(`| ${string.trimStart().padEnd(substrings[0].length, " ")} |`);
    }
    console.log(middleString);
    console.log(border);
  }

  logInBox('To boldly go where no one has gone before.', 0);
  logInBox('To boldly go where no one has gone before.', 30);
  logInBox('To boldly go where no one has gone before. To be the bravest of them all. To drink the sea in a glass of beer. To see the miracle is real.', 60);
  logInBox('', 10);
  logInBox('To boldly go where no one has gone before. To be the bravest of them all. To drink the sea in a glass of beer. To see the miracle is real. To boldly go where no one has gone before. To be the bravest of them all. To drink the sea in a glass of beer. To see the miracle is real.', 50)
// My answer below worked well, but I wanted to see how to deal with strings that were unpredictably longer than the mix width allowed. Anotonina answered this by using a while loop that would keep copying and pushing the front portion of string to a temp array, and then set the string to the slice(maxWidth) remainder, which would repeat itself, until all the pieces of the string were cut up.

// function logInBox(str, maxLength = 100) {
//     let emptySpace = 2;

//     console.log("*" + "-".repeat(str.length + emptySpace) + "*");
//     console.log("|" + " ".repeat(str.length + emptySpace) + "|");
//     console.log("|" + " ".repeat(emptySpace / 2)+ str + " ".repeat(emptySpace / 2)+ "|");
//     console.log("|" + " ".repeat(str.length + emptySpace) + "|");
//     console.log("*" + "-".repeat(str.length + emptySpace) + "*");
//     console.log(str.length)
// }


// logInBox('To boldly go where no one has gone before.');
// logInBox('The mother and the father!');
// logInBox('');