// CLASSES: Getters
// ---
// Getters bind properties to a function
// allowing the getter to be called
// when property retrieval is attempted
// getters take no params, and simply return a value
class David {

  constructor() {
    this.surname = "Jones"
  }
  
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

