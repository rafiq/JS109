// This is Bob Rodes with an interesting explanation as well invovling Arabic numbers. Maybe he is a math teacher.
function stringToInteger(string) {
    const ZERO_OFFSET = '0'.charCodeAt();

    return string.split('').reverse().reduce( (acc, char, index) => {
      return acc + (char.charCodeAt() - ZERO_OFFSET) * 10**index;
    }, 0);
  }
// Another from Bob with the object variable.
  function hexToInteger(string) {
    const HEX_TO_DECIMAL = {
      0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
      A: 10, B: 11, C: 12, D: 13, E: 14, F: 15,
    }

    return string.split('').reverse().reduce( (acc, char, index) => {
      return acc + HEX_TO_DECIMAL[char.toUpperCase()] * 16**index;
    }, 0);
  }