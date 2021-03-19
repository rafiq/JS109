let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
  };

  let array = [];
  for (let key in person) {
    array.push([key,person[key]]);
  }

console.log(array)
//   array.push(Object.entries(person))
// console.log(Object.entries(person))
  // Expected output:
  // [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]