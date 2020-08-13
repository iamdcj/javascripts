# Types in JavaScript

JavaScript, like all programming has a set a of (data)types that can be manipulated in order to build applications.

Types are the building blocks of applications, without a number of types to manipulate, programs would be very limited in their functionality. **Types in JS relate to values, not to variables**.


#### Type, a definition

This definition, like most things I know about JS, comes from Kyle Simpson's [YDKJS](https://github.com/getify/You-Dont-Know-JS) series;

> a type is an intrinsic, built-in set of characteristics that uniquely identifies the behavior of a particular value and distinguishes it from other values, both to the engine and to the developer. - K. Simpson

So, a type is a thing in a language which is recognisable by its make-up; engine/engineer knows that the value of _X_ is of type _X_ by the way it looks, for example;

```
const _X_ = 42; // it is a number, because it looks like a number
const _X_ = "David"; // it is a string, because it looks like a string of characters
```

It is this recognition/knowledge which allows engineers to utilise a particular types properties/methods to engineer functionality in an application.

_You need to know what it is you're working with, before you work with it._

#### 'Loose/Dynamic' typing

JavaScript is a loosely/dynamically typed language; _no type enforcement for bindings._

Loose typing does not require a variable to have a type assigned to it when declared, i.e. a 'loose' variable is dynamic because its value can be any type, at any time. JavaScript engines do not utilises type enforcement, and because of this it is argued by some that JS doesn't really have true types, however the ECMAScript specification uses the term "type", which should be good enough for any programmers wanting to engineer using the language.

It is best to think of values of having types, not the bindings; **a variable can hold different types at any point in the lifecycle of a program.**

##### typeof

The `typeof` operator makes this easier to understand; it evaluates the type of the value stored in a variable, _not the type of the variable_.

`typeof` will return one of seven values(str); [string](primitives/string), [number](primitives/number), [boolean](primitives/boolean), [undefined](primitives/undefined), [object\*\*](composite/object), function\*\*\* or [symbol](primitives/symbol).

```
// typeof String
const name = "David";
typeof name; // string

// typeof Number
const age = 32;
typeof age; // number

// typeof Boolean
const isTired = true;
typeof age; // boolean

// typeof Undefined
let pointless;
typeof age; // undefined

// typeof Symbol
const symbol = Symbol();
typeof symbol; // symbol
```

\*\* The `object` type will be returned when typeof is used on a binding which contains a regular `object`, or an `array`.

```
// typeof Object (Object)
const user = { name: 'David' }
typeof user; // object

// typeof Object (Array)
const skills = ['HTML', 'CSS', 'JavaScript'];
typeof skills; // object
```

\*\*\* A [Function](composite/function) is technically not a true type in the language - consider a sub-type of an [object](composite/object)

```
// typeof Function
const logger = () => console.log(name, age, measurements);
typeof logger; // function
```

---

## The Types

There are a total of seven built-in JS types, and they fall into two categories of types; Primitive and Composite(Objects).

### **Primitive Types**

A primitive type is any type which is not a collection of values(object/array) - these types are just solitary, standalone values - thethave no methods, and are at the lowest level of a language's implementation.

**Primitives are immutable**; the original cannot be altered - _*Primitives are passed by value, not by reference*_.

- [number](primitives/number)
- [string](primitives/string)
- [boolean](primitives/boolean)
- [undefined](primitives/undefined)
- [null](primitives/null)
- [symbol](primitives/symbol)

---

### **Composite Types**

Object is the final type, and only non-primitive type in the language specification;

[Objects](composite/object)

The `object` type covers objects, functions and arrays. Many would prefer functions and arrays to be distinct types, but they are actually types of `object`, and are probably best considered sub-types of `object`;

- [Arrays](composite/arrays)
- [Function](composite/function)

**Composite types are mutable**; you can edit the original - _*Composites are passed by reference, not by value*_.
