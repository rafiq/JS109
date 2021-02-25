function stringToSignedInteger(str) {
   let array = str.split("");
   let obj = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9};

   if (array[0] === "-") {

   }
   let mapped = array.map(element => obj[element])



   return mapped;
}

console.log(stringToSignedInteger("4321")); // logs true
console.log(stringToSignedInteger("-570")); // logs true
console.log(stringToSignedInteger("+100")); // logs true
// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true
// function stringToSignedInteger(str) {
//     return str * 1;
// }