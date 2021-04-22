// This code will output false because b is in the global scope and re declared on the inner scope which produces a variable shadow and will not change the global scope variable.

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

