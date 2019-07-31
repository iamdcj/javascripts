# Types in JavaScript

JavaScript, like all programming has a set a of datatypes that can be manipulated in order to build applications.

Types(some of the) are the building blocks of any program written in a language, without them we can't do jack. 

JS provides methods and properties for its various datatypes.

It is argued that JS doesn't have types, due to its dynamic/loose nature, however the spec. uses the term "type". It is best to think of values of having types, not the bindings; a variable can hold different types at any point in the lifecycle of a program.

There are a total of seven built-in JS types, and they fall into two categories of types; Primitive and Composite.

### __Primitive Types__
These types are the lowest-level types in the language, do not possess and properties;

#### number (typeof number)
JS implementes one type for `number`, there is not a distinction between integer and fractional numbers in JS; all numbers in JS are floating-point numbers.

An integer in JS is a number without a decimal value, so `19.0` and `19` are both just `numers` is JS, opposed to `integer` and `decimal`.

Examples:

```
47
67.
87.1
9
-10
```



See [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) standard for more details on JS numbers.

#### string (typeof string)
Strings are a series of characters contained within single or double quotations; they usually represent lines of text.

Examples:

```
"I am David"
'HOLA MUNDIAL'
`String bean`
```

It is often thought that strings in JS are simply arrays of characters, but strings are immutable and cannot be modified in place, whereas arrays are mutable. 

If you want to treat a string as an array, there are many methods and approaches you can utilises in order to do so.


#### boolean (typeof boolean)
#### null (typeof object)
#### undefined (typeof undefined)
#### symbol (typeof symbol)


---
### __Composite Types__

#### object 
The `object` type covers objects, functions and arrays. It might make sense for functions and arrays to be distinct types, but nope, they are all types of objects in the JS language.


##### Objects (typeof object)
Objects are an unordered(not indexed) collection of properties(members). These properties can be a set of data(usually related), optionally accompanied by methods(functions attached to an object).

```
const Person = {
  name: "David"
  surname: "Jones",
  logFullName(): {
    console.log(`${this.name} ${this.surname`)
  }
}
```

The above object is made-up of three members, two of which contain related data, and a third member which contains a function(method).

*Objects can contain any valid JS datatype as a member value*


##### Arrays (typeof object)
Arrays are ordered collections of data; they tend to contain numerous pieces of related data.

###### String array
```
const names = ["David", "Stephanie", "Nole"];

const David = names[0] // retrieve item by index

```

JS arrays can contain an mixture of any valid datatype:
```
const mixedBag = [1, "two", { number: 3 }];
```

Arrays are typeof object, but can be better considered a subtype of object; they are objects but with numerically indexed members, and they possess an updating `.length` property

```
console.log(names.length) // 3
```

##### Functions (typeof function)
Functions are reusable pieces of executable code; they perform a specific task, and can return a value once complete.

```
function returnFullName(givenName, familyName) {
  return `${givenName} ${familyName}`
}

const fullName = returnFullName("David", "Jones");
```

Functions are technically subtypes of objects, despite what `typeof aFunc()` may return. Functions are callable objects, they can possess properties, and they have a length property.
