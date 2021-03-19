function clone(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let keyValues = Object.entries(obj);
    let temp = {};

    for (let i = 0; i < keys.length; i++) {
        temp[keys[i]] = values[i];
    }

    return temp;
  }

  let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
  };

  let clonedPerson = clone(person);
  person.age = 34;

  console.log(person.age);       // 34
  console.log(clonedPerson.age); // 33
  console.log(clonedPerson);

// My code above worked and I am really stoked about that. I really like how Mr Rodes is able to explain and give extra examples and scenarios that are really important. For example, below he is showing how to deep Copy an object, even if it has nested objects for values.
function deepClone(obj) {
    let deepCopy = {};

    Object.keys(obj).forEach( prop => {
      if (obj[prop] instanceof Date) {
        deepCopy[prop] = new Date(obj[prop]);
      } else if (typeof obj[prop] === 'object') {
        deepCopy[prop] = deepClone(obj[prop]); // Here's the recursive call
      } else {
        deepCopy[prop] = obj[prop];
      }
    });

    return deepCopy;
  }

  let person = {
    title: 'Duke',
    name: {
      value: 'Nukem',
      isStageName: true
    },
    dateOfHire: new Date('1/1/11'),
    age: 33,
  };

  let clonedPerson = deepClone(person);
  clonedPerson.name.isStageName = false;
  clonedPerson.dateOfHire.setDate(10);

  console.log(person);
  console.log(clonedPerson);