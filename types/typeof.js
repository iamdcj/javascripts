// === typeof Operator === //
// typeof returns the type for whatever is in a variable.
//
// The typeof operator will return a string for whatever value
// is given to it - the returned strings are not a one-to-one match
// with the types stated in the spec, e.g. function is typeof function
// however functions are really a subtype of object.


// === Primitives === //

// String
console.log(typeof "David"); // string
console.log(typeof ""); // string

// Number
console.log(typeof 19); // number
console.log(typeof 19.0); // number

// Boolean
console.log(typeof true); // boolean
console.log(typeof false); // boolean

// Undefined
console.log(typeof undefined); // undefined

// Null
console.log(typeof null) // object 😔

// Symbol
console.log(typeof Symbol()) // sybmol

// === Objects === //

// Object
console.log(typeof {}) // object
console.log(typeof { name: "David" }) // object

// Function
const returnGiven = () => "David";
function returnFamily() {
  return "Jones"
};
console.log(typeof returnGiven); // function 
console.log(typeof returnFamily); // function 

// Array
console.log(typeof ["David", "Steffie", "Nole"]); // object
console.log(typeof [1, 2, [ 3, 4 ]]); // object