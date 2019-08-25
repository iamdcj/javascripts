# Global Scope

Any bindings which live directly inside the global lexical environment, these bindings become a member of the global object.

All bindings present in the global environment are scoped globally to the program, hence 'global scope', and these bindings can be referenced anywhere in the program.

It is the outermost lexical environemt ~= root lexical environment.

## Dangers of working in Global Scope

It could be considered useful to have code available to all parts of the program, and in some cases it is, however the global object is something which can be mutated by all the various scripts loaded into a page

**_Third-party scripts could overwrite any global bindings we've created, and vice-versa._**

Avoiding global declarations where possible is considered good practice, this way there can be no conflicts which would result in program errors.

### Collision

Any time an enginner declares a `var` or `function` in the global lexical environment they run the risk of namespace collisions, which will overwrite the existing binding.

The following demonstrates how the latter declaration will overwrite the value of the existing declaration

```
var something = "something";
var something = "something else";

console.log(something) // something else

```

This is a trivial example, but when an application runs alongside other third-party scripts, there is a real danger of the application falling over at some point in its lifecycle if global bindings conflict.

### Collision avoidance

If you need some top-level variables to control state, you can harness lexical scoping by simply wrapping all program code in an overarching `IIFE`, or if consistent use of `let` and `const` is present in the application a wrapping block `{}` will work.

#### IIFE

If top-level application code is wrapped within an Immediately Invoked Function,s then it is shielded from potential global scope collisions;

```
(function() {
  var hidden = "can't see me";

  console.log("global", hidden);

})()

// global can't see me

console.log(hidden); // ReferenceError: hidden is not defined
```

#### Block

If top-level application code declared using `let` or `const` is wrapped within a block, then it is shielded from potential global scope collisions;

```
{
  const hidden = "can't see me";
  console.log("global", hidden);
}

// global can't see me

console.log(hidden); // ReferenceError: hidden is not defined
```
