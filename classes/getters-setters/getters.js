// Getters
// ---
// Getters bind properties to a function
// allowing the getter to be called
// when property retrieval is attempted
// getters take no params, and simply return a value
class David {

  constructor() {
    this.surname = "Jones"
  }

  get returnName() {
    return this.surname;
  }
}

// Returns result of name getter function
// note no invocation braces
console.log(David.returnName); // Jones


// ----------
// References
// ----------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get