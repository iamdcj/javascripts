# Inheritance

### What is it?
Inheritance in programming a mechanism which allows one thing to successfully utilise properties/methods from another thing. 


### How it works in JS?
JS is a prototype-based language, and inheritance is achieved via prototypes;

> Objects have an internal `prototype` property which points an object; a prototype object. These prototype objects act as templates which other objects can inherit properties and methods from. - [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

### How to utilisie it
In order to utilises inheritance in JS, we first need a starting point, something which can be used multiple times - a thing which other things will inherit from; __a blueprint object__.

#### 'Constructor' functions
A key component of making inheritance work in JavaScript are what are referred to as **'Constructor' functions**; functions which construct a thing(the blueprint object) - the constructor will then be use to form multiple instances of a particular *thing* in the program.


The following is an example of a constructor function:
```
function Player(name, position) {
  this.name = name;
  this.position = position;
}
```

We use the constructor to generate our 'Player' blueprint:
```
const Xavi = new Player("Xavi Hernandez, "CM");
```

We can use the `Player()` constructor to generate as many Player instances we desire, each one inheriting properties and methods from the original blueprint object.

#### Adding things to a thing for all things
If we want to add additional things to the blueprint object, which will then be inherited by any instances created by the constructor, we must add them to the blueprint constructor's prototype; __the prototype is what makes inheritance in JavaScript possible__

Add a method to the blueprint constructor which logs something from within each Player instance;
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
NOTES
** All functions preceded by `new` will indeed get a `constructor` property; this `constructor` property is a reference to the original function.
