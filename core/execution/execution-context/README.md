# Execution Context

The execution context contains a number of objects which keep track of scope and the calling context(`this`), every time we step into a new `function`.

Each context goes through a two-phase process; the **creation phase** and the **execution phase**.

### Creation Phase

The creation of execution context is something which occurs during the compilation/interpret stage of a program's lifecycle - the engine will assess every function it enters when combing the source code, starting with the anonymous `function` which starts the program, and it will do the following things when **creating an execution context**;

#### Sets the global object

#### Determines the value of the [`this`](../../this/)

> The value associated with the this keyword within ECMAScript code associated with this execution context.

#### Determines Scope

This process stores all the variables and functions, setting any variables/function expressions to `undefined`(see [hoisting](../../scope/hoisting))

> Identifies the Lexical Environment used to resolve identifier references made by code within this execution context.

---

###### Resources

- [JS Tutorial Point](https://www.javascripttutorial.net/javascript-execution-context/)
