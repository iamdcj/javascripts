# Object-Oriented Programming in JavaScript

Object-Oriented Programming is an approach to engineering which utilises objects in a programming language to 'model' things in our applications that exist in the real world - we can represent actual things in our programs using objects, and create eassy-access to functionality and data.

This example models a `player` using object syntax; the information related to the `player` is __encapsulated__ within a specific namespace.
```
const player = {
  name: "Xavi Herndandez"
  position: "CM",
  age: 32,
  bio: "A string"
}
```

#### Encapsulation
Essentially just a fancy word for 'storing things' in a thing; `object`s encapsulate related pieces of data and methods, i.e. the data and functions are stored within an object. These objects are given a namespace(label) allowing for easy reference to properties/methods.

```
{
  console.log(player.position); // "Xavi Herndandez
}
```

**Engineers will often use objects(see above) to send and store chunks of data across the network to/from a particular API**

---

## Classes


#### Abstraction

#### Instantiation

#### Inheritance

##### Polymorphism