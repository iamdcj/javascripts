// ==== SCOPE ==== //
`const`
declarations can either be scoped globally, or local to its wrapping

function or block.

//* Example - Global Scope
//! global const declarations do not become
//! members of the global object

const Dave = "David";
console.log(window.Dave); // undefined

//* Example - Function Scope
// consts behave as expected in 
// regards to lexical scoping
function test() {
  const foo = "bar"
  console.log(foo);

  function test2() {
    console.log('nested foo: ', foo);
  }

  test2();
}
test()
//{} bar
//{} nested foo: bar

//* Example - Block Scope
// const declarations respect block scope;
{
  const Dave = "David";

  {
    const Dave = "David Jones"
    console.log(Dave) //{} David Jones
  }
  console.log(Dave) //{} David
}

// they do not leak outside blocks,
console.log(Dave) //! Uncaught ReferenceError: Dave is not defined
// a la var declarations
{
  var Dave = "David C Jones";
}
console.log(Dave) // David