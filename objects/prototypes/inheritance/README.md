# Inheritance

### What is it?
Inheritance a mechanism which allows one thing to successfully reference/utilise properties/methods from another thing. 


### How it works in JS?
JS is a prototype-based language, and inheritance is achieved via prototypes;

> Objects have an internal `prototype` property which points an object; a prototype object. These prototype objects act as templates which other objects can inherit properties and methods from.

### How to utilisie it
In order to utilises inheritance in JS, we first need a starting point, something which can be used multiple times - a thing which other things will inherit from.

#### 'Constructor' functions
A key component of making inheritance work in JavaScript are what are referred to as 'Constructor' functions**; functions which construct a thing(object) - this thing will then be use to form multiple instances of thing.


The following is an example of a constructor function:
```
function Player(name, position) {
  this.name = name;
  this.position = position;
}
```

Which we use to generate a new 'Player' instance:
```
const Xavi = new Player("Xavi Hernandez, "CM");
```

We can use the `Player()` constructor to generate as many instances we desire, each one inheriting properties and methods from the original.

#### Adding members things
If we want to add additional things to the constructor function, which will then be inherited by any instances created by the constructor, we must add them to the constructors prototype; the prototype is used for inheritance in JavaScript.

```
Player.prototype.bio = function() { 
  console.log(`My name is ${this.name}, and I play ${this.position}`)
}
```

All instances of Player can now reference the `bio` property via the prototype of Player.

```
Xavi.bio()
// My name is Xavi Hernandez, and I play CM
```

And, thanks to the prototype chain our instances can also access the built-in Object's methods and properties;

```
Xavi.valueOf() // valueOf is a method on Object, the end of the chain so to speak.

// Player {name: "Xavi Hernandez", position: "CM"}
```

We can see from the above that inheritance across multiple instances of a thing is possible because of 'prototypal inheritance'.

---
NOTES
** All functions preceded by `new` will indeed get a `constructor` property; this `constructor` property is a reference to the original function.