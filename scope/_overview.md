# Scope

## What is scope?

Scope is how we look for code in our applications; it defines what code is available at a given point in a program, e.g.
what bindings can be accessed inside function X when it is executing.

Scope is the set of rules which govern where bindings are stored, and how they are retrieved.

#### How is scope created?

Scope is defined during the compilation phase of program’s lifecycle: scope generation

#### Scope varities

JavaScript possesses two varieties of scope, and the bindings we define belong to either one;

- Global Scope; code which can be accessed at all points of a program, i.e live in the global environment.
- Local Scope; code which is stored inside of one of the following creates it’s own lexical environment, and is not part of the global environment;
  - Function
  - Block\*
