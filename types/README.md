# Types in JavaScript

JavaScript, like all programming has a set a of (data)types that can be manipulated in order to build applications.

Types are the building blocks of applications, without a number of types to manipulate programs would be very limited.


#### Type, a definition
This definition, like most things I know about JS, is from Kyle Simpson's [YDKJS](https://github.com/getify/You-Dont-Know-JS) series;
> a type is an intrinsic, built-in set of characteristics that uniquely identifies the behavior of a particular value and distinguishes it from other values, both to the engine and to the developer. - K. Simpson

So, a type is a thing in a language which is recognisable by its make-up ~ engine/developer knows that type x is type x by the way it looks. It is this recognition/knowledge which allows programmers to utilise a particular types properties/methods.

#### 'Loose/Dynamic' typing
JavaScript is a loosely/dynamically typed language; *no type enforcement for bindings.*

Loose typing does not require a variable to have a type assigned to it when declared, i.e. a 'loose' variable is dynamic because its value can be any type, at any time - JS engines do not utilises type enforcement, and because of this it is argued by some that JS doesn't really have types, however the ECMAScript specification uses the term "type", which should be good enough for JS programmers.

It is best to think of values of having types, not the bindings; __a variable can hold different types at any point in the lifecycle of a program.__

##### typeof
The `typeof` operator makes this easier to understand; it evaluates the type of the value stored in a variable, *not the type of the variable*.

```
const name = "David";
typeof name; // string

const age = 32;
typeof age; // number

const skills = ['HTML', 'CSS', 'JavaScript'];
typeof skills; // object

const measurements = { height: 5.9, weight: 160 }
typeof measurements; // object

const logger = () => console.log(name, age, measurements);
typeof logger; // function
```

---
## The Types
There are a total of seven built-in JS types, and they fall into two categories of types; Primitive and Composite(Objects).

### __Primitive Types__
A primitive type is any type which is not an object - these types have no methods, and are at the lowest level of a language's implementation.

Primitives are immutable; the original cannot be altered - _*Primitives are passed by value, not by reference*_.

* [number](number)
* [string](string)
* [boolean](boolean)
* [undefined](undefined)
* [null](null)
<!-- * [symbol](symbol)] -->


---
### __Composite Types__
The `object` type covers objects, functions and arrays. It might make sense for functions and arrays to be distinct types, but nope, they are all types of objects in the JS language.

Compositie types are mutable; you can edit the original - _*Composites are passed by reference, not by value*_.

* [Objects](object)
* [Arrays](arrays)
* [Function](function)
