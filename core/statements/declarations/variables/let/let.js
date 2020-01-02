// === REASSIGNMENT AND REDECLARATION === //
//* EXAMPLE 1 - Reassignment
{
  let name = "David";
  console.log(name); // David

  name = "David Jones";
  console.log(name); // David Jones
}

//* EXAMPLE 2 - Declaration w/o Initialization
{
  let chosenPerson;
  let people = ["David", "Dave", "Davy"];

  chosenPerson = people.find(person => person.length > 4);

  console.log(chosenPerson) // David
}

//* EXAMPLE 3 - Redeclaration
{
  {
    let foo = "bar"; {
      let foo = "baz";
      console.log(foo) // baz

      {
        let foo = "bazola";
        console.log(foo) // bazola
      }
    }

    {
      let foo = "quux";
      console.log(foo) // quux
    }
    console.log(foo) // bar
  }
}

//* Shadowing
{
  let foo = "bar"; {
    let foo = "baz";
    console.log(foo) // baz

    {
      let foo = "bazola";
      console.log(foo) // bazola
    }
  }

  {
    let foo = "quux";
    console.log(foo) // quux
  }
  console.log(foo) // bar
}

//* E

// ==== SCOPE ==== //
//* Example - Global Scope
let Dave = "David";
console.log(window.Dave); //{}\ undefined

//* Example - Block Scope
{
  {
    let Dave = "David";
    console.log(Dave); //{} David
  }
  console.log(Dave); //! Uncaught ReferenceError: Dave is not defined
}

//* Example - Function Scope
{
  function test() {
    let foo = "bar"
    console.log(foo);

    function test2() {
      console.log(foo);

    }

    test2();
  }
  test();
  //{} bar
  //{} bar
}

// === let vs. var


//* Example - global object members
// let
let fooGlob = "bar";
console.log(window.fooGlob); // undefined
//! var
var barGlob = "foo";
console.log(window.barGlob); // foo

//* scope leakage
{

  function foo() {
    {
      let baz = "bar";
      var bar = "foo";
    }
    // var
    console.log(bar);
    // let
    console.log(baz);
  }
  foo();
  //{} foo
  // !Uncaught ReferenceError: baz is not defined
}

//* Example - block scope with for loops
{
  //! var - leakage
  for (var i = 0; i < 10; i++) {
    // ...do sumfink
  }
  console.log(i); //{} 10

  // let - no leakage
  for (let k = 0; k < 10; k++) {
    // ...do sumfink
  }
}
console.log(k); //! Uncaught ReferenceError: k is not defined

//* Example - block scope with for loops and async

//! var - no binding for each iteration
{
  for (var i = 0; i < 10; i++) {
    // mimic async
    setTimeout(() => {
      console.log("iteration: ", i);
    }, 1000)
  }
  //{} iteration:  10 (x10)

  // let - tracker is bound every iteration
  for (let i = 0; i < 10; i++) {
    // mimic async
    setTimeout(() => {
      console.log("iteration: ", i);
    }, 1000)
  }
  //{} iteration: 0
  // ...
  //{} iteration: 9
}