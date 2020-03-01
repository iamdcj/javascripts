# Inheritance

Inheritance in programming a mechanism which allows one thing to successfully utilise properties/methods from another thing.

JS is a prototype-based language, and inheritance is achieved via [prototypes](prototypes);

> Objects have an internal `prototype` property which points an object; a prototype object. These prototype objects act as templates which other objects can inherit properties and methods from. - [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

### How to utilise it

In order to utilises inheritance in JS, we first need a starting point, something which can be used multiple times - a _thing_/which other _things_ will inherit from; **a blueprint object**.

These things are better know as 'classes'.

#### 'Constructor' functions

A key component of making inheritance work in JavaScript are what are referred to as **'Constructor' functions**; functions which construct a _thing_; the blueprint object 👆.

The 'constructor' will then be used to form multiple instances of a particular Class(thing), for example;

```
function Player(name, position) {
  this.name = name;
  this.position = position;
}
```

We use the constructor to generate our `Player` instances;

```
const Xavi = new Player("Xavi Hernandez, "CM");
```

Each instance inherits properties and methods from the original Class.

#### Adding things to a thing for all things

If we want to add additional things to the Class, which will then be inherited by any instances created by the constructor, we must add them to the Class constructor's `prototype`.

So, let's add a method to the Class constructor which will be available to all instances of the `Person` class;

```
Player.prototype.bio = function() {
  console.log(`My name is ${this.name}, and I play ${this.position}`)
}
```

All instances of Player can now reference the `bio` property via the prototype of the blueprint constructor for `Player`.

```
Xavi.bio()
// My name is Xavi Hernandez, and I play CM
```

#### Inheriting from the OG Object

We can also access the built-in Object's methods and properties via the prototype chain:

```
Xavi.valueOf() // valueOf is a method on Object, the end of the chain so to speak.

// Player { name: "Xavi Hernandez", position: "CM" }
```

We can see from the above that inheritance across multiple instances of a thing is possible because of JavaScript's 'prototypal inheritance' mechanism.

---

##### Notes

- All functions preceded by `new` will indeed get a `constructor` property; this `constructor` property is a reference to the original function.
