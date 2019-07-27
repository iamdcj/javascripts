# **Prototypes**

### What are Prototypes in JavaScript?
A prototype `[[Prototype]]` is an internal property for each object(inc. functions).

*The prototype is a reference to another object.*

JS is a prototype-based language; inheritance is achieved via the prototypes - the prototype objects can be though of as templates, and objects can inherit methods and properties from these proto objects.

Proto objects can also have prototype objects linked to them - this linkage forms what is know as the __Prototype chain__.


### Why use Prototypes?
Prototypes allow programmers to leverage inheritance in JS applications, and the ability to inherit methods and properties from other objects is a powerful feature; you can define a class-like template objects, which possess common properties and methods, and these can be shared across any instances which require these members. 


#### A note on ES6 classes
Nowadays it is much more common for JS programmers to run with `class`es - it is syntatic sugar on-top of JS' prototype-based inheritance, however using `class`es provides a cleaner API when programmers want to declare a particular class of something.


---
#### References
* [YDKJS](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md)
* [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
* [Backticks and Tildes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
* [Hackernoon](https://hackernoon.com/prototypes-in-javascript-5bba2990e04b)
* [W3S](https://www.w3schools.com/js/js_object_prototypes.asp)
