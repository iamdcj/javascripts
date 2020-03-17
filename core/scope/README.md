# Scope

Usually when talking about scope, we are referring to the process of looking-up and retrieving pieces of code in our applications.

**_Scope is the set of rules which govern where bindings are stored and retrieved._**

It defines what bindings are available to us when we are in a given lexical environment, e.g. if we call a function, what variables can we get to from within the function body.

#### Defining the Scope(s)

The scopes of a program are determined by the author; the code they create informs the engine of the program's intended scopes - these scopes are then cemented during the compilation/interpretation phase of the program’s lifecycle; [scope creation](01-creation).

Scope defined by the authored source code structure is known as [lexical scope](./lexical-scope).

Once the scopes have been generated using the scoping rules, we can then executed our scoped code; [execution of scoped code](02-execution).

#### Scope levels

JavaScript possesses two levels of scope, and depending on where and how we declare them, our bindings will belong to either one of these scopes:

- [**Global Scope**](scope-levels/global) - code which can be accessed at all points of a program, i.e. lives in the global .
- [**Local Scope**](scope-levels/local) - code which is stored inside of one of the following creates its own local [lexical environment](./lexical-environment), and is not part of the global [lexical environment](./lexical-environment);
  - [Function](scope-levels/local/function)
  - [Block](scope-levels/local/block)
