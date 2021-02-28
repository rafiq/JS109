function runningTotal(array) {
    // let newArray = [];
    let sum = 0;
    return array.map((num,idx) => {
        // if (idx === 0) return num;
        sum += array[idx];
        return num = sum;
    })

    // array.reduce((acc,curr,idx) => {
    //     if (idx = 0) return newArray.push(acc);
    //     acc += curr;
    //     return newArray.push(acc);
    // },0)

// Wes did it.
return arrayP.reduce((acc, ele, idx) => {
    if (idx > 0) {
      acc.push(ele + acc[idx - 1]);
    } else {
      acc.push(ele);
    }
    return acc;
  }, []);

    // for (let i = 0; i < array.length; i++) {
    //     if (i === 0) continue;
    //     array[i] += array[i - 1];
    // }

    // return array;
}
console.log(
runningTotal([2, 5, 13]),             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]),    // [14, 25, 32, 47, 67]
runningTotal([3]),                    // [3]
runningTotal([]),                     // []
)