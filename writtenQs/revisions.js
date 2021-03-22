// function foo() {
//     if (true) {
//       let number = 42;
//     }

//     console.log(number);
//   }

//   foo();

// function shout(string) {
//     string = string.toUpperCase();
//     console.log(string)
//   }

//   let sentence = "hello world";
//   console.log(shout(sentence));

//   console.log(sentence); // => hello world


console.log("" == [])
  /*
  // #3
  The variable number is initialized inside the if conditional's scope and thus only can be accessed within the if statement. When the console log tries to pass the variable number from outside the scope of the if statement, there is an error thrown because outside scope cannot access inner scope variables. As a result, the an error is raised and nothing is logged to the console.

#5
The last global variable is the function named `greeting` since in JS functions are first class and can be passed as variables.

#6
The function named run is declared in the global scope which means it can be hoisted or used throughout the program. Thus, the run function is invoked from line one. Whereas the function expression named wasCalled is not able to be hoisted because JS does not allow function expressions to be hoisted.

#8
List of all the variables: a , b, c, d, arg List of all the primitive values: 1, 2, 3, null, 'abc', undefined List of all the objects: [1, 2, null, 3] , function(arg) {}

#10
The above code is a demonstration of variable scope in JS. The variable `sentence` is declared in the global scope and initiated to the value of a string. Then it is passed as an argument to the function named `shout`, but the `shout` function creates a new variable with scope just inside the function named `string`. Since the variable `string` is limited to the scope of the function, and reassigned inside the function, it does not change the reassignment of the global function `sentence` which keeps its original value of `hello world`.

#11
This is because we are not reassigning or re-declaring the variable that  `sentence` is pointing to, but since it is an object we can modify the elements of the object.

#15
The filter method is invoked on arrays only. The argument of the filter method is a callback function that tests and returns the elements that pass the callback function test. For example, if the callback function is `elements => elements > 5`, then a new array will be returned with all the elements that are greater than five in this case because only the elements that are greater than 5 would be truthy with this particular test and the rest would be falsey for this test. Also, since the callback function tests truthiness it could say `elements => elements === 5` which would return a new array with all the elements that equalled five or that were truthy when run through the callback function.

#16
In addition, the map method uses the callback function to perform an operation on each element and returns that new array. Whereas the filter method uses the callback function to test each element of an array, and it will return a new array with the elements that pass that test.

#18
The sort method does not always convert numbers to strings; Only if there are no arguments passed. In order to sort an array of numbers in ascending or descending order one has to pass a callback function with the desired sort pattern inputted. For example, `(a,b) => a - b`.  Under the hood the pattern is either returning -1, 1, or 0 when it compares two elements from an array depending on if the user wants the sort in ascending order or descending order.

  */
