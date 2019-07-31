// Getters
// ---
// Getters bind a property to a function
// allowing the getter to be called
// when property retrieval is attempted
const Person = {
  givenName: "David",
  familyName: "Jones",
  get fullName() {
    return `${this.givenName} ${this.familyName}`
  }
}

// Retrieve as prop. via getter
console.log(Person.fullName);
