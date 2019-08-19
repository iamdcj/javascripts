# Scope

## What is scope?

Scope is how we look for code in our applications; it defines what code is available at a given point in a program, e.g.
what bindings can be accessed inside function X when it is executing.

**_Scope is the set of rules which govern where bindings are stored and retrieved._**

#### How is scope created?

Scope is defined during the compilation/interpretation phase of program’s lifecycle: scope generation.

When the code is being compiled/interpreted the program's scope is defined lexically, i.e. the scope is determined by how the author structures their source code.

#### Scope Levels

JavaScript possesses two levels of scope, and dependant on where and how we declare them, our behinds will belong to either one;

- [**Global Scope**](scope-levels/global) - code which can be accessed at all points of a program, i.e. lives in the global lexical environment.

- [**Local Scope**](scope-levels/global) - code which is stored inside of one of the following creates its own local lexical environment, and is not part of the global lexical environment;
  - Function
  - Block
