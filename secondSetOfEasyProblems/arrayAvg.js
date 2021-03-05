function average(array) {
// reduce method

    let sum = array.reduce((acc,curr,idx) => {
        acc += curr;
        return acc;
    },0)

    return Math.floor(sum / array.length);

    // forEach method
    // let sum = 0;

    // array.forEach(num => sum += num)

    // return Math.floor(sum / array.length);
}
console.log(
average([1, 5, 87, 45, 8, 8]),       // 25
average([9, 47, 23, 95, 16, 52]),    // 40
)