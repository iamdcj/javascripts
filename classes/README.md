# Classes

## What is a Class?
A class represents a particular type of thing, e.g. a Car, a User, a Job.

They are a key component of Object Oriented Programming.

* Classes utilises the prototypal inheritance mechanism - they work pretty much the same, the syntatical sugar makes things clearer.
* Classes act as blueprints for one of these things.
* Classes contain fields and methods which can be referenced throughout a program's lifecycle.

## What does/can a class do?
Classes can do the following things:

- __Inheritance__: Inherit properties from parent/super classes.
- __Get/Set__: Retrieve and set properties using get and set methods
- __Static__ methods can be added, and called on the class itself, not instances of.
- __Decorators__: Classes and Class members can be decorated to extend functionality.

## Why use Classes?
They provide a friendlier, more-readable approach to inheritance/OOP.

---
## Notes
The following all apply to JS classes;

* They are not hoisted; you must declare a class before you can reference it.
* The code within a class is strictly strict mode.
* The naming convention for `Class` declarations is PascalCase, e.g. 'Car', 'UserProfile`, `FootballPlayer`. This is also applied to filenames which export a class.