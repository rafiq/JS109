function interleave(arr1,arr2) {
    // // for loop
    // let newArray = [];
    // for (let i = 0; i < arr1.length; i++) {
    //     newArray.push(arr1[i]);
    //     newArray.push(arr2[i]);
    // }

    // return newArray;

    //forEach
    // let newArray = [];

    // arr1.forEach((el,idx) => {
    //     newArray.push(el);
    //     newArray.push(arr2[idx])
    // })

    // return newArray;

    //for loop and must mutate one original array
    // for (let i = 0; i < arr2.length; i++) {
    //     arr1.splice((2 * i + 1), 0,arr2[i]);
    // }

    // return arr1;

    //reduce method
    // return arr1.reduce((acc,el,idx) => {
    //     acc.push(el);
    //     acc.push(arr2[idx])
    //     return acc;
    //     },[])

}
console.log(
interleave([1, 2, 3], ['a', 'b', 'c']),    // [1, "a", 2, "b", 3, "c"]
)