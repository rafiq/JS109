// When trying to access a value of the key that does not exist returns undefined.

let student = {
    name: 'Carmen',
    age: 14,
    grade: 10,
    courses: ['biology', 'algebra', 'composition', 'ceramics'],
    gpa: 3.75,
  };

  console.log(student["locker"] = 35);
  console.log(student);