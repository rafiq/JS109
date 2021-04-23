// var is hoisted which means that the variable greeting is declared at the top of the program and but is assigned to the value of undefined, and then it is reassigned the value of "Hellow World" at the end of the program which is why the console.log returns undefined because at that point in the program it is still undefined.

// console.log(greeting);

// var greeting = 'Hello world!';
// //
// var greeting;

console.log(greeting);

const greeting = 'Hello world!'
// So var is the only one that is hoisted. Const and let are not.