function buyFruit(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i][1]; j++) {
            newArray.push(array[i][0])
        }
    }
    return newArray;


}
console.log(
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]),

// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
)

// `the LS answer is a good reminder that a nested for loop is similar to doing a method call like map and then having a for loop again. Also, I like how the LS answer shows that you can have each individual call on an item to another function and return it.
function buyFruit(fruitsList) {
    return fruitsList
      .map(fruit => repeat(fruit))
      .reduce((groceryList, fruit) => groceryList.concat(fruit));
  }

  function repeat(fruitAndQuantity) {
    let result = [];
    let fruit = fruitAndQuantity[0];
    let quantity = fruitAndQuantity[1];

    for (let num = 0; num < quantity; num += 1) {
      result.push(fruit);
    }

    return result;
  }