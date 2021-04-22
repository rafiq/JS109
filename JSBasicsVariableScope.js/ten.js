// Another const..., but within const objects can be modified(added, deleted, but not recreated. ) This will output Jane Doe object.

const a = {
    firstName: 'John',
    lastName: 'Doe'
  };

  function myFunction() {
    a.firstName = 'Jane';
  }

  myFunction();

  console.log(a);