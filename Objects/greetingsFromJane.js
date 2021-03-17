let jane = {
    firstName: 'Jane',
    lastName: 'Harrelson',
    age: 32,
    location: {
      country: 'Denmark',
      city: 'Aarhus'
    },
    occupation: 'engineer',
    // add code here
    greet:function(word) {
        return "Hej " + word;
    }
  };



  console.log(jane.greet('Bobby')); // Hej, Bobby!