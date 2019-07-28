// Setters
// ---
// Set bind a property to a function
// allowing the setter to be called
// when setting a propery
const person = {

  // setter: setName
  set setName(name) {
     this.name = name;
  },
  get returnName() {
    return this.name;
  }
}

// Set property via setter
person.setName = "David Jones"
// Retrieve as prop. via getter
console.log(person.returnName); // David Jones


// ----------
// References
// ----------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set