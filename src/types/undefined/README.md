# Undefined

### `typeof` undefined

The `undefined` primitive is returned when a reference to an uninitialized binding is made in a program; *`undefined` set as the value for any binding that is not given a explicit value at the time of declaration..*

```
var Empty;

console.log(Empty) // undefined
```

`undefined` is a keyword on the global object, and in certain implementations can be overwritten, however this is *_ALWAYS_* a bad idea, and the `undefined` property should not be mutated in any way.

#### undefined != undeclared
The error/warning messages in JavaScript can confuse developers into thinking an `undefined` variable is the same/similar to a binding which is not present in the accessible scope, i.e. not declared.

An undeclared variable is different to an `undefined` one; `undefined` variables 'exist', undeclared variables do not.

*Undeclared*
A variable which is not present in the available scope;
```
console.log(b); //! Uncaught ReferenceError: b is not defined
```
The error message adds to the confusion, but what it really means is that 
> variable b was not declared in the available scope.

Another reason for the confusion is how the `typeof` operator handles *undeclared* bindings;

```
var name;

console.log(typeof name); // undefined
console.log(typeof surname); // undefined

```

Both the `undefined` variable and *undeclared* variable reference have the same type; `undefined`, however it would be better if the *undeclared* reference returned a type of `undeclared`, alas this is highly unlikely to be changed.