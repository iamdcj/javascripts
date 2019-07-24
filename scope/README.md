# Scope

## What is scope?

Scope is how we look for code in our applications; it defines what code is available at a given point in a program, e.g.
what bindings can be accessed inside function X when it is executing.

__Scope is the set of rules which govern where bindings are stored and retrieved.__

#### How is scope created?

Scope is defined during the compilation/interpretation phase of program’s lifecycle: scope generation.

When the code is being compiled/interpreted the program's scope is defined lexically, i.e. the scope is determined by how the author structures their source code.

#### Scope varities

JavaScript possesses two varieties of scope, and the bindings we define belong to either one;

- __Global Scope__ - code which can be accessed at all points of a program, i.e lives in the global environment.
  
- __Local Scope__ - code which is stored inside of one of the following creates its own lexical environment, and is not part of the global environment;
  - Function
  - Block
