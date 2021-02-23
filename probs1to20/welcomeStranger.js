function greetings(array,obj1) {

    return `Hello, ${array[0]} ${array[1]} ${array[2]}! Nice to have a ${obj1["title"]} ${obj1["occupation"]} around. `;
    // return obj1["title"];
}

console.log(
    greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
  );
  // logs Hello, John Q Doe! Nice to have a Master Plumber around.

