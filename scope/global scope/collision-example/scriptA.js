// Global declaration for User 
// binds to the global object has
function User() {
  // This will log the User method (this function)
  console.log(window.User)
}

// Logs out the function above
console.log(User); // User() {...}


// We create a click listener on the document, this
// will run a callback which invokes User()
document.documentElement.addEventListener('click', function(){

  //* CALL USER FUNCTIONS
  User();
});


//! Uncaught TypeError: User is not a function
// Another script has declared a variable for User in the global scope
// the value is an empty string; when the user clicks on the document
// the User binding is no longer a function, hence the error


