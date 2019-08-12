# Hoisting?
Hoisting is a result of declarations being assessed at compile time; declarations are essentially moved to the top of the code/scope.

At a high-level the compiler will do the following things to perform hoisting;

1. assess an environment, 
2. determine which declarations  live in the environment
3. create a binding at the top of the block for declaration
  3.1 Variables are initialised to undefined
  3.2 Functions are initialised with their actual value 

—


The following examples demonstrate how hoisting occurs with function declarations and variables, but not function expressions;

1. Basic Example
This example gives a breakdown of the sort of thing which occurs to result in hoisting.

SOURCE CODE
console.log( a );

var a = “foo”;

COMPILATION
The declaration is handled first; moved to the top of the block.
var a;

EXECUTION
Then the log and assignment is handled at runtime.
console.log( a ); // undefined

a = “foo”;

The fact that the log doesn’t throw and error demonstrates the hoisting does occur; 
The RHS look-up in the console.log occurs before the declaration in the assignment, but when it comes to run-time a is essentially above the log, hence  ‘undefined’ being returned.

HOISTING ONLY RE-ARRANGES DECLARATIONS

2. Lexical Example 
This example demonstrates hoisting using function declarations, AND how hoisting occurs per-scope;

SOURCE CODE
The function call for foo() lives above the actual function declaration.
foo();

function foo() {
        console.log( a );


        var a = 2;
}

COMPILATION
However at compilation time the function declaration is hoisted to the top of the scope.
function foo

EXECUTION
Now that the function declaration is above the function call, it can run the function.
foo() // undefined

The function does run, however hoisting occurs within the function itself; this results in the log returning undefined for the RHS reference to ‘a’.
function foo() {
        console.log( a ); // undefined

        var a = 2;
}


3. Function Expressions
The following example demonstrates that hoisting is a declaration only construct; 
function expressions do not get hoisted, that is the variable declaration will be handled, but handled like a regular variable.

SOURCE CODE
The function call for foo() lives above the actual function declaration.
foo();

var foo = function() {
        console.log( a );

        var a = 2;
}

COMPILATION
However at compilation time foo is hoisted to the top of the scope.
var foo;

EXECUTION
The foo variable is now above the function call
foo() // TypeError: foo is not a function

In this case we get a TypeError, opposed to undefined as per the previous example; function expressions are not hoisted, so when the foo() function is called, it is attempting run what is an as of yet undefined binding 

—

Functions are top
From the above it is clear that function and variable declarations are hoisted to the top of their respective scopes, however which are hoisted first(or to the top)?

Function declarations are king; they hoist before variance declarations

Function vs. Variable
This example consists of a function declaration labelled foo, and a regular variable declaration named foo;

SOURCE CODE
foo()

var foo = 1;

function foo() {
    console.log(2);
}


COMPILATION
The foo function declaration is moved to the top
function foo() 

EXECUTION
The function can be ran, because foo is not the variable declaration;
foo() // 2

Function vs. Function Expression(variables)
This example consists of a function declaration labelled foo, and a function expression named foo;

SOURCE CODE
foo()

function foo() {
        console.log(1);
}

foo = function() {
        console.log(2);
};

COMPILATION
The foo function declaration is moved to the top
function foo() 

EXECUTION
The function can be ran, because foo is not the function expression;
foo() // 1


Function vs. Function
This example consists of a function declaration labelled foo, and a function expression named foo;

SOURCE CODE
foo();

function foo() {
  console.log(1);
}

function foo() {
  console.log(3);
}

COMPILATION
The foo function declaration is moved to the top
function foo() 

EXECUTION
The function can be ran because it is a function, but the last declaration will override the initial ones
foo() // 3

The above are present to hight the following;
DO NOT MAKE DUPLICATE DECLARATIONS IN A SINGLE SCOPE