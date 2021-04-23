// The following code will output undefined since there is not a return specified in the scope of the function.

//Oh, I missed the const which means that the variable can NOT be reassigned because it is now read only. BUTTTTTT I was right about the undefined being logged if const is replaced with let. BOYA!

let a = 1;

function myFunction() {
  a = 2;
}

console.log(myFunction(a));
// const a = 1;

// function myFunction() {
//   a = 2;
// }

// myFunction(a);