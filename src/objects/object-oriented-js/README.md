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
A `class` represents a particular type of thing in an application, e.g. a car, an animal or say a **person** - **a classification of something**. 

Classes act as templates/blueprints for any instance of that particular thing we create in our program.

People(users) are often something you see in a program, and they play nice with object-oriented programming; you will often need to store a select set of information about a person, or multiple persons; name, age, gender, and you will want some way to print this all in a nice string, a biography.

```
const PersonClass = {
  givenName: string,
  familyName: string,
  age: number,
  gender: string,
  printBio(): {
    `this.name, this.age, this.gender`
  }
}
```

The above is a crude example of a `Person` class; we store a subset of information about a person(the information we need), and we attach functionality to our class which allows us to print the information whenever we desire.

The process of taking a select set of data for a particular thing, opposed ot __all__ the possible information for a thing is called `abstraction`.

#### Abstraction
This is the process of modelling a larger, more complicated thing into a more basic representation by cherry-picking only the things we need to know about that thing - for example, we know that there is a multitude of information we could derive from a `Person`, however we may only need to store/work with a subset of that information in our program; **abstract away the things that are relevant to the application, and dismiss everything else.**


### Instantiation
Once we have our base class, our template so to speak, we can then begin create multiple examples of that particular thing/class - this is known as instantiation; creating instances of a thing from a base class.

```
const PersonA = new Person("David", "Jones", 32, "Male");

{
  givenName: "David",
  familyName: "Jones",
  age: 32,
  gender: "Male",
}

```

The instances we create in our program utilise the functionality declared in the base class, but become their own identifiable 'thing' in the program.


### Inheritance

##### Polymorphism