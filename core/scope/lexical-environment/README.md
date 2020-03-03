# Lexical Environment

A lexical environment is a place in a program where code lives. It is a section of the source where functions and variables are declared, also known as scope.

> A Lexical Environment is a specification type used to define the association of Identifiers to specific variables and functions based upon the lexical nesting structure of ECMAScript code - [JS Spec.](https://tc39.es/ecma262/#sec-lexical-environments)

Every program contains bindings, and these bindings belong to a specific lexical environment.

**_It is the nesting of these environments which determine the [lexical scope](./lexical-scope) of a program._**

### Lexical Environments Generation?

Each time we create a new _**function**_, _**block**_ or _**module**_ a lexical environment will be generated when the source code is compiled/interpreted;

> Usually a Lexical Environment is associated with some specific syntactic structure of ECMAScript code such as a `FunctionDeclaration`, a `BlockStatement`, or a Catch clause of a `TryStatement` and a new Lexical Environment is created each time such code is evaluated - [JS Spec.](https://tc39.es/ecma262/#sec-lexical-environments)

#### Lexical Environment Contents?

A lexical environemnt consists of the following:

- **Environment Record** - a record of all the variable and function declarations within the scope of that environment.

- **Outer Reference** - a reference to the surrounding lexical environment.

> A Lexical Environment consists of an Environment Record and a possibly null reference to an outer Lexical Environment. - [JS Spec.](https://tc39.es/ecma262/)

### Lexical Environments Varieties

The following are the different types of Lexical Environments that can be generated in a JS application;

#### Global Environment (Global Scope)

A lexical environment without an outer lexical environment is the 'global environment';

> global environment is a Lexical Environment which does not have an outer environment. - [JS Spec.](https://tc39.es/ecma262/#sec-lexical-environments)

_**The Global Environment is generated for each program.**_

#### Function Environment (Function Scope)

Each time a function is invoked, a new lexical environment is created for that respective function.

> A function environment is a Lexical Environment that corresponds to the invocation of an ECMAScript function object. A function environment may establish a new this binding. A function environment also captures the state necessary to support super method invocations. - [JS Spec.](https://tc39.es/ecma262/#sec-lexical-environments)

#### Module Environment (Module Scope)

Each time a module is created in the source code, a new lexical environment is created for that respective module.

> A module environment is a Lexical Environment that contains the bindings for the top level declarations of a Module. It also contains the bindings that are explicitly imported by the Module. The outer environment of a module environment is a global environment. - [JS Spec.](https://tc39.es/ecma262/#sec-lexical-environments)

---

##### Resources

- [2ality - LexicalEnvironment versus VariableEnvironment](https://2ality.com/2011/04/ecmascript-5-spec-lexicalenvironment.html)
- [ECMAScript® 2020 Language Specification](https://tc39.es/ecma262/#sec-lexical-environments)
