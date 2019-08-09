# Classes

## What is a Class?
A class represents a particular type of thing, e.g. a Car, a User, a Job.

They are a key component of Object Oriented Programming;

* Classes utilises the prototypal inheritance mechanism - they work pretty much the same,  but with some syntatic sugar to provide clarity when utilising Object-Oriented Programming in the language.
* Classes act as blueprints for a particular type of thing, i.e. a classification of something in the codebase.
* Classes contain fields and methods which can be referenced throughout a program's lifecycle.

All of this can be acheived with regular objects and constructor functions, however `class`es provide a friendlier, more-readable approach to inheritance in JavaScript.

---

#### Class Inheritance
A key feature of classes is their friendlier syntax when utilising inheritance in programs;

#### Features
The clear syntax in regards to inheritance is often the main reason to use classes, however the following features are also very useful when using classes in JS programs;
- [__Get/Set__](getters-setters): the `get` and `set` accessors can be used within classes.
- [__Decorators__](decorators): Classes and their internal members can be decorated(`*`) to extend the functionality of a particular class method.
- __Static__ methods can be added to, and called on the class itself.


---
#### Notes
The following all apply to JS classes;

* They are not hoisted; you must declare a class before you can reference it.
* The code within a class is strictly strict mode.
* The naming convention for `Class` declarations is PascalCase, e.g. 'Car', 'UserProfile`, `FootballPlayer`. This is also applied to filenames which export a class.