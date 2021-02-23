function oddities(array) {

    // return array.filter((element, idx) => {
    //     if (array.length <= 1) return [];
    //     idx % 2 === 0 ? element : [];
    // });

    function oddities(array) {
        return array.filter( (_, i) => i % 2 === 0);
      }


    return array.reduce((acc,curr,idx) =>{
        idx % 2 === 0 ? acc.push(curr) : acc;
        return acc
    },[])

}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//     return x === x.split("").reverse().join("");
// };

// console.log(
//     isPalindrome(121),//true
//     isPalindrome(-121),//false
// )