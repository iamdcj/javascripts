// Getters
// ---
// Getters bind a property to a function
// allowing the getter to be called
// when property retrieval is attempted
const person = {
  name: "David",


  // getter: returnName
  get returnName() {
    return this.name;
  }
}

// Retrieve as prop. via getter
console.log(person.returnName); // David

// ----------
// References
// ----------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get