function leadingSubstrings(string) {
    // let newArray = string.split("");

    // return newArray.reduce((acc,_,idx) => {
    //     acc.push(string.slice(0,idx + 1))
    //     return acc;
    // },[])


    // let newArray = [];
    // let increment = 0;

    // while (increment < string.length) {
    //     for (let i = 0; i < string.length; i++) {
    //         newArray.push(string.slice(increment,i + 2));
    //     }
    //     increment++;
    // }

    return string.slice(-4);
}
console.log(
leadingSubstrings('abcde'),      // ["a", "ab", "abc"]
leadingSubstrings('a'),        // ["a"]
leadingSubstrings('xyzzy'),    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
)