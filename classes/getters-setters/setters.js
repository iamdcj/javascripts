// Setters
// ---
// Set bind a property to a function
// allowing the setter to be called
// when setting a propery
class David {

  constructor() {
    this.surname = "Jones"
  }
  
  // setter: setName
  set setName(name) {
    this.forename = name;
  }

  get returnName() {
    return this.forename;
  }
}

// new instance of David
const Dave = new David();

// Use setter to set forename property
Dave.setName = "David";

// retrieve forename property
// via getter
console.log(Dave.returnName); // "Davud"


// ----------
// References
// ----------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set