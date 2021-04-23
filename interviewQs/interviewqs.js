/*
Write a function called persistence that takes a single argument, a positive number.  The function should return the number argument's multiplicative persistence, which is the number of times you must multiply the digits in the number until the product is a single digit.


input: number
output: number

given a number
separate the digits and multiply them
determine if the product is a single digit
declare a count variable and increment each time the digits are multipled
if product is a single digit, return count
if not, multiply again

turn input number to a string and split into array
map the array to turn the strings back into numbers and reduce array. Split reduced number back into string and check the length
if length === 1, return count
else, continue loop

*/

function persistence(number) {
    let product = number;
    let count = 0;
    if (String(product).length > 1) {
      count++;
    }
    while (true) {
      let productOfDigits = String(product).split('').map(num => Number(num)).reduce((a, b) => a * b);
      if (String(productOfDigits).length === 1) {
        return count;
      }
      count++;
      product = productOfDigits;
    }
  }

  console.log(persistence(39)); // 3
  console.log(persistence(4));  // 0
  console.log(persistence(25)); // 2
  console.log(persistence(999)); // 4

/*

/*
Write a function called persistence that takes a single argument, a positive number.  The function should return the number argument's multiplicative persistence, which is the number of times you must multiply the digits in the number until the product is a single digit.

Example:

persistence(39) returns 3, because
3 * 9 = 27
2 * 7 = 14
1 * 4 = 4

persistence(4) returns 0 because 4 is already a one-digit number
*/

Test Cases
console.log(persistence(39)); // 3
console.log(persistence(4));  // 0
console.log(persistence(25)); // 2
console.log(persistence(999)); // 4


///


You'll be given a string of random characters (numbers, letters, and symbols). To decode this string into the key we're searching for:

(1) count the number occurences of each ascii lowercase letter, and

(2) return an ordered string, 26 places long, corresponding to the number of occurences for each corresponding letter in the alphabet.

Example:
'$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
   ^    ^   ^  ^  ^         ^^^  ^                   ^
  [4]  [3] [2][3][1]        abc  f                   z

'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
 ^  ^   ^   ^                    ^ ^ ^                    ^
[1][3] [3] [3]                   a c e                    z

The string returned should always be 26 characters long, and only count lowercase letters.

You can assume that each lowercase letter will appear a maximum of 9 times in the input str.


console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');




*/

/*
You'll be given a string of random characters (numbers, letters, and symbols).
To decode this string into the key we're searching for:

(1) count the number occurences of each ascii lowercase letter, and

(2) return an ordered string, 26 places long, corresponding to the number of
occurences for each corresponding letter in the alphabet.

Example:
'$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
   ^    ^   ^  ^  ^         ^^^  ^                   ^
  [4]  [3] [2][3][1]        abc  f                   z

'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
 ^  ^   ^   ^                    ^ ^ ^                    ^
[1][3] [3] [3]                   a c e                    z

The string returned should always be 26 characters long, and only count
lowercase letters.

You can assume that each lowercase letter will appear a maximum of 9
times in the input str.
*/

const alpha = 'abcdefghijklmnopqrstuvwxyz';

const decrypt = function(strParam) {
  const alphaBook = {};
  for (let char of alpha) {
    alphaBook[char] = 0;
  }
  const freqTable = strParam.split('').reduce((acc, ele) => {
    if (alpha.includes(ele)) {
      acc[ele] += 1;
    }
    return acc;
  }, alphaBook);
  let result = '';
  Object.keys(freqTable).forEach(key => {
    result += freqTable[key].toString();
  });
  return result;
}


console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');