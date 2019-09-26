# Variables

Variables are containers for values, i.e. they hold pieces of code which can be reused whevener needed during the lifecycle of an application.

## Declarations

There a three ways to declare variables in Javascript:

### [`const`](/const)

`const` declarations are variables which cannot be reassigned a new value later in the application's lifecycle, thus must be initialized upon creation.

### [`let`](/let)

`let` declarations are variables which can be reassigned a new value later in the application.

### `var`

`var` declarations are variables which can be reassigned a new value later in the application.

## Semantics

Prior to ES2015 there was only one type of variable declaration; `var`, and all variables were created using the `var` keyword. This was, and still is fine, however the introductin of `const` and `let` variable declarations provides intrinsic semantic value when authoring applications

The `const` and `let` keywords provide clarity on what is likely to happen with the variable declarations, and the values inside of them;

```
const foo = "bar"
```

`foo` has a value which will not change later in the application's lifecycle.

```
let bar
```

`bar` does not yet hold a value, but will later in the application's lifecycle.
