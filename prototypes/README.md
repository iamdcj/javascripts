# **Prototypes**

### What are Prototypes in JavaScript?
A prototype `[[Prototype]]` is an internal property for each object.

*The prototype proerty is a reference to another object - a prototype object*

These prototype objects can be thought of as templates, and objects can inherit methods and properties from these prototype objects; defining the inheritance model in JavaScript.

Prototype objects can also have prototype objects linked to them - this linkage forms what is know as the __Prototype chain__.

#### Prototype Chain
The prototype chain is a look-up resolution mechanism; objects can inherit from other objects via their prototypes, when this inheritance occurs it forms a chain of prototypes, thus when a property of an object is referenced, the prototypes of each object related by the prototyopes will queried for that propety.

The following is a rough example of how prototype chains are/can be formed"
```
Person object -- Prototype of Human -- Prototype of Animal -- Prototype of Object
```

__Accessing Object Properties and the Prototype Chain__

`Person.name`

If we attempt to access property `name` on the `Person` object, the look-up will first start at the `Person` object, if the property cannot be found, it will then go 'up' the chain and look at `Person`s `Protoptype` object, subsequently the look-up will continue if the property cannot be found on the `Person`'s prototype - it will look at the `Prototype`s prototype and so on until the chain ends.

If the property look-up cannot be resolved on the chain, `undefined` is returned.

*The Prototype chain examplifies how inheritance can be achieved using Prototypes.*


### Why use Prototypes?
The above detail on Prototypes and the Prototype chain illustrate how Prototypes will allow programmers to leverage inheritance in JS applications, and the ability to inherit methods and properties from other objects is a powerful feature; you can define a class-like template objects, which possess common properties and methods, and these can be shared across any instances which require these members. 


#### A note on ES6 classes
Nowadays it is much more common for JS programmers to run with `class`es - it is syntatic sugar on-top of JS' prototype-based inheritance, however using `class`es provides a cleaner API when programmers want to declare a particular class of something.


---
#### References
* [YDKJS](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md)
* [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [Backticks and Tildes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
* [Hackernoon](https://hackernoon.com/prototypes-in-javascript-5bba2990e04b)
* [W3S](https://www.w3schools.com/js/js_object_prototypes.asp)
