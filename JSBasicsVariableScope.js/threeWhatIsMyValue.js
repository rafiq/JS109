// THis code logs myValue is not defined because it is declared within the scope of the function and not globally. The function has permission to reassign a global variable, but it does not have permission to declare a global variable.

// if (true) {
//     let myValue = 20;
//   }

//   console.log(myValue);
let { bar } = foo;
console.log(foo)