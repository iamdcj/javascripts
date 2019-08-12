# Object-Oriented Programming: Basics (in JavaScript)

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

Classes act as templates for any instance of that particular thing we create in our program; classes are the blueprints, __objects are created from the blueprint__.

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

### Abstraction
This is the process of modelling a larger, more complicated thing into a more basic representation by cherry-picking only the things we need to know about that thing - for example, we know that there is a multitude of information we could derive from a `Person`, however we may only need to store/work with a subset of that information in our program; **abstract away the things that are relevant to the application, and dismiss everything else.**


### Instantiation
Once we have our base class, our template so to speak, we can then begin create multiple examples of that particular thing/class - this is known as instantiation; creating instances(objects) of a thing from a base class.

Object instances are created via the base class' constructor; a function which generates an instance of a thing whenever it is ran;

```
const PersonA = new Person("David", "Jones", 32, "Male");
```

```
// Person A
{
  givenName: "David",
  familyName: "Jones",
  age: 32,
  gender: "Male",
}
```
We can create numerous instances from the base class using its constructor; the instance is instantiated from the base class.
```
const PersonB = new Person("John", "Yossarian", 32, "Male"); // Person B is instantiated from Person
{
  givenName: "John",
  familyName: "Yossarian",
  age: 28,
  gender: "Male",
}

```

The instances we create in our program inherit the functionality declared in the base class, but become their own identifiable 'thing' in the program, this is useful when we want to extend a new class, from an already existing 'base' class - this extension is achieved via `inheritance`. 

### Inheritance
Inheritance is the process of one thing gaining features from another thing, in this particular context we are talking about a class inheriting features from another class. In OOP, inheritance is very common, and it is a powerful feature; if we know that class X will use some/all of the code from class Y then it makes sense for X to inherit the features/data from Y. 

We have our base `Person` class;
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
But we want a more specialised class, a class for Players - this class will use all the features from the `Parent` class, but will also have some additional functionality pertaining to Players only.
```
const PlayersClass = {
  ...PersonsClassFeatures, // inherit everything from Person
  position: string, // additional/new
  club: string, // additional/new
  value: number // additional/new
}
```

We can also do the same thing for a `Coach` class; inherit from the Person base class;
```
const PlayersClass = {
  ...PersonsClassFeatures, // inherit everything from Person
  club: string, // additional/new
  specialism: string // additional/new
}
```

The ability to reuse common code across multiple classes prevents code duplication, and provides classes and their subclasses  with the ability to extend whenever necessary; __*we can generate instances which have unique features from a class, but common features from a parent class.*__

### Polymorphism
The process of creating multiple object instances with the same set of underlying functionality, which is derived from a base class, is known as `Polymorphism`.

In the above snippets we have `Players` and `Coaches`; any instances of these classes will have the  features/data from the 'Person' class, thus every `Player` and 'Coach` instance inherits from the 'Person` class. 


---
#### References
* [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
* [charanrajgolla - dev.to](https://dev.to/charanrajgolla/beginners-guide---object-oriented-programming)