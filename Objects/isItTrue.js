// I think this will not output Its true because the property called true is a string and not the boolean. It would work if we said if it is (true), but then it would log every property.

let obj = {
    num: 42,
    'property name': 'string value',
    true: false,
    fun: function() {
      console.log('Harr Harr!');
    },
  };

  for (let prop in obj) {
    if (true) {
      console.log("It's true!");
    }
  }