# **Prototypes**

JavaScript is a prototype-based language; `prototype`s are used to create inheritance from one object to another, i.e. it is the prototypes which allow objects to share functionality and features.

### What is a Prototype in JavaScript?

A prototype `[[Prototype]]` is an internal property for each object.

The `prototype` property is a reference to another object; **a prototype object**.

These prototype objects can be thought of as templates, and objects can inherit methods and properties from these prototype objects; _defining the inheritance model in JavaScript._

Prototype objects can also have prototype objects linked to them - this linkage forms what is know as the **Prototype chain**. It is formed when objects inherit features from another object's `prototype` object, for example;

**Constructor**

```
function Player(name, age, position, skillLevel) {
  this.name = name;
  this.age = age;
  this.position = position;
  this.skillLevel = skillLevel;
}
```

**Instance**

```
const Ronaldinho = new Player("Ronaldinho Gaucho", 38, "AM", 96);
```

Now let's add something to the constructor function's prototype object;

```
Player.prototype.bio = function() {
  console.log(`
    ${this.name} is a ${this.age}-year old ${this.position},
    with a skill level of ${this.skillLevel}
  `);
};
```

So, we now have something on the `Player` constructor's prototype - this is inherited by all instances of `Player`;

```
Ronaldinho.bio();

// Ronaldinho Gaucho is a 38-year old AM, with a skill level of 96

```

👆the `Ronaldinho` instance utilises the `bio` method from it's constructor via it's `prototype` object, but that doesn't seem like much of a chain?

Well, any instance of `Player` will also have access to the `Player`'s own constructor function; `Object`;

```
Player.prototype

// __proto__: Object
```

The `Ronaldinho` can now access native features from `Object`;

```
Ronaldinho.toString()

// [object Object]
```

This is a basic, but clear example of how `prototypes` are 'chained', and how these connected `prototype` objects allow code reuse across any of the objects which are part of the chain.

---

#### References

- [YDKJS](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md)
- [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Backticks and Tildes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Hackernoon](https://hackernoon.com/prototypes-in-javascript-5bba2990e04b)
- [W3S](https://www.w3schools.com/js/js_object_prototypes.asp)
