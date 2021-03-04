function union(arr1,arr2) {
    // let set = new Set();

    return removeDups(arr1.concat(arr2));
}

function removeDups(arr) {
    let set = new Set()

    for (let i of arr)
    set.add(i);

    return set;

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) arr.splice(i,1);
    // }
    // return arr;
}
console.log(
union([1, 3, 5], [3, 6, 9]),    // [1, 3, 5, 6, 9]
union([1, 3, 5], [2,2,2,12,11,11,9,0,3, 6, 9]),    // [1, 3, 5, 6, 9]
union([1, 3, 5,3,5,67,7,9,], [3, 6, 9]),    // [1, 3, 5, 6, 9]
)

// While both my answers above worked, I think the LS answer below is a good example of the pass by reference idea. The second function is in real time manipulating the variable from the first function since both variables are pointint to the same reference points.
function copyNonDupsTo(resultArray, array) {
    array.forEach(value => {
      if (resultArray.indexOf(value) === -1) {
        resultArray.push(value);
      }
    });
  }

  function union(array1, array2) {
    let newArray = [];
    copyNonDupsTo(newArray, array1);
    copyNonDupsTo(newArray, array2);
    return newArray;
  }
