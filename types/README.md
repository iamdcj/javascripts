# Types in JavaScript

JavaScript, like all programming has a set a of (data)types that can be manipulated in order to build applications.

Types are the building blocks of any program written in a language, without them we can't do jack. 


#### Type, a definition
This definition, like most things I know about JS, is from Kyle Simpson's [YDKJS](https://github.com/getify/You-Dont-Know-JS) series;
> a type is an intrinsic, built-in set of characteristics that uniquely identifies the behavior of a particular value and distinguishes it from other values, both to the engine and to the developer. - K. Simpson

So, a type is a thing in a language which is recognisable by its make-up ~ engine/developer knows that type x is type x by the way it looks. It is this recognition/knowledge which allows programmers to utilise a particular types properties/methods.

#### 'Loose/Dynamic' typing
JavaScript is a loose/dynamic typed language; *no type enforcement for bindings.*

Loose typing does not require a variable has a type assigned to it, i.e. a 'loose' variable is dynamic because its value can be any type, at any time - JS engines do not utilises type enforcement, and because of it is argued that JS doesn't have types, due to its dynamic/loose nature, however the ECMAScript specification uses the term "type", which works for me.

It is best to think of values of having types, not the bindings; *a variable can hold different types at any point in the lifecycle of a program.*

The `typeof` operator makes this easier to understand; it evaluates the type of the value stored in a variable.

---
## The Types
There are a total of seven built-in JS types, and they fall into two categories of types; Primitive and Composite(Objects).

### __Primitive Types__
A primitive type is any type which is not an object - these types have no methods, and are at the lowest level of a language's implementation.

Primitives are immutable; the original cannot be altered - _*Primitives are passed by value, not by reference*_.

* [number](number)
* [string](string)
<!-- * [boolean](boolean)] -->
<!-- * [null](null)] -->
<!-- * [undefined](undefined)] -->
<!-- * [symbol](symbol)] -->


---
### __Composite Types__
The `object` type covers objects, functions and arrays. It might make sense for functions and arrays to be distinct types, but nope, they are all types of objects in the JS language.

Compositie types are mutable; you can edit the original - _*Composites are passed by reference, not by value*_.

* [Objects](object)
* [Arrays](arrays)
* [Function](function)
