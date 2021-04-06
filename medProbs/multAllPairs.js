function multiplyAllPairs(arr1,arr2) {
    //for loop
    let newArray = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            newArray.push(arr1[i] * arr2[j]);
        }
        }
    return newArray.sort((a,b) => a - b);

    // while (j < arr2.length) {
    //     newArray.push(arr1[i] * arr2[j])
    //     j++;
    // }
    // i++;
    // while (j < arr2.length) {
    //     newArray.push(arr1[i] * arr2[j]);
    //     j++;
    //     while (i < arr1.length) {
    //         i++;
    //     }
    // }
    // return newArray;


    //reduce
    // let newArray =  arr1.reduce((acc,curr) => {
    //     for (let i = 0; i < arr2.length; i++) {
    //         acc.push(curr * arr2[i])
    //     }
    //     return acc;
    // },[])

    // return newArray.sort((a,b) => a - b)

}
console.log(
multiplyAllPairs([2, 4], [4, 3, 1, 2]),    // [2, 4, 4, 6, 8, 8, 12, 16]
)