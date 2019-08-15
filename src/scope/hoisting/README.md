# Hoisting
Hoisting is something which occurs during the compiling process of an application - bindings; variables and functions, are the first things to be processed, completely separate to the execution phase.

The JS engine will assess any declarations first, i.e. it will analyze the left-hand side statements before touching the right-hand side initializers. The result of this processing is known as _hoisting_; binding declarations are essentially moved to the top of their lexical environment.


__At a high-level the compiler will do the following things to perform hoisting__;

1. Assess the lexical environment.
2. Determine which declarations live in the lexical environment;
3. Create a binding at the top of the lexical environment for the declarations;
  3.1 Variables are initialised to `undefined`
  3.2 Functions are initialised with their actual value 


## Hoisting Examples
The following examples demonstrate how hoisting occurs with function declarations and variables, but not function expressions;


### __Example 1__ - Basic variable hoisting 
__Source__
The `name` declaration lives before the initialization in this snippet, leading some to think the log would return `undefined`;
```
name = "David"

var name;

console.log(name); // David
```
however, the `name` declaration is handled during the compile phase, and as a result is 'moved-up' to the top of the scope, above the value assignment(initialization)

__Compilation__
```
var name;
```
when it comes to execution the `name` binding has an initializer because assignments and execution code is left in the same spot is as authored;
__Execution__
```
name = "David"

console.log(name); // David
```
thus the log will print tehe initialized value because the declaration was 'hoisted' above the assignment before runtime.

### __Example 2__ - Function Declarations
This example demonstrates hoisting using function declarations, AND how hoisting occurs per-scope;

__Source__
The function call for foo() lives above the actual function declaration.
```
foo();

function foo() {
        console.log( a );
        var a = 2;
}
```
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



#### __Example 3__ - Function Expressions
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