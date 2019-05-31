# Global Scope

### What is it?
Any bindings which live directly inside the global environment; any variable or function declarations will become a member of the global object.


All bindings present in the global environment are scoped globally to the program, hence 'global scope'; these bindings can be referenced anywhere in the program.

It is the outermost lexical environemt ~= root lexical environment.


### The problems with global scope
It could be considered useful to have code available to all parts of the program, and in some cases it is, however the global object is something which can be mutated by all the various scripts loaded into a page, thus third-party scripts could overwrite any global bindings we've created, and vice-versa.

Avoiding global declarations is considered good practice, this way there can be no conflicts which would result in program errors.

### How to avoid, but have some global program state?
If you need some top-level variables to control state, you can harness lexical scoping by simply wrapping all program code in an overarching IIFE;
this provide scope protection from external scripts, and will allow nested code to access the bindings declared at the root level.

