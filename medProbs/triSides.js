function triangle(...nums) {
    let sortedArray =  nums.sort((a,b) => a - b);
    let longest = Math.max(...nums);
    if (sortedArray[0] + sortedArray[1] < longest) return "invalid"
    for (let num of nums) {
        if (num === 0) return "invalid";
    }
    // let shortest = Math.min(...nums);
    if (sortedArray[0] === sortedArray[1] && sortedArray[1] === sortedArray[2]) return "Equilateral";
    else if (sortedArray[0] !== sortedArray[1] && sortedArray[1] !== sortedArray[2]) return "Scalene";
    else return "Isosceles";
    // if (longest)
    // return max;
}
console.log(
triangle(3, 3, 3),        // "equilateral"
triangle(3, 3, 1.5),      // "isosceles"
triangle(3, 4, 5),        // "scalene"
triangle(0, 3, 3),        // "invalid"
triangle(3, 1, 1),        // "invalid"
)