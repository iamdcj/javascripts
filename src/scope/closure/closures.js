//* EXAMPLE 1 - Basic Closure
function outer(thing) {
  const a = 'OUTER';
  return function inner() {
    console.log(thing, a);
  }
}

const inner = outer('I AM INSIDE');

inner(); //{} I AM INSIDE OUTER

//* EXAMPLE 2 - Basic Privacy and currying
function AnAPI(a) {

  function adder(a, b) {
    return `The result is: ${a + b}`;
  }

  return function result(b) {
    return  adder(a, b); //{} the a binding is closed over by the AnAPI function.
  }

}

const plusOne = AnAPI(1);

plusOne(2); //{} "The result is: 3"


//* EXAMPLE 3 - More complex privacy and exposure (taken from: https://www.freecodecamp.org/news/learn-javascript-closures-in-n-minutes/ )
const BankAccountAPI = function(initialBalance) {
  let balance = initialBalance; //! private, closed-over binding, only accessible within this lexical environment
  
  //* Return public API methods
  //* the accountBalance is what is closed over
  return {
      getBalance: function() { 
        return `${balance}`; 
      },
      deposit: function(amount) { 
        balance += amount; 
      },
      withdraw: function(amount) {
          if (amount > balance) {
              return 'Not enough dollar!';
          }

          balance -= amount;
      }
  };
}

//* Set initial amount
const  BankManager = BankAccountAPI(0);

//* Deposit funds
BankManager.getBalance(); //{} 0
BankManager.deposit(1000);
BankManager.getBalance(); //{} 1000