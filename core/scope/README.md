# Scope

## What is scope?

Scope is how we look for code in our applications; it defines what code is available at a given point in a program, e.g.
what bindings can be accessed inside function X when it is executing.

**_Scope is the set of rules which govern where bindings are stored and retrieved._**

#### How it happens

The scopes of a program are determined by the author, that is the code they create informs the engine of the program's intended scopes, then the scopes are cemented during the compilation/interpretation phase of the program’s lifecycle; [scope generation](01-generation).

Scope defined by the authored source code structure is known as [lexical scope](./lexical-scope).

Once the scopes have been generated using the scoping rules, we can then executed our scoped code; [execution of scoped code](02-execution).

#### Scope Levels

JavaScript possesses two levels of scope, and depending on where and how we declare them, our behinds will belong to either one of these scopes:

- [**Global Scope**](scope-levels/global) - code which can be accessed at all points of a program, i.e. lives in the global .

- [**Local Scope**](scope-levels/local) - code which is stored inside of one of the following creates its own local [lexical environment](./lexical-environment), and is not part of the global [lexical environment](./lexical-environment);
  - [Function](scope-levels/local/function)
  - [Block](scope-levels/local/block)
