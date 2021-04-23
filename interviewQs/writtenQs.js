function digitList(num) {
  // turn the num into a string, split it, and push it into an array
  let strArray = (num + "").split("");

  return strArray.map(num => num * 1)
}
//////////////////////////////////////////////////////////////////////////////

let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log(arr1 + arr2);
console.log(arr1.concat(arr2))

//implicit vs explicit coercian
//////////////////////////////////////////////////////////////////////////////
function reverseArrayInPlace(array) {
  let temp ;
  let index = Math.floor((array.length - 1) / 2);
  let endIndex = array.length - 1;

  for (let i = 0; i < index; i++) {
      temp = array[i];
      array[i] = array[endIndex - i];
      array[endIndex] = temp;
  }

}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

//////////////////////////////////////////////////////////////////////////////
;
function listToArray(list) {
  return Object.keys(list).map((key) => list[key])
}
listToArray({value: 10, rest: {value: 20, rest: null}})
//////////////////////////////////////////////////////////////////////////////

function foo(list) {
    list.push(4);
  }


  let nums = [1, 2, 3];

  foo(nums)

  console.log(nums);


//   //////////////


forEach
returns undefined
iterates through the calling array, invokes that callback once for each element
ignores the return value of the callback

map
returns a new array
executes callback once for each element of the calling array
map will use the return value of the callback on each iteration as the new element in the returned arr

filter
filter
iterates over an array
returns a new array
element passed to the callback function will be added to the new array

callback returns the original element to a new array
if the test on that element is truthy.a

let greeting = ["Hello"];

function test(arr) {
  arr = arr.concat("World!");
  return arr;
}

test(greeting);
console.log(greeting);



//
let greeting = ["Hello"];

function test(arr) {
  arr = arr.concat("World!"); //This is reassigning of the variable or pointing to another reference point.
  return arr;
}

test(greeting); // return two element array
console.log(greeting); // logs one element array

// pass-by-reference
//



let initGame = () => {
    return {
      level: 1,
      score: 0
    }
  };

  let game = initGame();

  console.log('Level: ' + game.level);
  console.log('Score: ' + game.score);




  // What is the input?
// What is the output?
// What is the return value?
// What is the concept that is being conveyed?

// function foo(list) {
//   list.push(4);
// }

// let nums = [1, 2, 3];

// foo(nums)

// console.log(nums);
// Below is Tim's rendition.
// A function definition is named `foo` is defined which has one parameter. Within the `foo` function the list parameter is assumed to have an array passed in as an argument. Then the number 4 is pushed to the end of the array that was passed in, mutating the array. But, nothing is returned within the function. On line 10, a variable called `nums` is declared and the value is an array with the value of [1, 2, 3]. Then on line 12, the `foo` function is invoked, mutating the array, but not returning the mutated array. Once the function finishes executing, the mutated array is then logged to the console. Resulting in [1, 2, 3, 4] and undefined on a new line.

// Notes
// Be more clear about where `undefined` is being called, its actually in the block and not returning undefined from console.log();




let number = 10;

[1, 2, 3].forEach(number => {
  console.log(number);
});
// Below is my attempt with feedback from Tim.
// So a variable is declared in the global scope to the value of ten. An array has the `forEach` method called on it and within the parameter it uses a callback function in the form of an arrow function. The callback console logs each element of the array to the console. The return value is `undefined` since `forEach` returns `undefined` by default. The concept here is that block scope inside a function is independent of global scope and what is outputted is 1,2,3 on individual lines. This also an example of variable shadowing since the global variable and the local variable has the same name.


let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// ////////////////////////////////////////////////////////////////////////

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();
//1
// ////////////////////////////////////////////////////////////////////////

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);
//2
// ////////////////////////////////////////////////////////////////////////


const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);
//TypeError: Assignment to constant variable.
//Note that passing a as an argument to myFunction on line 7 has no effect, as the function does not declare any parameters. It is an excess argument that is simply ignored in the function body.
// ////////////////////////////////////////////////////////////////////////


const a = {
    firstName: 'John',
    lastName: 'Doe'
  };

  function myFunction() {
    a.firstName = 'Jane';
  }

  myFunction();

  console.log(a);
  //{ firstName: 'Jane', lastName: 'Doe' }
// ////////////////////////////////////////////////////////////////////////

console.log(greeting);

var greeting = 'Hello world!';
//undefined;
// ////////////////////////////////////////////////////////////////////////

console.log(greeting);

let greeting = 'Hello world!';
//ReferenceError: Cannot access 'greeting' before initialization
// ////////////////////////////////////////////////////////////////////////

if (true) {
    let myValue = 20;
  }

  console.log(myValue);
  //ReferenceError: myValue is not defined

// ////////////////////////////////////////////////////////////////////////

function myFunction() {
    let a = 1;

    if (true) {
      console.log(a);
    }
  }

  myFunction();
  //1

// ////////////////////////////////////////////////////////////////////////


function myFunction() {
    let a = 1;

    if (true) {
      console.log(a);
      let a = 2;
      console.log(a);
    }
  }

  myFunction();
  //ReferenceError: Cannot access 'a' before initialization

// ////////////////////////////////////////////////////////////////////////

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);
//false

// JUAN
let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// // On line 14, we declare variable `a` and assign it the number 5. On line 15, we declare variable `b` and assign it the boolean value `false`. On line 17, we use a conditional to check if `a` is greater than 4. If so, we declare a local variable `b` and assign it the boolean value `true`. On line 21, we log the value of the global variable `b`, which is false. This demonstrates variable shadowing since the local block variable `b` is not the same one as the global variable `b`.


// ////////////////////////////////////////////////////////////////////////

let arr = [5, 8, 11, 20];

let greaterThanTen = arr.find((num) => {
  return num > 10;
});

console.log(greaterThanTen);

// So a variable named `arr` is declared and ASSIGNED A REFERENCE to an array of length four. Then a variable is named greaterThanTen is declared and ASSIGNED to the RETURN value of the find method which takes one parameter `num`. The find method IS CALLED ON ARR AND IT iterates through the array and returns the FIRST number greater than ten in the `arr` array. The output will be THE FIRST NUMBER THAT IS greater than ten WHICH IS 11 BECAUSE IT STOPS AT THE FIRST TRUTHY RETURN.

// ////////////////////////////////////////////////////////////////////////
