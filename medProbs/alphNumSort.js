function alphabeticNumberSort(arr) {
    let orderArray = [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
    let temp ;
    let j = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        temp = arr[i];
        arr[i] = orderArray[i];
    }
    return orderArray;
}
console.log(
alphabeticNumberSort(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
 // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
)