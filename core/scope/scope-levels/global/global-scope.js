// The following declarations will all become members
// of the global object
var globalVariable = "Look at me, on the window";
var anotherGlobalVariable = "I am also on the window";
var anotherAnotherGlobalVariable = "I am on the window too";

// This function will become a method on the global object
function globalMethod() {
  console.log(window.globalVariable); // Look at me, on the window
  console.log(window.anotherGlobalVariable); // I am also on the window
  console.log(window.anotherAnotherGlobalVariable); //I am on the window too
  console.log(this); // Window{...}
}
globalMethod()