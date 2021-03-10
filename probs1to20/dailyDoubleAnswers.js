// The answer below is from Antonina and I like how she used the filter method to solve this problem. I wanted to use it but couldn't think of how to do it. Essentially, all she did was use the same logic I used in my for loop, but used it in the callback parameter of the filter method. She is also saving that copied array from the filter into the variable named finalLetters, which she returns at the end of the function and joins each character together.

// In the function below, it expects a string as input and will produce a string as output that will have all the consecutive repeating letters removed. It accomplishes this by splitting the string into individual characters and storing that value into the variable named characters. Next, the filter method iterates over each "letter" and compares it to the "letter" plus one index of the original letter. If they do not match, then that original "letter" is stored in the finalLetters variable. In the end, the finalLetter variable is outputted and joined together in.
function crunch(string = "") {
    let characters = string.split("");

    let finalLetters = characters.filter((letter, index) => {
      return letter !== characters[index + 1]
    });
    return finalLetters.join("");
  }

  //Using regular expression

  function crunch(string = "") {
    const regex = /./gi;
    let characters = string.match(regex);
    if (characters === null) return "";
    return characters.filter((letter, index) => letter !== characters[index + 1]).join("");
  }