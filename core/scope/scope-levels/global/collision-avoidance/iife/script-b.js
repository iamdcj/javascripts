// Script A declared a and b variables
// but due to them being scoped to the function's lexical environment 
// these are not members of the global object

console.info("==== GLOBAL SCOPE ====");
console.log(window.a, window.b); // undefined undefined˘